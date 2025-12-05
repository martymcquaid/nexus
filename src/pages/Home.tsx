import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="pt-12 px-4">
      <div className="relative w-full max-w-7xl mx-auto h-[520px] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="absolute inset-0">
          <svg viewBox="0 0 1200 520" preserveAspectRatio="xMidYMid slice" className="w-full h-full opacity-60" aria-label="decorative texture">
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#1e3a8a" offset="0"/>
                <stop stopColor="#0ea5e9" offset="1"/>
              </linearGradient>
            </defs>
            <rect width="1200" height="520" fill="url(#grad)" />
            <circle cx="200" cy="120" r="180" fill="rgba(255,255,255,0.08)" />
            <circle cx="980" cy="360" r="220" fill="rgba(255,255,255,0.08)" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-slate-900/30" />
        <div className="absolute left-8 bottom-8 md:left-12 md:bottom-14 max-w-2xl text-white z-10">
          <h1 className="text-3xl md:text-4xl font-extrabold drop-shadow-lg">NexaIT Northern Ireland — Premium IT Services</h1>
          <p className="mt-4 text-lg text-white/90">
            Trusted IT partner since 2004. We deliver Managed IT, Cybersecurity, Cloud, and Networking with unwavering support.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link to="/contact" className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-xl shadow-lg transition">Get a Health Check</Link>
            <Link to="/services" className="bg-white text-emerald-700 border border-emerald-700 px-6 py-3 rounded-xl hover:bg-emerald-50 transition">View Services</Link>
          </div>
        </div>
      </div>

      <section className="mt-14 max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {[
          { t: '24/7 Monitoring', d: 'Proactive remote monitoring and rapid incident response.' },
          { t: 'Cyber Defense', d: 'Threat detection, containment, and prevention across environments.' },
          { t: 'Cloud & Data', d: 'Scalable cloud architecture with secure data management.' },
        ].map((card, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
            <div className="p-4">
              <div className="font-semibold text-lg mb-2">{card.t}</div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{card.d}</p>
            </div>
          </div>
        ))}
      </section>
    </section>
  )
}
