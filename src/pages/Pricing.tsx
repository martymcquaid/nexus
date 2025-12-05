import { Link } from 'react-router-dom'

type Plan = {
  name: string
  price: string
  features: string[]
  cta?: string
}

const PLANS: Plan[] = [
  { name: 'Basic', price: '$29', features: ['Monitoring', 'Email support', 'SSL'], cta: 'Choose Basic' },
  { name: 'Standard', price: '$99', features: ['Monitoring', 'Phone & Email support', 'Cloud backup'], cta: 'Choose Standard' },
  { name: 'Premium', price: '$199', features: ['24/7 support', 'Dedicated engineer', 'Security audits'], cta: 'Choose Premium' },
  { name: 'Enterprise', price: 'Custom', features: ['Full lifecycle IT management', 'Security & Compliance', 'Strategic planning'], cta: 'Contact Us' },
]

export default function Pricing() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Pricing</h1>
        <p className="text-lg text-slate-700 mb-8">Transparent, scalable pricing to fit your needs.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLANS.map((p) => (
            <div key={p.name} className="border rounded-xl p-6 bg-white dark:bg-slate-800 shadow-sm">
              <div className="text-xl font-semibold mb-2">{p.name}</div>
              <div className="text-2xl font-bold mb-4">{p.price}</div>
              <ul className="text-sm text-slate-600 mb-4">
                {p.features.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>
              <Link to="/contact" className="inline-block bg-blue-600 text-white px-4 py-2 rounded">{p.cta}</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
