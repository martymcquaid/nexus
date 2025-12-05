export default function Contact() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg text-slate-700 mb-6">Have a project in mind? Tell us about it and we’ll respond within one business day.</p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="p-3 rounded border border-slate-300" placeholder="Your name" />
          <input className="p-3 rounded border border-slate-300" placeholder="Company" />
          <input className="p-3 rounded border border-slate-300" placeholder="Email" type="email" />
          <input className="p-3 rounded border border-slate-300" placeholder="Phone" />
          <textarea className="p-3 rounded border border-slate-300 md:col-span-2" placeholder="Project details" rows={4} />
        </form>
        <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded">Submit</button>
      </div>
      <div className="mt-6 text-sm text-slate-600 text-center">Or email us at hello@nexaIT.example</div>
    </section>
  )
}
