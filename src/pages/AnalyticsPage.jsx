import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
export default function AnalyticsPage() {
  const channelData = [
    { channel: "Facebook", clicks: 14890, ctr: 1.8, cpa: 2.1 },
    { channel: "Google", clicks: 9800, ctr: 2.4, cpa: 2.7 },
    { channel: "TikTok", clicks: 5600, ctr: 1.2, cpa: 1.9 },
    { channel: "Instagram", clicks: 8700, ctr: 1.6, cpa: 2.3 },
  ];

  const convShare = [
    { name: "Search", value: 420 },
    { name: "Social", value: 360 },
    { name: "Display", value: 180 },
    { name: "Email", value: 90 },
  ];

  const pieColors = ["#1e293b", "#64748b", "#94a3b8", "#cbd5e1"]; 

  return (
    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <select className="h-10 rounded-2xl border border-slate-200 bg-white px-3 text-sm">
          <option>Last 7 days</option>
          <option>Last 14 days</option>
          <option>Last 30 days</option>
          <option>This month</option>
        </select>
        <select className="h-10 rounded-2xl border border-slate-200 bg-white px-3 text-sm">
          <option>All channels</option>
          <option>Facebook</option>
          <option>Google</option>
          <option>TikTok</option>
          <option>Instagram</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm lg:col-span-2">
          <h3 className="mb-3 text-sm font-semibold">Clicks by Channel</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={channelData} margin={{ left: 8, right: 8 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="channel" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Bar dataKey="clicks" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <h3 className="mb-3 text-sm font-semibold">Conversion Share</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={convShare} dataKey="value" nameKey="name" outerRadius={100}>
                  {convShare.map((_, i) => (
                    <Cell key={i} fill={pieColors[i % pieColors.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
        <h3 className="mb-3 text-sm font-semibold">Top Ads</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b text-xs text-slate-500">
                <th className="py-2">Ad</th>
                <th>Channel</th>
                <th>CTR</th>
                <th>Conv</th>
                <th>CPA</th>
              </tr>
            </thead>
            <tbody>
              {[
                { ad: "Carousel — Summer", channel: "Facebook", ctr: "2.1%", conv: 380, cpa: "$2.05" },
                { ad: "Search — Headphones", channel: "Google", ctr: "4.8%", conv: 290, cpa: "$2.40" },
                { ad: "UGC — Unboxing", channel: "TikTok", ctr: "1.5%", conv: 210, cpa: "$1.90" },
              ].map((r) => (
                <tr key={r.ad} className="border-b last:border-0">
                  <td className="py-3 font-medium">{r.ad}</td>
                  <td>{r.channel}</td>
                  <td>{r.ctr}</td>
                  <td>{r.conv}</td>
                  <td>{r.cpa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}