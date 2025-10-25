export default function StatusBadge({ status }) {
  const styles = {
    Active: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Paused: "bg-yellow-50 text-yellow-700 border-yellow-200",
    Draft: "bg-slate-50 text-slate-700 border-slate-200",
    Limited: "bg-rose-50 text-rose-700 border-rose-200",
  };
  return (
    <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs ${styles[status]}`}>{status}</span>
  );
}