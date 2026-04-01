import { useRef } from 'react'
import { StepCard } from '../ui/StepCard'
import { steps } from '../../data/steps'
import useReveal from '../../hooks/useReveal'
import useStaggerReveal from '../../hooks/useStaggerReveal'

export default function HowItWorksSection() {
  const textRef = useRef(null)
  const imagesRef = useRef(null)
  const stepsRef = useRef(null)

  useReveal(textRef)
  useStaggerReveal(imagesRef, {
    stagger: 0.18,
    y: 40,
    duration: 0.8,
  })
  
  useStaggerReveal(stepsRef, {
    stagger: 0.24,
    y: 80,
    duration: 1.2,
  })

  return (
    <section id="how-it-works" className="py-20">
      <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
        <LeftContent textRef={textRef} imagesRef={imagesRef} />
        <StepsList stepsRef={stepsRef} />
      </div>
    </section>
  )
}

function LeftContent({ textRef, imagesRef }) {
  return (
    <div>
      <div ref={textRef}>
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
      </div>

      <div ref={imagesRef} className="mt-8 flex flex-col gap-3 sm:flex-row">
        <img
          src="/images/graphPressure.png"
          alt="Pressure graph"
          className="w-full rounded-xl border border-white/10 sm:w-1/2"
        />
        <img
          src="/images/graphSymptoms.png"
          alt="Symptoms graph"
          className="w-full rounded-xl border border-white/10 sm:w-1/2"
        />
      </div>
    </div>
  )
}

function StepsList({ stepsRef }) {
  return (
    <div ref={stepsRef} className="grid gap-5">
      {steps.map((step, index) => (
        <StepCard
          key={step.title}
          index={index + 1}
          title={step.title}
          description={step.description}
        />
      ))}
    </div>
  )
}