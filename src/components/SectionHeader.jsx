export default function SectionHeader({ eyebrow, title, action }) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <div>
        {eyebrow && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
            {eyebrow}
          </p>
        )}
        <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}
