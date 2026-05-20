"use client";

import { useState } from "react";
import AppCard from "./AppCard";

export default function SearchBar({
  query,
  onChange,
  onCategoryFilter,
  onStatusFilter,
  activeCategory,
  activeStatus,
}: {
  query: string;
  onChange: (v: string) => void;
  onCategoryFilter: (c: string) => void;
  onStatusFilter: (c: string) => void;
  activeCategory: string;
  activeStatus: string;
}) {
  const [focused, setFocused] = useState(false);

  const statusFilters = [
    { id: "all",       label: "All Statuses",   color: "bg-white/[.06] text-white/55" },
    { id: "live",      label: "● Live",          color: "bg-emerald-500/12 text-emerald-400" },
    { id: "beta",      label: "◐ Beta",          color: "bg-indigo-500/12 text-indigo-400" },
    { id: "wip",       label: "○ WIP",           color: "bg-amber-500/12 text-amber-400" },
    { id: "down",      label: "○ Down",          color: "bg-red-500/12 text-red-400" },
  ];

  return (
    <div className="mb-10 space-y-5">
      {/* Search */}
      <div className="relative">
        <span
          className="absolute left-4 top-1/2 -translate-y-1/2 transition-opacity pointer-events-none"
          style={{ opacity: query || focused ? 0.4 : 0.25 }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Filter apps…"
          value={query}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full pl-11 pr-5 py-3.5 rounded-xl text-sm
            bg-white/[.04] border transition-all outline-none
            placeholder:text-white/20 hover:border-white/[.12]
            focus:border-indigo-500/60 focus:bg-white/[.06]"
          style={{ borderColor: focused ? "rgba(99,102,241,.4)" : "rgba(255,255,255,.07)" }}
        />
        {query && (
          <button
            onClick={() => onChange("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60 transition-colors cursor-pointer bg-transparent border-none p-0 leading-none"
          >✕</button>
        )}
      </div>

      {/* Filters row */}
      <div className="flex flex-wrap items-center gap-2">
        {/* Category pills */}
        <span className="text-[11px] text-white/25 uppercase tracking-wider mr-1 pt-1.5">
          Category
        </span>
        {["all", "ai", "real-estate", "payments", "creative", "3d", "internal"].map(
          (cat) => (
            <button
              key={cat}
              onClick={() => onCategoryFilter(cat)}
              className={`px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all cursor-pointer border-none
                ${activeCategory === cat
                  ? "bg-indigo-500/18 text-indigo-300 border border-indigo-500/30"
                  : "bg-white/[.04] text-white/40 hover:text-white/65 border border-white/[.07] hover:border-white/14"
                }`}
            >
              {cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1).replace("-"," ")}
            </button>
          )
        )}

        {/* Divider */}
        <div className="w-px h-4 bg-white/[.07] mx-1 hidden sm:block" />

        {/* Status pills */}
        <span className="text-[11px] text-white/25 uppercase tracking-wider mr-1 pt-1.5">
          Status
        </span>
        {statusFilters.map((s) => (
          <button
            key={s.id}
            onClick={() => onStatusFilter(s.id)}
            className={`px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all cursor-pointer border-none
              ${activeStatus === s.id ? s.color : "bg-white/[.04] text-white/35 border border-white/[.07]"}`}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}
