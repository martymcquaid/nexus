import { useParams } from 'react-router-dom'

export default function IndustryPage() {
  const { slug } = useParams()
  const nameMap: Record<string, string> = {
    retail: 'Retail',
    healthcare: 'Healthcare',
    finance: 'Finance',
    education: 'Education',
  }
  const name = nameMap[slug ?? ''] ?? 'Industry'
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-3">{name}</h1>
        <p className="text-lg text-slate-700">Tailored IT solutions for the {name} sector, including security, compliance, and scalable infrastructure.</p>
      </div>
    </section>
  )
}
