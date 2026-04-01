export default function InsightsSection() {
    const pressureSignals = [
      'Current atmospheric pressure',
      'Forecasted pressure trends',
      '3h, 6h, and 12h pressure deltas',
      'General and symptom-specific risk insights',
    ]
  
    return (
      <section id="insights" className="py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-4xl border border-cyan-400/15 bg-linear-to-br from-cyan-400/10 via-blue-500/10 to-indigo-500/10 p-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
              Why it matters
            </p>
  
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Not just pressure. Pressure change.
            </h2>
  
            <p className="mt-4 text-base leading-8 text-slate-200">
              MeteoMind is built on the idea that symptoms may be triggered not
              only by a specific pressure value, but also by how quickly pressure
              rises or falls. That is why the app evaluates current pressure,
              forecasted pressure, and pressure deltas across 3h, 6h, and 12h
              windows.
            </p>
  
            <ul className="mt-6 space-y-3 text-sm text-slate-100">
              {pressureSignals.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-cyan-300">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
  
          <article className="rounded-4xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
              Transparency
            </p>
  
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Built around your personal patterns
            </h2>
  
            <p className="mt-4 text-base leading-8 text-slate-300">
              Your body may react differently than someone else’s. MeteoMind
              focuses on your own symptom history to detect possible triggers and
              improve future risk estimation over time.
            </p>
  
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <InfoBlock
                title="Location-based accuracy"
                description="Your location is used to provide more accurate local pressure readings and weather forecast data."
              />
              <InfoBlock
                title="History & export"
                description="Review symptom history, inspect charts, and export your data to CSV whenever you need it."
              />
            </div>
          </article>
        </div>
      </section>
    )
  }
  
  function InfoBlock({ title, description }) {
    return (
      <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="mt-2 text-sm leading-7 text-slate-300">{description}</p>
      </div>
    )
  }