import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { fetchProduct, formatPrice } from '../data/products.js';
import { useCart } from '../hooks/useCart.js';

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const shouldReduceMotion = useReducedMotion();
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    setProduct(null);
    setError('');
    setStatus('loading');

    fetchProduct(id, { signal: controller.signal })
      .then((loadedProduct) => {
        setProduct(loadedProduct);
        setStatus('success');
      })
      .catch((requestError) => {
        if (requestError.name === 'AbortError') return;
        setError(requestError.message);
        setStatus('error');
      });

    return () => controller.abort();
  }, [id]);

  if (status === 'error') {
    return (
      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <p role="alert" className="text-red-600">{error}</p>
        <Link
          className="mt-5 inline-block rounded-md text-sm font-semibold text-brand hover:text-brand-dark focus-visible:outline-none"
          to="/catalog"
        >
          Back to catalog
        </Link>
      </section>
    );
  }

  if (status === 'loading' || !product) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="h-[420px] animate-pulse rounded-2xl bg-slate-200" aria-hidden="true" />
          <div className="space-y-5">
            <div className="h-4 w-24 animate-pulse rounded bg-slate-200" aria-hidden="true" />
            <div className="h-10 w-4/5 animate-pulse rounded bg-slate-200" aria-hidden="true" />
            <div className="h-24 w-full animate-pulse rounded bg-slate-200" aria-hidden="true" />
          </div>
        </div>
        <span className="sr-only">Loading product</span>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="mb-8 rounded-md text-sm font-semibold text-slate-500 hover:text-ink focus-visible:outline-none"
      >
        ← Back
      </button>

      <div className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-2 md:p-8">
        <div className="flex min-h-[420px] items-center justify-center rounded-2xl bg-slate-50 p-10">
          <motion.img
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            src={product.image}
            alt={product.name}
            className="max-h-[380px] w-full object-contain"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            {product.category}
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-600">{product.description}</p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <span className="text-3xl font-black">{formatPrice(product.price)} UZS</span>
            {product.rating?.rate > 0 && (
              <span className="text-sm text-slate-500">
                ★ {product.rating.rate.toFixed(1)} ({product.rating.count})
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={() => addToCart(product)}
            className="mt-8 w-full rounded-xl bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand focus-visible:outline-none sm:w-auto"
          >
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
}
