import { Link } from 'react-router-dom'

const services = [
  { slug: 'managed-it', name: 'Managed IT Support' },
  { slug: 'cybersecurity', name: 'Cybersecurity' },
  { slug: 'cloud-solutions', name: 'Cloud Solutions' },
  { slug: 'voip-telecom', name: 'VoIP & Telecom' },
  { slug: 'network-infra', name: 'Network & Infrastructure' },
  { slug: 'consultancy', name: 'IT Consultancy' },
  { slug: 'remote-monitoring', name: 'Remote Monitoring' },
  { slug: 'hardware-installations', name: 'Hardware Installations' },
]

export default function Services() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Services</h1>
        <p className="text-lg text-slate-700 mb-8">
          Comprehensive IT services designed to secure, optimize, and scale your business technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`} className="block p-6 bg-white dark:bg-slate-800 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-lg font-semibold mb-2">{s.name}</div>
              <p className="text-sm text-slate-600">Explore details and outcomes.</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
