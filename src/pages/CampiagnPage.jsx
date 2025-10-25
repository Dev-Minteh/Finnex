import StatusBadge from "../components/StatusBadge";
import { motion } from "framer-motion";
export default function CampaignsPage({ onOpenCreate }) {
  const rows = [
    { name: "Summer Sale", status: "Active", budget: "$50/day", end: "2025-09-30" },
    { name: "Retargeting — All", status: "Active", budget: "$35/day", end: "—" },
    { name: "Lookalike 2%", status: "Paused", budget: "$20/day", end: "2025-08-31" },
    { name: "Black Friday Prep", status: "Draft", budget: "$0", end: "—" },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold">Campaigns</h3>
        <button onClick={onOpenCreate} className="rounded-2xl bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-800">Add Campaign</button>
      </div>
      <div className="overflow-x-auto rounded-2xl border border-slate-100">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b bg-slate-50 text-xs text-slate-500">
              <th className="py-2 pl-4">Campaign</th>
              <th>Budget</th>
              <th>End Date</th>
              <th>Status</th>
              <th className="pr-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.name} className="border-b last:border-0">
                <td className="py-3 pl-4 font-medium">{r.name}</td>
                <td>{r.budget}</td>
                <td>{r.end}</td>
                <td><StatusBadge status={r.status} /></td>
                <td className="pr-4 text-right">
                  <button className="rounded-2xl border border-slate-200 px-3 py-1 text-xs hover:bg-slate-50">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}