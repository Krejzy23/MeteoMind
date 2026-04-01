export default function PageShell({ children }) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <Background />
        <div className="relative max-w-7xl mx-auto px-6">
          {children}
        </div>
      </div>
    )
  }
  
  function Background() {
    return (
      <div className="absolute inset-0">
        <div className="absolute w-80 h-80 bg-cyan-500/20 blur-3xl" />
      </div>
    )
  }