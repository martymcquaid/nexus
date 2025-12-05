import { Link } from 'react-router-dom'

const INDUSTRIES = [
  { slug: 'retail', name: 'Retail' },
  { slug: 'healthcare', name: 'Healthcare' },
  { slug: 'finance', name: 'Finance' },
  { slug: 'education', name: 'Education' },
]

export default function Industries() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Industries We Serve</h1>
        <p className="text-lg text-slate-700 mb-8">Industry-specific IT solutions that align with regulatory and business needs.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((it) => (
            <Link key={it.slug} to={`/industries/${it.slug}`} className="block p-6 bg-white dark:bg-slate-800 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-lg font-semibold">{it.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
