import { useRef } from "react";
import useDirectionalReveal from "../../hooks/useDirectionalReveal";
import useStaggerReveal from "../../hooks/useStaggerReveal";

export default function InsightsSection() {
  const pressureSignals = [
    "Current atmospheric pressure",
    "Upcoming forecast trends",
    "Pressure changes across 3h, 6h, and 12h windows",
    "General and symptom-specific risk insights",
  ];

  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const infoBlocksRef = useRef(null);

  useDirectionalReveal(leftCardRef, {
    x: -160,
    duration: 2,
  });

  useDirectionalReveal(rightCardRef, {
    x: 160,
    duration: 2,
  });

  useStaggerReveal(infoBlocksRef, {
    y: 80,
    scale: 0.96,
    stagger: 0.3,
    duration: 1,
  });

  return (
    <section id="insights" className="py-20">
      <div className="grid gap-8 lg:grid-cols-2">
        <article
          ref={leftCardRef}
          className="rounded-4xl border border-cyan-400/15 bg-linear-to-br from-cyan-400/10 via-blue-500/10 to-indigo-500/10 p-8"
        >
          <div className="absolute left-[80%] bottom-0 h-24 w-24 -translate-x-1/2 rounded-full bg-indigo-400/15 blur-3xl" />
          <p className="text-sm font-medium uppercase tracking-widest text-cyan-300">
            Why it matters
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            It’s not only the pressure. It’s how it changes.
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-200">
            MeteoMind helps you understand that symptoms may be linked not only
            to a specific pressure value, but also to how quickly pressure rises
            or falls. By combining current conditions, forecast data, and
            pressure changes over time, the app helps surface patterns that are
            easy to miss in everyday life.
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

        <article
          ref={rightCardRef}
          className="relative rounded-4xl border border-white/10 bg-white/5 p-8"
        >
          <div className="absolute left-[90%] bottom-64 h-14 w-14 -translate-x-1/2 rounded-full bg-fuchsia-400/90 blur-3xl" />
          <div className="absolute left-40 top-5 h-44 w-44 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute left-30 bottom-10 h-52 w-52 -translate-x-1/2 rounded-full bg-indigo-400/20 blur-3xl" />
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
            <div className="absolute top-10 bottom-32 h-14 w-14 -translate-x-1/2 rounded-full bg-cyan-400 blur-3xl" />
            Personal insights
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Built around your own symptom history
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-300">
            Your body can react differently than someone else’s. MeteoMind uses
            your own entries to identify personal patterns, improve risk
            insights, and make symptom predictions more useful over time.
          </p>

          <div ref={infoBlocksRef} className="mt-8 grid gap-4 sm:grid-cols-2">
            <InfoBlock
              title="Location-based data"
              description="Your location is used to provide accurate local pressure readings and weather forecasts for your area."
            />
            <InfoBlock
              title="History and export"
              description="Review past entries, explore charts, and export your symptom history to CSV whenever you need it."
            />
          </div>
        </article>
      </div>
    </section>
  );
}

function InfoBlock({ title, description }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
      <p className="text-sm font-semibold text-white">{title}</p>
      <p className="mt-2 text-sm leading-7 text-slate-300">{description}</p>
    </div>
  );
}
