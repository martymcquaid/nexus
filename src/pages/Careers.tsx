export default function Careers() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Careers</h1>
        <p className="text-lg mb-6">Join a team of experts delivering premium IT solutions to leading organizations.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
            <div className="font-semibold">Senior IT Consultant</div>
            <p className="text-sm text-slate-600">Remote-friendly role with global clients.</p>
          </div>
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
            <div className="font-semibold">Security Engineer</div>
            <p className="text-sm text-slate-600">Focus on threat detection and incident response.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
