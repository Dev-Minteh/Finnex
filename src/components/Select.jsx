export default function Select({ label, options }) {
  return (
    <label className="text-sm">
      <span className="mb-1 block text-xs text-slate-500">{label}</span>
      <select className="h-10 w-full rounded-2xl border border-slate-200 bg-white px-3 text-sm">
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}