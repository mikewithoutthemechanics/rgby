"use client";

import { App } from "@/data/apps";

export default function AppCard({ app, index }: { app: App; index: number }) {
  const statusConfig: Record<string, { label: string; className: string }> = {
    live: { label: "● Live",   className: "tag-live"  },
    beta: { label: "◐ Beta",   className: "tag-beta"  },
    wip:  { label: "○ WIP",    className: "tag-wip"   },
    down: { label: "○ Down",   className: "tag-down"  },
  };

  const status = statusConfig[app.status] ?? { label: app.status, className: "tag" };

  return (
    <a
      href={app.url}
      target={app.url !== "#" ? "_blank" : undefined}
      rel={app.url !== "#" ? "noopener noreferrer" : undefined}
      style={{ animationDelay: `${index * 25}ms` }}
      className={`group block rounded-2xl border p-6 transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl cursor-pointer
        border-white/[.06] bg-white/[.025]
        hover:border-white/[.15] hover:bg-white/[.04]
        animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both`}
    >
      {/* Top row: icon + status */}
      <div className="flex items-start justify-between mb-5">
        <span
          className="text-[2.1rem] leading-none
            group-hover:scale-110 transition-transform duration-300"
          role="img" aria-label={app.name}
        >
          {app.icon}
        </span>
        <span className={`tag ${status.className}`}>{status.label}</span>
      </div>

      {/* Name + tagline */}
      <h3 className="text-base font-semibold text-white/95 mb-1 tracking-tight">
        {app.name}
      </h3>
      <p
        className="text-[11px] font-medium mb-3 tracking-wide uppercase opacity-55"
        style={{ color: app.accent }}
      >
        {app.tagline}
      </p>

      {/* Description */}
      <p className="text-[13px] leading-relaxed text-white/35 mb-4">
        {app.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {app.tags.map((t) => (
          <span
            key={t}
            className="text-[10px] px-2 py-0.5 rounded-md bg-white/[.05] text-white/30"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Footer: URL + github */}
      <div
        className="flex items-center justify-between pt-4
          border-t border-white/[.07]"
      >
        <span
          className="text-[11px] truncate max-w-[55%] transition-colors
            group-hover:text-white/55"
          style={{ color: "rgba(255,255,255,.2)" }}
        >
          {app.url}
        </span>
        <div className="flex items-center gap-2 text-[11px] transition-opacity opacity-0 group-hover:opacity-100">
          <span className="text-white/30">GitHub ↗</span>
          <svg width="11" height="11" viewBox="0 0 16 16" fill="rgba(255,255,255,.3)">
            <path d="M3.75 13.5h8.5a1 1 0 0 0 0-2H3.75a1 1 0 0 0 0 2ZM5 8 11 8l.003.002c.03.02.063.03.097.03A1.502 1.502 0 0 0 12 7.5a1.5 1.5 0 1 0-1.5-1.5h-.003A1.502 1.502 0 0 0 8 4.5a1.5 1.5 0 1 0-1.5 1.5c0 .034.01.067.03.097L5 8Z"/>
          </svg>
        </div>
      </div>
    </a>
  );
}
