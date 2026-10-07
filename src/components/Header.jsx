import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

const links = [['/', 'Главная'], ['/catalog', 'Каталог'], ['/about', 'О нас'], ['/contact', 'Контакты']];

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-xl font-black tracking-tight" onClick={() => setOpen(false)}>NET<span className="text-blue-600">.</span>STORE</Link>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map(([to, label]) => <NavLink key={to} to={to} className={({ isActive }) => `text-sm font-medium transition ${isActive ? 'text-blue-600' : 'text-slate-600 hover:text-slate-950'}`}>{label}</NavLink>)}
        </nav>
        <div className="flex items-center">
          <button type="button" onClick={() => navigate('/cart')} className="relative rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100" aria-label={`Корзина, товаров: ${count}`}>Корзина{count > 0 && <span className="ml-2 inline-flex min-w-5 items-center justify-center rounded-full bg-blue-600 px-1.5 py-0.5 text-xs text-white">{count}</span>}</button>
          <button type="button" className="ml-2 rounded-xl border border-slate-200 px-3 py-2 text-sm md:hidden" onClick={() => setOpen((v) => !v)} aria-expanded={open}>Меню</button>
        </div>
      </div>
      {open && <nav className="border-t border-slate-200 bg-white px-4 py-4 md:hidden"><div className="mx-auto flex max-w-7xl flex-col gap-2">{links.map(([to, label]) => <NavLink key={to} to={to} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">{label}</NavLink>)}<NavLink to="/cart" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Корзина ({count})</NavLink></div></nav>}
    </header>
  );
}