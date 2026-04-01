const highlights = [
    {
      title: 'Current pressure awareness',
      description:
        'See atmospheric pressure at your location and understand what is happening right now.',
    },
    {
      title: 'Forecast-based risk',
      description:
        'Use upcoming pressure changes and local weather forecast to prepare earlier.',
    },
    {
      title: 'Personal symptom patterns',
      description:
        'Reveal how your body reacts to pressure drops, rises, and trend speed over time.',
    },
  ]
  
  export default function HighlightsSection() {
    return (
      <section className="py-12">
        <div className="grid gap-6 rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur lg:grid-cols-3 lg:p-10">
          {highlights.map((item) => (
            <HighlightCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
    )
  }
  
  function HighlightCard({ title, description }) {
    return (
      <article className="rounded-3xl border border-white/10 bg-slate-950/40 p-6">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
      </article>
    )
  }