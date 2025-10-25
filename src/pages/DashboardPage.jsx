import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
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
import StatusBadge from "../components/StatusBadge";
export default function DashboardPage() {
  const kpis = [
    { label: "Spend", value: "$2,450", icon: CircleDollarSign, delta: "+12%" },
    { label: "Impressions", value: "1.2M", icon: Eye, delta: "+6%" },
    { label: "Clicks", value: "34,980", icon: MousePointer, delta: "+9%" },
    { label: "Conversions", value: "1,284", icon: TrendingUp, delta: "+3%" },
  ];

  const trend = useMemo(
    () => [
      { name: "Mon", spend: 180, conv: 30 },
      { name: "Tue", spend: 220, conv: 44 },
      { name: "Wed", spend: 210, conv: 38 },
      { name: "Thu", spend: 260, conv: 51 },
      { name: "Fri", spend: 240, conv: 42 },
      { name: "Sat", spend: 190, conv: 37 },
      { name: "Sun", spend: 220, conv: 41 },
    ],
    []
  );

  const recent = [
    { name: "Summer Sale ", status: "Active", spend: "$540", conv: 230, cpa: "$2.35" },
    { name: "Back to School", status: "Paused", spend: "$230", conv: 80, cpa: "$2.87" },
    { name: "Retargeting - All", status: "Active", spend: "$740", conv: 310, cpa: "$2.38" },
    { name: "Black Friday Prep", status: "Draft", spend: "$0", conv: 0, cpa: "—" },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500">{k.label}</p>
                <p className="mt-1 text-2xl font-bold">{k.value}</p>
              </div>
              <k.icon className="h-8 w-8 text-slate-400" />
            </div>
            <p className="mt-3 text-xs font-medium text-emerald-600">{k.delta} vs last week</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm lg:col-span-2">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold">Performance (Spend & Conversions)</h3>
            <span className="text-xs text-slate-500">Last 7 days</span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trend} margin={{ left: 8, right: 8, top: 5, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" fontSize={12} tickMargin={8} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Line type="monotone" dataKey="spend" strokeWidth={2} />
                <Line type="monotone" dataKey="conv" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <h3 className="mb-3 text-sm font-semibold">Status Overview</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center justify-between"><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Active</span><span className="font-semibold">12</span></li>
            <li className="flex items-center justify-between"><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-yellow-400" /> Paused</span><span className="font-semibold">4</span></li>
            <li className="flex items-center justify-between"><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-slate-300" /> Draft</span><span className="font-semibold">6</span></li>
            <li className="flex items-center justify-between"><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-rose-500" /> Limited</span><span className="font-semibold">1</span></li>
          </ul>
          <p className="mt-4 rounded-xl bg-slate-50 p-3 text-xs text-slate-600">Tip: keep CPA under $3.00 for prospecting and under $2.00 for retargeting.</p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold">Recent Campaigns</h3>
          <button className="text-xs text-slate-600 underline underline-offset-4">View all</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b text-xs text-slate-500">
                <th className="py-2">Name</th>
                <th>Spend</th>
                <th>Conv.</th>
                <th>CPA</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recent.map((r) => (
                <tr key={r.name} className="border-b last:border-0">
                  <td className="py-3 font-medium">{r.name}</td>
                  <td>{r.spend}</td>
                  <td>{r.conv}</td>
                  <td>{r.cpa}</td>
                  <td>
                    <StatusBadge status={r.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}