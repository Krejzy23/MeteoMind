import { useRef } from 'react'
import useReveal from '../../hooks/useReveal'
import useStaggerReveal from '../../hooks/useStaggerReveal'

const faqs = [
  {
    question: 'What can I track in MeteoMind?',
    answer:
      'You can log symptoms like migraine, headache, joint pain, nausea, dizziness, and fatigue together with intensity, notes, and pressure-related context.',
  },
  {
    question: 'How do predictions work?',
    answer:
      'MeteoMind compares your symptom history with current pressure, recent pressure changes, and upcoming forecast trends to estimate which symptoms may become more likely.',
  },
  {
    question: 'What is the difference between current risk and forecast risk?',
    answer:
      'Current risk reflects what the atmospheric pressure is doing right now. Forecast risk looks ahead and estimates how upcoming pressure changes in the next hours may affect you.',
  },
  {
    question: 'Why does the app use location?',
    answer:
      'Location is used to fetch accurate local weather and pressure data, so your charts, trends, and predictions match the place where you are.',
  },
  {
    question: 'Does MeteoMind learn from my history?',
    answer:
      'Yes. As you save more symptom entries, the app can detect personal pressure patterns and use them to improve insights and symptom predictions.',
  },
  {
    question: 'Can I view my symptom history?',
    answer:
      'Yes. You can browse past entries, pressure changes, symptom intensity, notes, and visual charts that help you spot patterns over time.',
  },
  {
    question: 'Can I export my data?',
    answer:
      'Yes. MeteoMind supports CSV export so you can keep or analyze your history outside the app.',
  },
  {
    question: 'Is my data private?',
    answer:
      'Yes. Your data is securely stored and used only to provide personal insights and predictions within the app.',
  }
]

export default function FaqSection() {
  const headerRef = useRef(null)
  const listRef = useRef(null)

  useReveal(headerRef)
  useStaggerReveal(listRef, {
    y: 40,
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