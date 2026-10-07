import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { formatPrice } from '../data/products';

export default function ProductCard({ product, compact = false }) {
  const { addToCart } = useCart();

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-lg"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className={`flex items-center justify-center overflow-hidden rounded-xl bg-slate-50 ${compact ? 'h-48' : 'h-56'}`}>
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col pt-4">
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-400">
          {product.category}
        </p>
        <Link
          to={`/product/${product.id}`}
          className="line-clamp-2 min-h-12 text-sm font-semibold leading-6 text-slate-900 hover:text-blue-600"
        >
          {product.name}
        </Link>

        <div className="mt-auto pt-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="text-lg font-bold text-slate-950">
              {formatPrice(product.price)} UZS
            </span>
            {product.rating?.rate > 0 && (
              <span className="text-xs text-slate-500">
                ★ {product.rating.rate.toFixed(1)}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={() => addToCart(product)}
            className="w-full rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Qo'shish
          </button>
        </div>
      </div>
    </motion.article>
  );
}
