import { useRef } from 'react'
import useReveal from '../../hooks/useReveal'
import useStaggerReveal from '../../hooks/useStaggerReveal'

const screenshots = [
  { src: '/screens/home.png', label: 'Dashboard' },
  { src: '/screens/entry.png', label: 'Symptom entry' },
  { src: '/screens/symptoms.png', label: 'History & charts' },
  { src: '/screens/weather.png', label: 'Weather forecast' },
]

export default function ScreenshotsSection() {
  const headerRef = useRef(null)
  const gridRef = useRef(null)

  useReveal(headerRef)
  useStaggerReveal(gridRef)

  return (
    <section className="py-16">
      <div ref={headerRef}>
        <SectionHeader />
      </div>

      <div
        ref={gridRef}
        className="mt-12 grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {screenshots.map((item, i) => (
          <ScreenshotCard key={i} src={item.src} label={item.label}/>
        ))}
      </div>
    </section>
  )
}

function SectionHeader() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
        App preview
      </p>

      <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
        See MeteoMind in action
      </h2>

      <p className="mt-4 text-lg text-slate-300">
        Clean interface designed for fast symptom tracking and clear insights.
      </p>
    </div>
  )
}

function ScreenshotCard({ src, label }) {
  return (
    <div className="group mx-auto w-full max-w-55 sm:max-w-65 lg:max-w-60">
      <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-black p-2 shadow-xl shadow-cyan-950/20 transition duration-300 group-hover:-translate-y-1 group-hover:border-cyan-300/20">
        <img
          src={src}
          alt={label}
          className="block w-full rounded-3xl object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
    </div>
  )
}