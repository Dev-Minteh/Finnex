import { motion } from "framer-motion";
import Input from "../components/Input";
import ConnectCard from "../components/ConnectCard";
import Toggle from "../components/Toggle";
import StatusBadge from "../components/StatusBadge";

export default function SettingsPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <section className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
        <h3 className="text-sm font-semibold">Business Profile</h3>
        <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
          <Input label="Business Name" placeholder="Noflestar" />
          <Input label="Website" placeholder="https://noflestar.com" />
          <Input label="Support Email" placeholder="support@noflestar.com" />
          <Input label="Timezone" placeholder="Africa/Banjul" />
        </div>
        <button className="mt-3 rounded-2xl bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-800">Save</button>
      </section>

      <section className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
        <h3 className="text-sm font-semibold">Billing</h3>
        <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3">
          <Input label="Cardholder" placeholder="Modou Lamin Minteh" />
          <Input label="Card Number" placeholder="4242 4242 4242 4242" />
          <Input label="Expiry" placeholder="08/27" />
        </div>
        <p className="mt-2 text-xs text-slate-500">Your payment information is securely encrypted.</p>
      </section>

      <section className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
        <h3 className="text-sm font-semibold">Connected Ad Accounts</h3>
        <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3">
          <ConnectCard name="Facebook" status="Connected" />
          <ConnectCard name="Google" status="Connected" />
          <ConnectCard name="TikTok" status="Not connected" />
        </div>
      </section>

      <section className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
        <h3 className="text-sm font-semibold">Notifications</h3>
        <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
          <Toggle label="Daily summary email" />
          <Toggle label="Campaign limit alerts" />
          <Toggle label="Billing reminders" />
          <Toggle label="Weekly insights" />
        </div>
      </section>

      <section className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
        <h3 className="text-sm font-semibold">Team</h3>
        <div className="mt-3 overflow-x-auto rounded-xl border border-slate-100">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b bg-slate-50 text-xs text-slate-500">
                <th className="py-2 pl-4">Member</th>
                <th>Role</th>
                <th>Status</th>
                <th className="pr-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Mollar", role: "Owner", status: "Active" },
                { name: "Fatou", role: "Analyst", status: "Active" },
                { name: "Ousman", role: "Editor", status: "Pending" },
              ].map((m) => (
                <tr key={m.name} className="border-b last:border-0">
                  <td className="py-3 pl-4 font-medium">{m.name}</td>
                  <td>{m.role}</td>
                  <td><StatusBadge status={m.status === "Pending" ? "Draft" : "Active"} /></td>
                  <td className="pr-4 text-right">
                    <button className="rounded-2xl border border-slate-200 px-3 py-1 text-xs hover:bg-slate-50">Manage</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </motion.div>
  );
}