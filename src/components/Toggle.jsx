import { useState } from "react";
export default function Toggle({ label }) {
  const [on, setOn] = useState(true);
  return (
    <button onClick={() => setOn((v) => !v)} className={`flex items-center justify-between rounded-2xl border px-3 py-2 text-sm ${on ? "border-slate-200 bg-slate-50" : "border-slate-200 bg-white"}`}>
      <span>{label}</span>
      <span className={`inline-flex h-5 w-9 items-center rounded-full p-0.5 transition ${on ? "bg-slate-900" : "bg-slate-300"}`}>
        <span className={`h-4 w-4 rounded-full bg-white transition ${on ? "translate-x-4" : "translate-x-0"}`} />
      </span>
    </button>
  );
}