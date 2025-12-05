import { Link } from 'react-router-dom'

type Post = {
  slug: string
  title: string
  excerpt: string
}

const POSTS: Post[] = [
  { slug: 'why-it-security-matters', title: 'Why IT Security Matters', excerpt: 'A practical guide to securing your business in 2025.' },
  { slug: 'cloud-migration-checklist', title: 'Cloud Migration: A Practical Checklist', excerpt: 'Steps to migrate with minimal risk.' },
]

export default function Blog() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {POSTS.map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow hover:shadow-lg transition">
              <div className="font-semibold text-lg mb-2">{p.title}</div>
              <p className="text-sm text-slate-600">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
