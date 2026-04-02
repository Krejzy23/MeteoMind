import { navItems } from "../../constants";

export default function SiteHeader() {

  return (
    <header className="sticky top-0 z-30 rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-4 backdrop-blur xl:px-6">
      <div className="flex items-center justify-between gap-4">
        <a href="#hero" className="flex items-center gap-3">
          <div className="relative flex items-center justify-center rounded-2xl shadow-cyan-500/20">
            <h2 className="absolute text-base font-extrabold text-slate-950 shadow-lg z-20">
              AK
            </h2>
            <img src="/images/logo.png" alt="logo" className="h-6 w-6" />
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-white">
              MeteoMind
            </p>
            <p className="hidden sm:flex text-xs text-slate-400">
              Pressure-aware symptom tracking
            </p>
          </div>
        </a>

        <DesktopNav items={navItems} />

        <a
          href="#download"
          className="inline-flex items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-xs font-medium text-cyan-200 transition hover:border-cyan-300/50 hover:bg-cyan-300/15 hover:text-white"
        >
          Get the app
        </a>
      </div>
    </header>
  );
}

function DesktopNav({ items }) {
  return (
    <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="transition hover:text-white"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
