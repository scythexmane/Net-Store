import { Link } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import { formatPrice } from '../data/products';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!cartItems.length) return <section className="mx-auto max-w-3xl px-4 py-24 text-center"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Корзина</p><h1 className="mt-3 text-4xl font-black tracking-tight">Пока здесь пусто</h1><p className="mx-auto mt-4 max-w-md text-slate-500">Добавьте товары из каталога — они появятся здесь.</p><Link to="/catalog" className="mt-8 inline-block rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-600">Перейти в каталог</Link></section>;

  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Ваш заказ</p><h1 className="mt-2 text-3xl font-black">Корзина</h1></div>
      <div className="space-y-3">
        {cartItems.map((item) => <article key={item.id} className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-slate-50"><img src={item.image} alt={item.name} className="h-full w-full object-contain p-3" /></div>
          <div className="min-w-0 flex-1"><h2 className="font-semibold">{item.name}</h2><p className="mt-1 text-sm text-slate-500">{formatPrice(item.price)} UZS</p></div>
          <div className="flex items-center gap-2"><button type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)} className="h-9 w-9 rounded-lg border border-slate-200">−</button><span className="w-8 text-center text-sm font-semibold">{item.quantity}</span><button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)} className="h-9 w-9 rounded-lg border border-slate-200">+</button></div>
          <strong className="w-32 text-right">{formatPrice(item.price * item.quantity)} UZS</strong>
          <button type="button" onClick={() => removeFromCart(item.id)} className="text-sm font-medium text-red-600 hover:text-red-800">Удалить</button>
        </article>)}
      </div>
      <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl bg-slate-950 p-6 text-white sm:flex-row sm:items-center"><div><p className="text-sm text-slate-400">Итого</p><p className="mt-1 text-2xl font-black">{formatPrice(total)} UZS</p></div><button type="button" className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-slate-950 hover:bg-blue-50">Оформить заказ</button></div>
    </section>
  );
}
