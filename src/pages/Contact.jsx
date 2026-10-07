export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-slate-950 p-8 text-white sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">Контакты</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight">Связаться с магазином</h1>
        <p className="mt-5 max-w-2xl leading-7 text-slate-300">Форма оставлена как демонстрационный интерфейс. Реальная отправка сообщений и оформление заказа требуют backend-интеграции.</p>
        <form className="mt-8 grid gap-4" onSubmit={(e) => e.preventDefault()}>
          <input required placeholder="Ваше имя" className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm outline-none focus:border-blue-400" />
          <input required type="email" placeholder="Email" className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm outline-none focus:border-blue-400" />
          <textarea required rows="5" placeholder="Сообщение" className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm outline-none focus:border-blue-400" />
          <button className="w-fit rounded-xl bg-white px-6 py-3 text-sm font-bold text-slate-950 hover:bg-blue-50" type="submit">Отправить</button>
        </form>
      </div>
    </section>
  );
}