import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { fetchProducts, formatPrice } from '../data/products';

export default function CatalogPage() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('all');
  const [maxPrice, setMaxPrice] = useState(10000000);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts().then(setProducts).catch((e) => setError(e.message)).finally(() => setLoading(false));
  }, []);

  const categories = useMemo(() => ['all', ...new Set(products.map((p) => p.category))], [products]);
  const visible = useMemo(() => products.filter((p) =>
    p.price <= maxPrice &&
    (category === 'all' || p.category === category) &&
    p.name.toLowerCase().includes(query.toLowerCase())
  ), [products, category, maxPrice, query]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Net Store</p><h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Каталог</h1><p className="mt-2 text-sm text-slate-500">{visible.length} товаров</p></div>
        <Link to="/" className="text-sm font-semibold text-slate-600 hover:text-blue-600">← На главную</Link>
      </div>
      <div className="mb-8 grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-[1fr_220px_260px]">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Поиск товара..." className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500">{categories.map((item) => <option key={item} value={item}>{item === 'all' ? 'Все категории' : item}</option>)}</select>
        <label className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-2 text-xs text-slate-500"><span className="whitespace-nowrap">До {formatPrice(maxPrice)} UZS</span><input className="w-full" type="range" min="0" max="10000000" step="100000" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} /></label>
      </div>
      {loading && <p className="py-12 text-center text-sm text-slate-500">Каталог загружается…</p>}
      {error && <p className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</p>}
      {!loading && !error && visible.length === 0 && <p className="rounded-xl bg-white p-10 text-center text-slate-500">Ничего не найдено.</p>}
      {!loading && !error && visible.length > 0 && <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{visible.map((product) => <ProductCard key={product.id} product={product} compact />)}</div>}
    </section>
  );
}
