export default function StatCard({ value, label }) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
        <p className="text-lg font-semibold text-white">{value}</p>
        <p className="mt-1 text-sm text-slate-400">{label}</p>
      </div>
    );
  }