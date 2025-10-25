import {
  Home,
  BarChart3 as ChartBar,
  FileText,
  Users,
  Settings as Cog,
  Megaphone,
  Plus,
  X,
  Search,
  Filter,
  CircleDollarSign,
  Eye,
  MousePointer,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import Select from "../components/Select";
export default function AudiencesPage() {
  const audiences = [
    { name: "All Visitors - 30d", size: "54,320", match: "82%", lastUsed: "Yesterday" },
    { name: "Add-to-Cart - 14d", size: "12,904", match: "77%", lastUsed: "2 days ago" },
    { name: "Purchasers - 180d", size: "4,512", match: "91%", lastUsed: "Today" },
    { name: "Lookalike 2% - GMB", size: "98,201", match: "65%", lastUsed: "3 days ago" },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input className="h-10 w-72 rounded-2xl border border-slate-200 bg-white pl-9 pr-3 text-sm" placeholder="Search audiences" />
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-2xl border border-slate-200 px-3 py-2 text-xs hover:bg-slate-50">Upload CSV</button>
          <button className="rounded-2xl bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-800">Create Audience</button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-100">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b bg-slate-50 text-xs text-slate-500">
              <th className="py-2 pl-4">Audience</th>
              <th>Size</th>
              <th>Match Rate</th>
              <th>Last Used</th>
              <th className="pr-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {audiences.map((a) => (
              <tr key={a.name} className="border-b last:border-0">
                <td className="py-3 pl-4 font-medium">{a.name}</td>
                <td>{a.size}</td>
                <td>{a.match}</td>
                <td>{a.lastUsed}</td>
                <td className="pr-4 text-right">
                  <button className="rounded-2xl border border-slate-200 px-3 py-1 text-xs hover:bg-slate-50">Sync</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <h3 className="text-sm font-semibold">Segment Builder</h3>
          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
            <Select label="Include" options={["All Visitors", "Add-to-Cart", "Purchasers", "Email List"]} />
            <Select label="Exclude" options={["Past Purchasers", "Bounced <10s", "Staff"]} />
            <Select label="Location" options={["All Countries", "Gambia", "Nigeria", "Ghana", "USA"]} />
            <Select label="Interests" options={["Electronics", "Fashion", "Music", "Sports"]} />
          </div>
          <button className="mt-3 rounded-2xl bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-800">Save Segment</button>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <h3 className="mb-2 text-sm font-semibold">Best Practices</h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>• Keep lookalike audiences between 1–3% for scale and quality.</li>
            <li>• Refresh customer lists every 7–14 days.</li>
            <li>• Exclude purchasers from prospecting campaigns.</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}