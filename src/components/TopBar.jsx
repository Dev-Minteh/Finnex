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
export default function TopBar({ onOpenCreate }) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            className="h-10 w-72 rounded-2xl border border-slate-200 bg-slate-50 pl-9 pr-4 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-slate-300"
            placeholder="Search campaigns, audiences, reports..."
          />
        </div>
        <button className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50">
          <Filter className="h-4 w-4 text-slate-500" /> Filters
        </button>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenCreate}
          className="rounded-2xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
        >
          New Campaign
        </button>
        {/* <div className="h-9 w-9 rounded-full bg-gradient-to-br from-slate-200 to-slate-300" /> */}
        <img src="https://i.pravatar.cc/40" alt="User" className="rounded-full w-10 h-10" />
      </div>
    </div>
  );
}