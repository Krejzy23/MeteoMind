import { useRef } from 'react'
import useReveal from '../../hooks/useReveal'
import useStaggerReveal from '../../hooks/useStaggerReveal'
import { features } from '../../data/features'
import FeatureCard from '../ui/FeatureCard'
import { SectionHeader } from '../ui/SectionHeader'

export default function FeaturesSection() {
  const headerRef = useRef(null)
  const gridRef = useRef(null)

  useReveal(headerRef)
  useStaggerReveal(gridRef)

  return (
    <section id="features" className="py-20">
      <div ref={headerRef}>
        <SectionHeader />
      </div>

      <div
        ref={gridRef}
        className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
      >
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            image={feature.image}
          />
        ))}
      </div>
    </section>
  )
}