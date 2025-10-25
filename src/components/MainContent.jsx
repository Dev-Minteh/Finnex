import AnalyticsPage from "../pages/AnalyticsPage";
import AudiencesPage from "../pages/AudiencesPage";
import CampaignsPage from "../pages/CampiagnPage";
import DashboardPage from "../pages/DashboardPage";
import ReportsPage from "../pages/ReportPage";
import SettingsPage from "../pages/SettingsPage";
import TopBar from "./TopBar";

export default function MainContent({active, setShowCreate}) {
  return (
   <main className="col-span-12 rounded-2xl bg-white p-4 shadow-sm md:col-span-9 lg:col-span-10">
     <TopBar onOpenCreate={() => setShowCreate(true)} />
       <div className="mt-4">
       {active === "Dashboard" && <DashboardPage />}
       {active === "Analytics" && <AnalyticsPage />}
     {active === "Reports" && <ReportsPage />}
      {active === "Audiences" && <AudiencesPage />}
      {active === "Settings" && <SettingsPage />}
     {active === "Campaigns" && <CampaignsPage onOpenCreate={() => setShowCreate(true)} />}
     </div>
     </main>   
           
  );
}