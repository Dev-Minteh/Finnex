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
import CreateCampaignDrawer from "./CreateCampaignDrawer";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

// --- App Shell --------------------------------------------------------------
export default function AdManager() {
  const [active, setActive] = useState("Dashboard");
  const [showCreate, setShowCreate] = useState(false);

  const NavItem = ({ icon: Icon, label }) => (
    <button
      onClick={() => setActive(label)}
      className={`group flex items-center gap-3 w-full rounded-xl px-3 py-2 text-sm font-medium transition hover:bg-slate-100 ${
        active === label
          ? "bg-slate-900 text-white shadow"
          : "text-slate-700"
      }`}
    >
      <Icon className={`h-4 w-4 ${active === label ? "text-white" : "text-slate-500"}`} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 p-4 md:p-6">
        <Sidebar setShowCreate={setShowCreate} NavItem={NavItem}/>
        <MainContent active={active} setShowCreate={setShowCreate} />
      </div>

      <CreateCampaignDrawer open={showCreate} onClose={() => setShowCreate(false)} />
    </div>
  );
}