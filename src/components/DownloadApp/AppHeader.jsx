import { Bell } from "lucide-react";

export default function AppHeader() {
  return (
    <>
      {/* Status Bar */}
      <div className="flex items-center justify-between px-6 pt-7 text-xs font-semibold text-slate-500">
        <span>9:41</span>

        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
          <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
          <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
        </div>
      </div>

      {/* Header */}

      <div className="mt-8 flex items-center justify-between px-6">
        <div>
          <p className="text-sm text-slate-500">
            Welcome Back 👋
          </p>

          <h2 className="mt-1 text-3xl font-bold text-slate-900">
            Riya Sharma
          </h2>
        </div>

        {/* Notification */}

        <button className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-md">
          <Bell
            size={20}
            className="text-slate-700"
          />

          <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white"></span>
        </button>
      </div>
    </>
  );
}