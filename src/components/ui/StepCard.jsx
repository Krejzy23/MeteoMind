export function StepCard({ index, title, description }) {
    return (
      <article className="flex gap-5 rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400 to-blue-500 text-sm font-bold text-slate-950">
          {String(index).padStart(2, "0")}
        </div>
  
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-300">{description}</p>
        </div>
      </article>
    );
  }