import Nav from "./Nav";
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
export default function Sidebar({setShowCreate, NavItem}) {
  return (
     <aside className="col-span-12 h-full rounded-2xl bg-white p-4 shadow-sm md:sticky md:top-4 md:col-span-3 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold tracking-wider text-slate-400">Workspace</p>
              <h1 className="text-lg font-extrabold">Noflestar Ad Manager</h1>
            </div>
          </div>
          <Nav NavItem={NavItem}/>
          <div className="mt-6 border-t pt-4">
            <button
              onClick={() => setShowCreate(true)}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-slate-800"
            >
              <Plus className="h-4 w-4" /> Add Campaign
            </button>
          </div>
        </aside>
  );
}