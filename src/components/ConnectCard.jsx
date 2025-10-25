import {
  Home,
  BarChart3 as ChartBar,
  FileText,
  Users,
  Settings as Cog,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
export default function ConnectCard({ name, status }) {
  return (
    <div className="rounded-2xl border border-slate-100 p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">{name} Ads</p>
        {status === "Connected" ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs text-emerald-700"><CheckCircle2 className="h-3 w-3"/> Connected</span>
        ) : (
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2 py-0.5 text-xs text-slate-700"><AlertCircle className="h-3 w-3"/> Not connected</span>
        )}
      </div>
      <button className="mt-3 w-full rounded-2xl border border-slate-200 px-3 py-2 text-xs hover:bg-slate-50">{status === "Connected" ? "Manage" : "Connect"}</button>
    </div>
  );
}
