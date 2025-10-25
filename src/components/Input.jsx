export default function Input({ label, placeholder, type = "text" }) {
  return (
    <label className="text-sm">
      <span className="mb-1 block text-xs text-slate-500">{label}</span>
      <input type={type} placeholder={placeholder} className="h-10 w-full rounded-2xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-slate-300" />
    </label>
  );
}