import { Link } from 'react-router-dom'

export default function Navbar({ onToggleDark }: { onToggleDark: () => void }) {
  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200 dark:bg-gray-900/90 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full" aria-label="brand-icon" />
            <Link to="/" className="text-xl md:text-2xl font-extrabold tracking-tight text-emerald-600">NexaIT NI</Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium text-gray-700 hover:text-emerald-600">Home</Link>
            <Link to="/services" className="text-sm font-medium text-gray-700 hover:text-emerald-600">Services</Link>
            <Link to="/pricing" className="text-sm font-medium text-gray-700 hover:text-emerald-600">Pricing</Link>
            <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-emerald-600">About</Link>
            <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-emerald-600">Contact</Link>
          </div>
          <div className="flex items-center">
            <button aria-label="Toggle dark mode" onClick={onToggleDark} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition">
              <span className="sr-only">Toggle dark mode</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 116.707 2.707a8.001 8.001 0 0010.586 10.586z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
