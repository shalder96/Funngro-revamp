import { CalendarDays, CircleCheckBig, Clock3 } from "lucide-react";
import clsx from "clsx";

export default function ProjectCard({
  company,
  project,
  progress,
  status,
  color = "emerald",
}) {
  const colors = {
    emerald: {
      bar: "bg-emerald-500",
      badge: "bg-emerald-100 text-emerald-700",
    },

    cyan: {
      bar: "bg-cyan-500",
      badge: "bg-cyan-100 text-cyan-700",
    },

    orange: {
      bar: "bg-orange-500",
      badge: "bg-orange-100 text-orange-700",
    },
  };

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-lg">
      {/* Top */}

      <div className="flex items-start justify-between">
        <div className="flex gap-3">
          {/* Company Avatar */}

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-cyan-500 text-sm font-bold text-white">
            {company.charAt(0)}
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">{project}</h4>

            <p className="text-sm text-slate-500">{company}</p>
          </div>
        </div>

        {/* Status */}

        <span
          className={clsx(
            "rounded-full px-3 py-1 text-xs font-semibold",
            colors[color].badge,
          )}
        >
          {status}
        </span>
      </div>

      {/* Progress */}

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-slate-500">Progress</span>

          <span className="font-semibold text-slate-700">{progress}%</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-200">
          <div
            className={clsx(
              "h-full rounded-full transition-all duration-700",
              colors[color].bar,
            )}
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>

      {/* Bottom */}

      <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center gap-1">
          <CalendarDays size={14} />

          <span>Due Tomorrow</span>
        </div>

        <div className="flex items-center gap-1">
          {progress === 100 ? (
            <>
              <CircleCheckBig size={15} className="text-emerald-500" />
              Completed
            </>
          ) : (
            <>
              <Clock3 size={15} />
              In Progress
            </>
          )}
        </div>
      </div>
    </div>
  );
}
