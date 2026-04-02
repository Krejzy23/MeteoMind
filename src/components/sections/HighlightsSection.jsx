const highlights = [
  {
    title: 'Understand current pressure',
    description:
      'See real-time atmospheric pressure at your location and understand what your body may be reacting to right now.',
  },
  {
    title: 'Stay ahead with forecast',
    description:
      'Follow upcoming pressure changes and weather trends to anticipate how you may feel in the next hours.',
  },
  {
    title: 'Discover your patterns',
    description:
      'Learn how your symptoms relate to pressure changes and uncover personal triggers based on your own history.',
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