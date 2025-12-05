export default function About() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">About NexaIT</h1>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
            NexaIT is a premium IT services partner helping organizations design, secure, and optimize their technology stacks.
            We combine deep technical expertise with a client-first approach to deliver measurable business outcomes.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Trusted by 100+ enterprises across industries</li>
            <li>Certified engineers and security-first mindset</li>
            <li>Outcome-driven engagements with clear SLAs</li>
          </ul>
        </div>
        <div className="hidden md:block h-60 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-xl shadow" aria-label="Brand timeline visual" />
      </div>
    </section>
  )
}
