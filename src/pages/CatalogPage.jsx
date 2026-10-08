import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import ProductSkeleton from '../components/ProductSkeleton.jsx';
import { fetchProducts, formatPrice } from '../data/products.js';

export default function CatalogPage() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState(0);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    fetchProducts({ signal: controller.signal })
      .then((loadedProducts) => {
        setProducts(loadedProducts);
        setMaxPrice(Math.max(...loadedProducts.map((product) => product.price)));
        setStatus('success');
      })
      .catch((requestError) => {
        if (requestError.name === 'AbortError') return;
        setError(requestError.message);
        setStatus('error');
      });

    return () => controller.abort();
  }, []);

  const categories = useMemo(
    () => ['all', ...new Set(products.map((product) => product.category))],
    [products],
  );

  const visibleProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return products.filter(
      (product) =>
        product.price <= maxPrice &&
        (category === 'all' || product.category === category) &&
        product.name.toLowerCase().includes(normalizedQuery),
    );
  }, [products, category, maxPrice, query]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Net Store</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Catalog</h1>
          {status === 'success' && (
            <p className="mt-2 text-sm text-slate-500">
              {visibleProducts.length} of {products.length} products
            </p>
          )}
        </div>
        <Link
          to="/"
          className="rounded-md text-sm font-semibold text-slate-600 hover:text-brand focus-visible:outline-none"
        >
          ← Home
        </Link>
      </div>

      {status === 'success' && (
        <div className="mb-8 grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-[1fr_220px_260px]">
          <label className="sr-only" htmlFor="product-search">
            Search products
          </label>
          <input
            id="product-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search products..."
            className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-blue-100"
          />

          <label className="sr-only" htmlFor="category-filter">
            Filter by category
          </label>
          <select
            id="category-filter"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-brand"
          >
            {categories.map((categoryName) => (
              <option key={categoryName} value={categoryName}>
                {categoryName === 'all' ? 'All categories' : categoryName}
              </option>
            ))}
          </select>

          <label className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-2 text-xs text-slate-500">
            <span className="whitespace-nowrap">Up to {formatPrice(maxPrice)} UZS</span>
            <input
              aria-label="Maximum price"
              className="w-full"
              type="range"
              min="0"
              max={Math.max(...products.map((product) => product.price))}
              step="100000"
              value={maxPrice}
              onChange={(event) => setMaxPrice(Number(event.target.value))}
            />
          </label>
        </div>
      )}

      {status === 'loading' && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }, (_, index) => (
            <ProductSkeleton key={index} compact />
          ))}
        </div>
      )}

      {status === 'error' && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
        >
          {error}
        </div>
      )}

      {status === 'success' && visibleProducts.length === 0 && (
        <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
          <h2 className="text-lg font-bold text-ink">No products found</h2>
          <p className="mt-2 text-sm text-slate-500">Try changing your search or filters.</p>
        </div>
      )}

      {status === 'success' && visibleProducts.length > 0 && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} compact />
          ))}
        </div>
      )}
    </section>
  );
}
