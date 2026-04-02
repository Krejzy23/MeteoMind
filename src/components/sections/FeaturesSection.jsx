import { useRef } from "react";
import useReveal from "../../hooks/useReveal";
import useStaggerReveal from "../../hooks/useStaggerReveal";
import { features } from "../../data/features";
import FeatureCard from "../ui/FeatureCard";


export default function FeaturesSection() {
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useReveal(headerRef);
  useStaggerReveal(gridRef);

  return (
    <section id="features" className="py-20">
      <div ref={headerRef}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-cyan-300">
            - Features -
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Everything you need in one place
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            A clean and focused experience for tracking symptoms, following
            pressure changes, and understanding personal weather sensitivity.
          </p>
        </div>
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
  );
}
