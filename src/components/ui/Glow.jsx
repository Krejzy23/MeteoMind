export function Glow() {
    return (
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[40%] top-0 h-52 w-52 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute left-[50%] bottom-32 h-14 w-14 -translate-x-1/2 rounded-full bg-fuchsia-300/90 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-blue-500/20 blur-3xl" />
      </div>
    )
  }