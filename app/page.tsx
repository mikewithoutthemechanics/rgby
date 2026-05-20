import { apps } from "@/data/apps";
import AppCard from "@/components/AppCard";

export const metadata = {
  title: "R — G — B — Y · App Launcher",
  description: "All your apps in one place. Filter, search, and navigate every project you ship.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      <div className="grid-bg" />
      <header
        className="relative z-10 border-b"
        style={{ borderColor: "rgba(255,255,255,.07)" }}
      >
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span
              className="text-2xl tracking-tighter font-bold"
              style={{ fontFamily: "monospace" }}
            >
              <span style={{ color: "#3B82F6" }}>R</span>
              <span style={{ color: "#EF4444" }}>G</span>
              <span style={{ color: "#10B981" }}>B</span>
              <span style={{ color: "#F59E0B" }}>Y</span>
            </span>
            <span className="hidden sm:inline text-[11px] text-white/20 font-medium tracking-wide">
              APP LAUNCHER
            </span>
          </div>
          <div className="flex items-center gap-3 flex-wrap justify-end shrink-0">
            {[
              { color: "#10B981", label: `${apps.filter(a=>a.status==="live").length} live` },
              { color: "#3B82F6", label: `${apps.filter(a=>a.status==="beta").length} beta` },
              { color: "#F59E0B", label: `${apps.filter(a=>a.status==="wip").length} WIP` },
            ].map((s) => (
              <span
                key={s.label}
                className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-medium"
                style={{ color: "rgba(255,255,255,.3)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: s.color }} />
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </header>

      <section className="relative z-10 px-6 pt-16 pb-6 text-center">
        <h1
          className="text-4xl md:text-[3.2rem] font-extrabold tracking-tight leading-[1.1] mb-4"
          style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          <span style={{ color: "#F43F5E" }}>R</span>
          <span style={{ color: "#F97316" }}>G</span>
          <span style={{ color: "#10B981" }}>B</span>
          <span className="text-white/85 mr-2">&nbsp;</span>
          <span style={{ color: "#64748B", fontWeight: 400 }}>→</span>
          <span className="text-white/90 ml-2">
            All your<br className="sm:hidden" />&nbsp;apps in one place
          </span>
        </h1>
        <p className="text-[15px] leading-relaxed text-white/35 max-w-lg mx-auto">
          The hub for every project — live, building, shipping.
          {" "}Filter by category or search to find what&apos;s running.
        </p>
      </section>

      <main className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {apps.map((app, i) => (
            <AppCard key={app.id} app={app} index={i} />
          ))}
        </div>

        <hr
          className="my-14 border-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,.07) 50%, transparent 100%)" }}
        />

        <footer className="text-center text-[11px] text-white/15 pb-6">
          <p className="mb-1">
            <span style={{ fontFamily: "monospace" }}>
              <span style={{ color: "#3B82F6" }}>R</span>
              <span style={{ color: "#EF4444" }}>G</span>
              <span style={{ color: "#10B981" }}>B</span>
              <span style={{ color: "#F59E0B" }}>Y</span>
            </span>
            &nbsp;— App Launcher · Built with Next.js &amp; Tailwind
          </p>
          <p>
            All projects belong to&nbsp;
            <a
              href="https://github.com/mikewithoutthemechanics"
              className="text-white/25 hover:text-white/45 transition-colors no-underline"
              target="_blank" rel="noopener noreferrer"
            >
              @mikewithoutthemechanics
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
