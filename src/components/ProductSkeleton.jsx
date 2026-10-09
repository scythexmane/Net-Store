export default function ProductSkeleton({ compact = false }) {
  return (
    <div className="animate-pulse rounded-2xl border border-slate-200 bg-white p-4">
      <div
        className={`rounded-xl bg-slate-200 ${compact ? 'h-48' : 'h-56'}`}
        aria-hidden="true"
      />
      <div className="mt-4 h-3 w-20 rounded bg-slate-200" aria-hidden="true" />
      <div className="mt-3 h-5 w-4/5 rounded bg-slate-200" aria-hidden="true" />
      <div className="mt-6 h-10 rounded-xl bg-slate-200" aria-hidden="true" />
      <span className="sr-only">Loading product</span>
    </div>
  );
}
