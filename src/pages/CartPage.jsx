import { Link } from 'react-router-dom';
import { formatPrice } from '../data/products.js';
import { useCart } from '../hooks/useCart.js';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!cartItems.length) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Cart</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-ink">Your cart is empty</h1>
        <p className="mx-auto mt-4 max-w-md text-slate-500">
          Add products from the catalog and they will appear here.
        </p>
        <Link
          to="/catalog"
          className="mt-8 inline-block rounded-xl bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand focus-visible:outline-none"
        >
          Browse catalog
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Your order</p>
        <h1 className="mt-2 text-3xl font-black text-ink">Cart</h1>
      </div>

      <div className="space-y-3">
        {cartItems.map((product) => (
          <article
            key={product.id}
            className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center"
          >
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-slate-50">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-contain p-3"
              />
            </div>

            <div className="min-w-0 flex-1">
              <h2 className="font-semibold text-ink">{product.name}</h2>
              <p className="mt-1 text-sm text-slate-500">{formatPrice(product.price)} UZS</p>
            </div>

            <div className="flex items-center gap-2" aria-label={`Quantity for ${product.name}`}>
              <button
                type="button"
                onClick={() => updateQuantity(product.id, product.quantity - 1)}
                className="h-9 w-9 rounded-lg border border-slate-200 text-lg transition hover:bg-slate-50 focus-visible:outline-none"
                aria-label={`Decrease quantity of ${product.name}`}
              >
                −
              </button>
              <span className="w-8 text-center text-sm font-semibold" aria-live="polite">
                {product.quantity}
              </span>
              <button
                type="button"
                onClick={() => updateQuantity(product.id, product.quantity + 1)}
                className="h-9 w-9 rounded-lg border border-slate-200 text-lg transition hover:bg-slate-50 focus-visible:outline-none"
                aria-label={`Increase quantity of ${product.name}`}
              >
                +
              </button>
            </div>

            <strong className="w-32 text-right text-ink">
              {formatPrice(product.price * product.quantity)} UZS
            </strong>

            <button
              type="button"
              onClick={() => removeFromCart(product.id)}
              className="rounded-md text-left text-sm font-medium text-red-600 hover:text-red-800 focus-visible:outline-none sm:text-right"
              aria-label={`Remove ${product.name} from cart`}
            >
              Remove
            </button>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl bg-ink p-6 text-white sm:flex-row sm:items-center">
        <div>
          <p className="text-sm text-slate-400">Total</p>
          <p className="mt-1 text-2xl font-black">{formatPrice(total)} UZS</p>
        </div>
        <button
          type="button"
          disabled
          className="cursor-not-allowed rounded-xl bg-white/70 px-6 py-3 text-sm font-bold text-ink/60"
          title="Checkout is not implemented in this frontend-only project"
        >
          Checkout unavailable
        </button>
      </div>
    </section>
  );
}
