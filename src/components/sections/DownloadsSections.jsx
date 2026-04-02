import { useRef } from 'react'
import useReveal from '../../hooks/useReveal'
import useStaggerReveal from '../../hooks/useStaggerReveal'

export default function DownloadsSection() {
  const cardRef = useRef(null)
  const headerRef = useRef(null)
  const actionsRef = useRef(null)
  const disclaimerRef = useRef(null)

  useReveal(cardRef)
  useReveal(headerRef)
  useStaggerReveal(actionsRef, {
    y: 40,
    duration: 1,
    stagger: 0.2,
    start: 'top 60%',
  })
  useReveal(disclaimerRef)

  return (
    <section id="download" className="py-20">
      <div
        ref={cardRef}
        className="relative overflow-hidden rounded-4xl border border-white/10 bg-linear-to-br from-white/10 to-white/5 p-8 text-center backdrop-blur sm:p-12"
      >
        <Glow />

        <div className="relative">
          <div ref={headerRef}>
            <SectionHeader />
          </div>

          <div ref={actionsRef}>
            <DownloadActions />
          </div>

          <div ref={disclaimerRef}>
            <Disclaimer />
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionHeader() {
  return (
    <>
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
        Get started
      </p>

      <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Start understanding your pressure sensitivity
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
        Track symptoms, monitor pressure trends, and prepare for difficult days
        with more confidence.
      </p>
    </>
  )
}

function DownloadActions() {
  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <GooglePlayButton />
      <ContactButton />
    </div>
  )
}

function GooglePlayButton() {
  return (
    <a
    href="#download"
    className="inline-flex items-center gap-3 rounded-lg border border-slate-900 bg-black px-4 py-2 text-left shadow-sm transition hover:scale-[1.02] hover:bg-slate-100 hover:text-slate-900"
  >
    <img src="/google.svg" alt="Google Play" className="h-7 w-7" />

    <div className="flex flex-col leading-tight">
      <span className="text-[10px] uppercase tracking-wide">
        Get it on
      </span>
      <span className="text-sm font-semibold">
        Google Play
      </span>
    </div>
  </a>
  )
}

function ContactButton() {
  return (
    <a
      href="mailto:ales.krejzl@gmail.com"
      className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
    >
      Contact
    </a>
  )
}

function Disclaimer() {
  return (
    <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400">
      MeteoMind is designed for personal symptom tracking and pattern discovery.
      It does not provide medical diagnosis and does not replace professional
      medical advice.
    </p>
  )
}

function Glow() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-blue-500/20 blur-3xl" />
    </div>
  )
}