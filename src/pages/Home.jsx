import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import ProductCard from '../components/ProductCard.jsx';
import ProductSkeleton from '../components/ProductSkeleton.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { fetchProducts } from '../data/products.js';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const controller = new AbortController();

    fetchProducts({ signal: controller.signal })
      .then(setProducts)
      .then(() => setStatus('success'))
      .catch((requestError) => {
        if (requestError.name === 'AbortError') return;
        setError(requestError.message);
        setStatus('error');
      });

    return () => controller.abort();
  }, []);

  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Net Store
            </p>
            <h1 className="max-w-3xl text-4xl font-black tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Simple shopping, without the clutter.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              A small e-commerce frontend focused on a clear catalog, useful filtering, and a
              straightforward cart flow.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                className="rounded-xl bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand focus-visible:outline-none"
                to="/catalog"
              >
                Browse catalog
              </Link>
              <Link
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink focus-visible:outline-none"
                to="/about"
              >
                About the project
              </Link>
            </div>
          </div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl bg-ink p-8 text-white shadow-xl"
          >
            <div className="flex min-h-72 flex-col justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Featured collection
              </span>
              <div>
                <p className="text-3xl font-bold">Find your next device</p>
                <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
                  Search products by name, category, and price, then manage quantities directly in
                  the cart.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Catalog"
          title="Featured products"
          action={
            <Link
              to="/catalog"
              className="rounded-md text-sm font-semibold text-brand hover:text-brand-dark focus-visible:outline-none"
            >
              View all →
            </Link>
          }
        />

        {status === 'error' && (
          <div
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
          >
            {error}
          </div>
        )}

        {status === 'loading' && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }, (_, index) => (
              <ProductSkeleton key={index} />
            ))}
          </div>
        )}

        {status === 'success' && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            ['Fast delivery', 'A simple delivery promise keeps the checkout experience focused.'],
            ['Clear support', 'Product details and navigation stay easy to understand.'],
            ['Easy returns', 'The interface leaves room for a future return flow without pretending it exists.'],
          ].map(([title, text]) => (
            <div key={title} className="border-l border-slate-700 pl-5">
              <h3 className="font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
