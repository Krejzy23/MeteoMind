import { useRef } from 'react'
import useReveal from '../../hooks/useReveal'
import useStaggerReveal from '../../hooks/useStaggerReveal'

const faqs = [
  {
    question: 'What can I track in MeteoMind?',
    answer:
      'You can track symptoms such as migraine, headache, nausea, dizziness, joint pain, fatigue, and more.',
  },
  {
    question: 'How does MeteoMind estimate risk?',
    answer:
      'The app evaluates current atmospheric pressure, forecasted pressure, pressure change speed, and your own symptom history.',
  },
  {
    question: 'Why does the app use location?',
    answer:
      'Location helps provide more accurate local pressure readings and weather forecast data.',
  },
  {
    question: 'Can I export my data?',
    answer:
      'Yes. MeteoMind supports CSV export so you can keep or analyze your history outside the app.',
  },
]

export default function FaqSection() {
  const headerRef = useRef(null)
  const listRef = useRef(null)

  useReveal(headerRef)
  useStaggerReveal(listRef, {
    y: 24,
    duration: 1.2,
    stagger: 0.3,
    start: 'top 60%',
  })

  return (
    <section id="faq" className="py-20">
      <div ref={headerRef}>
        <SectionHeader />
      </div>

      <div ref={listRef} className="mx-auto mt-12 grid max-w-4xl gap-4">
        {faqs.map((item) => (
          <FaqItem
            key={item.question}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </section>
  )
}

function SectionHeader() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
        FAQ
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Common questions
      </h2>
    </div>
  )
}

function FaqItem({ question, answer }) {
  return (
    <details className="group rounded-3xl border border-white/10 bg-white/5 p-6 open:bg-white/[0.07]">
      <summary className="cursor-pointer list-none text-left text-base font-semibold text-white">
        <div className="flex items-center justify-between gap-4">
          <span>{question}</span>
          <span className="text-slate-400 transition group-open:rotate-45">
            +
          </span>
        </div>
      </summary>

      <p className="mt-4 pr-8 text-sm leading-7 text-slate-300">{answer}</p>
    </details>
  )
}