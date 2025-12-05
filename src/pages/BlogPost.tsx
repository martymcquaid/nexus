import { useParams } from 'react-router-dom'

export default function BlogPost() {
  const { slug } = useParams()
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-3">Blog Post: {slug}</h1>
        <p className="text-lg text-slate-700">This is a sample blog post. Replace with real content.</p>
      </div>
    </section>
  )
}
