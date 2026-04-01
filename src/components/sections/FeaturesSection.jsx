import { features } from '../../data/features'
import FeatureCard from '../ui/FeatureCard'
import { SectionHeader } from '../ui/SectionHeader'

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20">
      <SectionHeader />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
