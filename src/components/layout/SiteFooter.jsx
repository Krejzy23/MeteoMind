import { links } from "../../constants";

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-white/10 py-10 text-sm text-slate-400">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        
        {/* Left */}
        <div>
          <p className="text-white font-medium">MeteoMind</p>
          <p className="mt-1 text-xs text-slate-500">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-6 border-t border-white/5 pt-4 text-center text-xs text-slate-500">
        Created by <span className="text-white">Aleš Krejzl</span>
      </div>
    </footer>
  );
}