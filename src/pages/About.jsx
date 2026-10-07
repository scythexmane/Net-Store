export default function AboutPage() {
  const values = [
    ['01', 'Просто', 'Без перегруженного интерфейса и лишних шагов.'],
    ['02', 'Понятно', 'Цены, категории и корзина работают предсказуемо.'],
    ['03', 'Быстро', 'Каталог загружается один раз и переиспользуется на страницах.'],
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">О магазине</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Net Store — учебный e-commerce проект.</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">Проект демонстрирует React, маршрутизацию, работу с внешним API, фильтрацию каталога, состояние корзины и адаптивный интерфейс.</p>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {values.map(([number, title, text]) => <article key={number} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><span className="text-xs font-bold text-blue-600">{number}</span><h2 className="mt-8 text-xl font-bold">{title}</h2><p className="mt-2 text-sm leading-6 text-slate-500">{text}</p></article>)}
      </div>
    </section>
  );
}