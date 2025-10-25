import { useState } from "react";
import {
  BarChart3 as ChartBar,
  Settings as Cog,
  X,
  TrendingUp,
  Clock,
} from "lucide-react";
import Input from "./Input";
export default function CreateCampaignDrawer({ open, onClose }) {
  const [goal, setGoal] = useState("Sales");
  const [schedule, setSchedule] = useState("Daily");

  return (
    <div className={`fixed inset-0 z-50 ${open ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!open}>
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/30 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      {/* Panel */}
      <div className={`absolute right-0 top-0 h-full w-full max-w-xl transform bg-white shadow-xl transition-transform ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between border-b p-4">
          <h3 className="text-sm font-semibold">Create Campaign</h3>
          <button onClick={onClose} className="rounded-full p-1 hover:bg-slate-100"><X className="h-5 w-5"/></button>
        </div>
        <div className="h-[calc(100%-56px)] overflow-y-auto p-4">
          <form className="space-y-4">
            <Input label="The website you want to advertise" placeholder="https://example.com" />
            <label className="text-sm">
              <span className="mb-1 block text-xs text-slate-500">Description and selling points of your product</span>
              <textarea className="min-h-[120px] w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm" placeholder="Examples: Free 2-day shipping, 30-day returns, metal frame, noise-cancelling, includes carrying case" />
            </label>

            <div>
              <p className="mb-2 text-xs font-semibold text-slate-500">Campaign Goal</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Sales", desc: "Generate online purchases" },
                  { name: "Leads", desc: "Capture leads with your ad" },
                  { name: "Traffic", desc: "Drive traffic to your website" },
                  { name: "Awareness", desc: "Reach the most people" },
                ].map((g) => (
                  <button
                    type="button"
                    key={g.name}
                    onClick={() => setGoal(g.name)}
                    className={`rounded-2xl border p-3 text-left ${goal === g.name ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 hover:bg-slate-50"}`}
                  >
                    <p className="text-sm font-semibold">{g.name}</p>
                    <p className={`mt-1 text-xs ${goal === g.name ? "text-white/80" : "text-slate-600"}`}>{g.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            <Input label="Target Audience" placeholder="People who like music" />

            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              <Input label="Budget" placeholder="$50" />
              <Input label="Total Budget" placeholder="$500" />
              <label className="text-sm">
                <span className="mb-1 block text-xs text-slate-500">End Date</span>
                <input type="date" className="h-10 w-full rounded-2xl border border-slate-200 bg-white px-3 text-sm" />
              </label>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500">Pacing</span>
              <div className="rounded-2xl border border-slate-200 p-1 text-xs">
                {[
                  { label: "Daily", value: "Daily" },
                  { label: "Lifetime", value: "Lifetime" },
                ].map((o) => (
                  <button
                    key={o.value}
                    type="button"
                    onClick={() => setSchedule(o.value)}
                    className={`rounded-xl px-3 py-1 ${schedule === o.value ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-50"}`}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-3 text-xs text-slate-600">
              <span className="flex items-center gap-2"><Clock className="h-4 w-4"/> Estimated review time: 15–60 min</span>
              <span className="flex items-center gap-2"><TrendingUp className="h-4 w-4"/> Goal: {goal}</span>
            </div>

            <div className="flex items-center justify-end gap-2">
              <button type="button" className="rounded-2xl border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50" onClick={onClose}>Cancel</button>
              <button type="button" className="rounded-2xl border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50">Save as Draft</button>
              <button type="submit" className="rounded-2xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800">Create Campaign</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}







// import { useState } from "react";
// import { X, Clock, TrendingUp } from "lucide-react";
// import Input from "./Input";

// export default function CreateCampaignDrawer({ open, onClose, onCreate }) {
//   // form states
//   const [website, setWebsite] = useState("");
//   const [description, setDescription] = useState("");
//   const [audience, setAudience] = useState("");
//   const [budget, setBudget] = useState("");
//   const [totalBudget, setTotalBudget] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [goal, setGoal] = useState("Sales");
//   const [schedule, setSchedule] = useState("Daily");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newCampaign = {
//       id: Date.now(),
//       website,
//       description,
//       audience,
//       budget,
//       totalBudget,
//       endDate,
//       goal,
//       schedule,
//       status: "Active", // default status
//     };
//     onCreate(newCampaign); // send back to parent
//     onClose(); // close drawer
//     // reset form
//     setWebsite("");
//     setDescription("");
//     setAudience("");
//     setBudget("");
//     setTotalBudget("");
//     setEndDate("");
//     setGoal("Sales");
//     setSchedule("Daily");
//   };

//   return (
//     <div
//       className={`fixed inset-0 z-50 ${open ? "pointer-events-auto" : "pointer-events-none"}`}
//       aria-hidden={!open}
//     >
//       {/* Backdrop */}
//       <div
//         className={`absolute inset-0 bg-black/30 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
//         onClick={onClose}
//       />

//       {/* Panel */}
//       <div
//         className={`absolute right-0 top-0 h-full w-full max-w-xl transform bg-white shadow-xl transition-transform ${
//           open ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex items-center justify-between border-b p-4">
//           <h3 className="text-sm font-semibold">Create Campaign</h3>
//           <button onClick={onClose} className="rounded-full p-1 hover:bg-slate-100">
//             <X className="h-5 w-5" />
//           </button>
//         </div>

//         <div className="h-[calc(100%-56px)] overflow-y-auto p-4">
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <Input
//               label="The website you want to advertise"
//               placeholder="https://example.com"
//               value={website}
//               onChange={(e) => setWebsite(e.target.value)}
//             />

//             <label className="text-sm">
//               <span className="mb-1 block text-xs text-slate-500">
//                 Description and selling points of your product
//               </span>
//               <textarea
//                 className="min-h-[120px] w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm"
//                 placeholder="Examples: Free 2-day shipping, 30-day returns, etc."
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               />
//             </label>

//             {/* Campaign Goals */}
//             <div>
//               <p className="mb-2 text-xs font-semibold text-slate-500">Campaign Goal</p>
//               <div className="grid grid-cols-2 gap-3">
//                 {[
//                   { name: "Sales", desc: "Generate online purchases" },
//                   { name: "Leads", desc: "Capture leads with your ad" },
//                   { name: "Traffic", desc: "Drive traffic to your website" },
//                   { name: "Awareness", desc: "Reach the most people" },
//                 ].map((g) => (
//                   <button
//                     type="button"
//                     key={g.name}
//                     onClick={() => setGoal(g.name)}
//                     className={`rounded-2xl border p-3 text-left ${
//                       goal === g.name
//                         ? "border-slate-900 bg-slate-900 text-white"
//                         : "border-slate-200 hover:bg-slate-50"
//                     }`}
//                   >
//                     <p className="text-sm font-semibold">{g.name}</p>
//                     <p
//                       className={`mt-1 text-xs ${
//                         goal === g.name ? "text-white/80" : "text-slate-600"
//                       }`}
//                     >
//                       {g.desc}
//                     </p>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <Input
//               label="Target Audience"
//               placeholder="People who like music"
//               value={audience}
//               onChange={(e) => setAudience(e.target.value)}
//             />

//             <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
//               <Input
//                 label="Budget"
//                 placeholder="$50"
//                 value={budget}
//                 onChange={(e) => setBudget(e.target.value)}
//               />
//               <Input
//                 label="Total Budget"
//                 placeholder="$500"
//                 value={totalBudget}
//                 onChange={(e) => setTotalBudget(e.target.value)}
//               />
//               <label className="text-sm">
//                 <span className="mb-1 block text-xs text-slate-500">End Date</span>
//                 <input
//                   type="date"
//                   className="h-10 w-full rounded-2xl border border-slate-200 bg-white px-3 text-sm"
//                   value={endDate}
//                   onChange={(e) => setEndDate(e.target.value)}
//                 />
//               </label>
//             </div>

//             {/* Schedule */}
//             <div className="flex items-center gap-2">
//               <span className="text-xs text-slate-500">Pacing</span>
//               <div className="rounded-2xl border border-slate-200 p-1 text-xs">
//                 {["Daily", "Lifetime"].map((o) => (
//                   <button
//                     key={o}
//                     type="button"
//                     onClick={() => setSchedule(o)}
//                     className={`rounded-xl px-3 py-1 ${
//                       schedule === o ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-50"
//                     }`}
//                   >
//                     {o}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-3 text-xs text-slate-600">
//               <span className="flex items-center gap-2">
//                 <Clock className="h-4 w-4" /> Estimated review time: 15–60 min
//               </span>
//               <span className="flex items-center gap-2">
//                 <TrendingUp className="h-4 w-4" /> Goal: {goal}
//               </span>
//             </div>

//             {/* Actions */}
//             <div className="flex items-center justify-end gap-2">
//               <button
//                 type="button"
//                 className="rounded-2xl border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50"
//                 onClick={onClose}
//               >
//                 Cancel
//               </button>
//               <button
//                 type="button"
//                 className="rounded-2xl border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50"
//               >
//                 Save as Draft
//               </button>
//               <button
//                 type="submit"
//                 className="rounded-2xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
//               >
//                 Create Campaign
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
