import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div><Link to="/" className="text-lg font-black">NET<span className="text-blue-600">.</span>STORE</Link><p className="mt-3 max-w-xs text-sm leading-6 text-slate-500">Учебный e-commerce проект на React.</p></div>
        <div><h2 className="text-sm font-bold">Навигация</h2><div className="mt-3 flex flex-col gap-2 text-sm text-slate-500"><Link to="/catalog" className="hover:text-slate-950">Каталог</Link><Link to="/about" className="hover:text-slate-950">О нас</Link><Link to="/contact" className="hover:text-slate-950">Контакты</Link></div></div>
        <div><h2 className="text-sm font-bold">Стек</h2><p className="mt-3 text-sm leading-6 text-slate-500">React · React Router · Tailwind CSS · Framer Motion · REST API</p></div>
      </div>
      <div className="border-t border-slate-100 py-5 text-center text-xs text-slate-400">Net Store · portfolio project</div>
    </footer>
  );
}