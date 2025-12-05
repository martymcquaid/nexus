export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-16" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-2">NexaIT</h4>
          <p className="text-sm text-gray-400">Premium IT services for modern enterprises.</p>
        </div>
        <div>
          <h5 className="text-sm font-semibold mb-2">Solutions</h5>
          <ul className="text-sm space-y-1">
            <li>Managed IT</li>
            <li>Cybersecurity</li>
            <li>Cloud</li>
            <li>VoIP & Telecom</li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-semibold mb-2">Industries</h5>
          <ul className="text-sm space-y-1">
            <li>Retail</li>
            <li>Healthcare</li>
            <li>Finance</li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-semibold mb-2">Contact</h5>
          <p className="text-sm text-gray-400">Email: hello@nexaIT.example</p>
          <p className="text-sm text-gray-400">Phone: +1 (555) 010-9999</p>
        </div>
      </div>
    </footer>
  )
}
