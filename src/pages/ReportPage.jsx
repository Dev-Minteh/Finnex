import { motion } from "framer-motion";
export default function ReportsPage() {
  const templates = [
    {
      name: "Weekly Performance",
      desc: "Spend, clicks, conversions, and CPA with week-over-week deltas.",
    },
    { name: "Channel Breakdown", desc: "Compare Facebook, Google, TikTok, and more." },
    { name: "ROI by Campaign", desc: "Track revenue vs. spend and highlight winners." },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {templates.map((t) => (
          <div key={t.name} className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
            <h3 className="text-sm font-semibold">{t.name}</h3>
            <p className="mt-2 text-sm text-slate-600">{t.desc}</p>
            <div className="mt-4 flex items-center gap-2">
              <button className="rounded-2xl bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-800">Generate</button>
              <button className="rounded-2xl border border-slate-200 px-3 py-2 text-xs hover:bg-slate-50">Preview</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <h3 className="mb-2 text-sm font-semibold">Scheduled Reports</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center justify-between rounded-xl border border-slate-100 p-3"><span><strong>Weekly Performance</strong> — Mondays 9:00</span><span className="text-slate-500">Email: team@noflestar.com</span></li>
            <li className="flex items-center justify-between rounded-xl border border-slate-100 p-3"><span><strong>ROI by Campaign</strong> — 1st of month</span><span className="text-slate-500">Email: founders@noflestar.com</span></li>
          </ul>
          <div className="mt-3">
            <button className="rounded-2xl border border-slate-200 px-3 py-2 text-xs hover:bg-slate-50">New Schedule</button>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <h3 className="mb-2 text-sm font-semibold">Exports</h3>
          <p className="text-sm text-slate-600">Download raw data for your own analysis.</p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button className="rounded-2xl border border-slate-200 px-3 py-2 text-xs hover:bg-slate-50">CSV</button>
            <button className="rounded-2xl border border-slate-200 px-3 py-2 text-xs hover:bg-slate-50">XLSX</button>
            <button className="rounded-2xl border border-slate-200 px-3 py-2 text-xs hover:bg-slate-50">PDF</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}