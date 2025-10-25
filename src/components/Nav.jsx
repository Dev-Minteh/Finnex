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
export default function Nav({NavItem}) {
  return (
     <nav className="flex flex-col gap-2">
            <NavItem icon={Home} label="Dashboard" />
            <NavItem icon={ChartBar} label="Analytics" />
            <NavItem icon={FileText} label="Reports" />
            <NavItem icon={Users} label="Audiences" />
            <NavItem icon={Cog} label="Settings" />
            <NavItem icon={Megaphone} label="Campaigns" />
          </nav>
  );
}