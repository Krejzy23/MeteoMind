import StatCard from "../ui/StatCard"

function HeroSection() {
  return (
    <section
      id="hero"
      className="grid min-h-[calc(100vh-6rem)] items-center gap-14 py-64 md:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-4"
    >
      <div className="max-w-4xl mb-6">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-cyan-400" />
          Built for weather-sensitive people
        </div>

        <h1 className="mb-2 text-5xl font-bold leading-tight tracking-wide text-white sm:text-6xl lg:text-7xl">MeteoMind</h1>

        <h2 className="mb-2 max-w-4xl text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
          Track pressure changes. Log symptoms. Predict difficult days.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
          MeteoMind helps you understand how atmospheric pressure affects your
          body. Track symptoms, monitor current pressure, follow forecasted
          pressure trends, and get personalized risk insights based on 3h, 6h,
          and 12h pressure changes.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#download"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-slate-100"
          >
            Get it on Google Play
          </a>

          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
          >
            See how it works
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <StatCard value="3h / 6h / 12h" label="Pressure delta tracking" />
          <StatCard value="7-day" label="Weather forecast" />
          <StatCard value="Personal" label="Risk insights" />
        </div>
      </div>

      <HeroVideo />
    </section>
  );
}

function HeroVideo() {
  return (
    <div className="relative mx-auto w-full max-w-70 sm:max-w-[320px] lg:max-w-80">
      <div className="absolute inset-0 rounded-[2.5rem] bg-linear-to-b from-cyan-400/20 via-blue-500/10 to-indigo-500/20 blur-2xl" />

      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black p-2 shadow-2xl">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="block w-full rounded-4xl"
        >
          <source src="/video/app.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default HeroSection;
