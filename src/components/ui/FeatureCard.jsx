export default function FeatureCard({ title, description, icon, image }) {
  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20">

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover bg-linear-to-br from-slate-950/80 to-slate-900/60 opacity-40 transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      {/* Content */}
      <div className="relative">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl backdrop-blur">
          {icon}
        </div>

        <h3 className="text-lg font-semibold text-white">{title}</h3>

        <p className="mt-3 text-sm leading-7 text-slate-300">
          {description}
        </p>
      </div>
    </article>
  )
}