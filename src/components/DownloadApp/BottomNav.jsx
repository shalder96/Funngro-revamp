import { House, BriefcaseBusiness, Wallet, UserRound } from "lucide-react";

const navItems = [
  {
    icon: House,
    label: "Home",
    active: true,
  },
  {
    icon: BriefcaseBusiness,
    label: "Projects",
  },
  {
    icon: Wallet,
    label: "Wallet",
  },
  {
    icon: UserRound,
    label: "Profile",
  },
];

export default function BottomNav() {
  return (
    <div className="mt-auto border-t border-slate-200 bg-white px-4 py-4">
      <div className="flex items-center justify-between">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className="flex flex-col items-center gap-1"
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-300 ${
                  item.active
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                    : "text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                }`}
              >
                <Icon size={20} />
              </div>

              <span
                className={`text-[11px] font-medium ${
                  item.active ? "text-emerald-600" : "text-slate-500"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
