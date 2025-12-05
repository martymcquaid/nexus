export default function Home() {
  return (
    <section className="pt-12 px-4">
      <div className="relative w-full max-w-7xl mx-auto h-[52rem] rounded-2xl overflow-hidden shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1527443154391-507d9c3a4c34?auto=format&fit=crop&w=1600&q=60"
          alt="IT office with teams and screens"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-slate-900/30" />
        <div className="absolute left-8 bottom-12 md:left-12 md:bottom-20 max-w-2xl text-white z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">NexaIT Northern Ireland — Premium IT Services</h1>
          <p className="mt-4 text-lg text-slate-200/90">
            Trusted IT partner since 2004. We’re here for you 24/7 with managed IT, cybersecurity, cloud, and networking excellence.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="/contact" className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-xl shadow-lg transition">Get a Health Check</a>
            <a href="/services" className="bg-white text-emerald-700 border border-emerald-700 px-6 py-3 rounded-xl hover:bg-emerald-50 transition">View Services</a>
          </div>
        </div>
      </div>

      <section className="mt-14 max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {[
          {
            img: 'https://images.unsplash.com/photo-1527443155217-3b1f0b0b6d2f?auto=format&fit=crop&w=800&q=60',
            t: '24/7 Monitoring',
            d: 'Proactive remote monitoring and rapid incident response.',
          },
          {
            img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=60',
            t: 'Cyber Defense',
            d: 'Threat detection, containment, and prevention across environments.',
          },
          {
            img: 'https://images.unsplash.com/photo-1527443153551-4a8d87a9d9b7?auto=format&fit=crop&w=800&q=60',
            t: 'Cloud & Data',
            d: 'Scalable cloud architecture with secure data management.',
          },
        ].map((card, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
            <img src={card.img} alt={card.t} className="w-full h-40 object-cover" />
            <div className="p-4">
              <div className="font-semibold mb-1">{card.t}</div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{card.d}</p>
            </div>
          </div>
        ))}
      </section>
    </section>
  )
}
