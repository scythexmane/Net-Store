import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import SectionHeader from '../components/SectionHeader';
import { fetchProducts } from '../data/products';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts().then(setProducts).catch((e) => setError(e.message));
  }, []);

  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Net Store</p>
            <h1 className="max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">Техника без лишнего шума.</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">Чистый каталог электроники, понятные цены и быстрый путь от товара до корзины.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600" to="/catalog">Открыть каталог</Link>
              <Link className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-950" to="/about">О магазине</Link>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl">
            <div className="flex min-h-72 flex-col justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Featured collection</span>
              <div>
                <p className="text-3xl font-bold">Найди своё устройство</p>
                <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">Фильтрация по категории и цене помогает быстро найти нужный товар.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Каталог" title="Популярные товары" action={<Link to="/catalog" className="text-sm font-semibold text-blue-600 hover:text-blue-800">Смотреть всё →</Link>} />
        {error ? <p className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</p> : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{products.slice(0, 8).map((product) => <ProductCard key={product.id} product={product} />)}</div>
        )}
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            ['Быстрая доставка', 'Доставка по городу без лишних шагов.'],
            ['Поддержка 24/7', 'Поможем с выбором и ответим на вопросы.'],
            ['30 дней на возврат', 'Понятные условия возврата без сложных процедур.'],
          ].map(([title, text]) => <div key={title} className="border-l border-slate-700 pl-5"><h3 className="font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{text}</p></div>)}
        </div>
      </section>
    </div>
  );
}