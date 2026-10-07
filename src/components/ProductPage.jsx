import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchProduct, formatPrice } from '../data/products';
import { useCart } from './CartContext';

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    setProduct(null);
    setError('');
    fetchProduct(id).then(setProduct).catch((e) => setError(e.message));
  }, [id]);

  if (error) return <div className="mx-auto max-w-3xl px-4 py-20 text-center"><p className="text-red-600">{error}</p><Link className="mt-5 inline-block text-sm font-semibold text-blue-600" to="/catalog">Вернуться в каталог</Link></div>;
  if (!product) return <div className="mx-auto max-w-7xl px-4 py-20 text-center text-sm text-slate-500">Загрузка товара…</div>;

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <button type="button" onClick={() => navigate(-1)} className="mb-8 text-sm font-semibold text-slate-500 hover:text-slate-950">← Назад</button>
      <div className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-2 md:p-8">
        <div className="flex min-h-[420px] items-center justify-center rounded-2xl bg-slate-50 p-10"><motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} src={product.image} alt={product.name} className="max-h-[380px] w-full object-contain" /></div>
        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">{product.category}</p>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{product.name}</h1>
          <p className="mt-5 text-base leading-7 text-slate-600">{product.description}</p>
          <div className="mt-7 flex flex-wrap items-center gap-4"><span className="text-3xl font-black">{formatPrice(product.price)} UZS</span>{product.rating?.rate > 0 && <span className="text-sm text-slate-500">★ {product.rating.rate.toFixed(1)} ({product.rating.count})</span>}</div>
          <button type="button" onClick={() => addToCart(product)} className="mt-8 w-full rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-600 sm:w-auto">Добавить в корзину</button>
        </div>
      </div>
    </section>
  );
}
