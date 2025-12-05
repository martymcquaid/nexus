export default function Home() {
  return (
    <section className="pt-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">NexaIT — Enterprise IT Solutions</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
            Premium IT services for modern businesses. From managed IT and cybersecurity to cloud and VOIP, we
            empower your organization with resilient technology and expert engineering.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md transition">Get in touch</a>
            <a href="/services" className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition">Our Services</a>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="w-full h-64 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl shadow-2xl" aria-label="Hero visual" />
        </div>
      </div>
      <section className="mt-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { t: '24/7 Monitoring', d: 'Proactive remote monitoring and alerts' },
            { t: 'Cyber Defense', d: 'Threat detection and incident response' },
            { t: 'Cloud & Data', d: 'Scalable cloud infrastructure' },
          ].map((b, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-md">
              <div className="text-2xl font-semibold mb-2">{b.t}</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">{b.d}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}
