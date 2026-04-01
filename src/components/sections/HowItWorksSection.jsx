import { StepCard } from "../ui/StepCard";
import { steps } from "../../data/steps"


export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
        <LeftContent />
        <StepsList />
      </div>
    </section>
  );
}

function LeftContent() {
  return (
    <div>
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
        How it works
      </p>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Simple tracking. Smarter insights.
      </h2>

      <p className="mt-4 text-lg leading-8 text-slate-300">
        MeteoMind combines your symptom history with current atmospheric
        pressure, forecasted pressure, and pressure movement over time to
        surface patterns that are easy to miss in everyday life.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
  <img
    src="/images/graphPressure.png"
    alt="Pressure graph"
    className="w-full sm:w-1/2 rounded-xl border border-white/10"
  />
  <img
    src="/images/graphSymptoms.png"
    alt="Symptoms graph"
    className="w-full sm:w-1/2 rounded-xl border border-white/10"
  />
</div>
    </div>
  );
}

function StepsList() {
  return (
    <div className="grid gap-5">
      {steps.map((step, index) => (
        <StepCard
          key={step.title}
          index={index + 1}
          title={step.title}
          description={step.description}
        />
      ))}
    </div>
  );
}

