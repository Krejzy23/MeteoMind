const screenshots = [
    '/screens/home.png',
    '/screens/entry.png',
    '/screens/symptoms.png',
    '/screens/weather.png'
  ]
  
  export default function ScreenshotsSection() {
    return (
      <section className="py-10">
        <SectionHeader />
  
        <div className="mt-12 justify-center grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {screenshots.map((src, i) => (
            <ScreenshotCard key={i} src={src} />
          ))}
        </div>
      </section>
    )
  }
  
  function SectionHeader() {
    return (
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
          App preview
        </p>
  
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          See MeteoMind in action
        </h2>
  
        <p className="mt-4 text-lg text-slate-300">
          Clean interface designed for fast symptom tracking and clear insights.
        </p>
      </div>
    )
  }
  
  function ScreenshotCard({ src }) {
    return (
      <div className="group relative ">
        <div className="overflow-hidden">
          <img
            src={src}
            alt="App screenshot"
            className="w-full max-w-70 sm:max-w-[320px] lg:max-w-80 object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    )
  }