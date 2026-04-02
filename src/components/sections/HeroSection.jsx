import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import StatCard from "../ui/StatCard";

function HeroSection() {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const textRef = useRef(null);
  const actionsRef = useRef(null);
  const statsRef = useRef(null);
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const actionItems = actionsRef.current
        ? Array.from(actionsRef.current.children)
        : [];

      const statItems = statsRef.current
        ? Array.from(statsRef.current.children)
        : [];

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(badgeRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.5,
      })
        .from(
          titleRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.2"
        )
        .from(
          subtitleRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.35"
        )
        .from(
          textRef.current,
          {
            y: 24,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.3"
        )
        .from(
          actionItems,
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.12,
            clearProps: "all",
          },
          "-=0.25"
        )
        .from(
          statItems,
          {
            y: 24,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            clearProps: "all",
          },
          "-=0.2"
        )
        .from(
          videoRef.current,
          {
            x: 40,
            opacity: 0,
            scale: 0.94,
            duration: 0.9,
          },
          "-=0.8"
        );

      gsap.to(videoRef.current, {
        y: -8,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="grid min-h-[calc(100vh-6rem)] items-center gap-14 py-32 md:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-4"
    >
      <div className="mb-6 max-w-4xl">
        <div
          ref={badgeRef}
          className="mb-6 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur"
        >
          <span className="inline-block h-3 w-3 rounded-full bg-cyan-400" />
          Built for weather-sensitive people
        </div>

        <div ref={titleRef} className="flex flex-row items-center gap-1">
          <h1 className="mb-2 text-5xl font-bold leading-tight tracking-wide text-white sm:text-6xl lg:text-7xl">
            MeteoMind
          </h1>
          <img
            src="/images/logo.png"
            alt="logo"
            className="lg:h-14 lg:w-14 md:h-12 md:w-12 w-10 h-10"
          />
        </div>

        <h2
          ref={subtitleRef}
          className="mb-2 max-w-4xl text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl"
        >
          Track symptoms. Understand pressure. Predict what’s coming next.
        </h2>

        <p
          ref={textRef}
          className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
        >
          MeteoMind helps you understand how atmospheric pressure affects your
          body. Log symptoms, track pressure changes, and get personalized
          insights based on your history and upcoming weather trends.
        </p>

        <div ref={actionsRef} className="mt-8 flex gap-4 flex-row">
          <a
            href="#download"
            className="inline-flex items-center gap-3 rounded-lg border border-slate-900 bg-black px-4 py-2 text-left shadow-sm transition hover:scale-[1.02] hover:bg-slate-100 hover:text-slate-900"
          >
            <img src="/google.svg" alt="Google Play" className="h-7 w-7" />

            <div className="flex flex-col leading-tight">
              <span className="text-[10px] uppercase tracking-wide">
                Get it on
              </span>
              <span className="text-sm font-semibold">
                Google Play
              </span>
            </div>
          </a>

          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
          >
            See how it works
          </a>
        </div>

        <div ref={statsRef} className="mt-10 grid gap-4 sm:grid-cols-3">
          <StatCard value="3h / 6h / 12h" label="Pressure trend tracking" />
          <StatCard value="7-day" label="Forecast outlook" />
          <StatCard value="Personalized" label="Symptom insights" />
        </div>
      </div>

      <HeroVideo videoRef={videoRef} />
    </section>
  );
}

function HeroVideo({ videoRef }) {
  return (
    <div
      ref={videoRef}
      className="relative mx-auto w-full max-w-96 sm:max-w-80 lg:max-w-80"
    >
      <div className="absolute inset-0 rounded-[2.5rem] bg-linear-to-b from-cyan-400/20 via-blue-500/10 to-indigo-500/20 blur-2xl" />

      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black p-2 shadow-2xl shadow-cyan-950/40">
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
  );
}

export default HeroSection;
