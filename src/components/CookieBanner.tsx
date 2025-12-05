import React, { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const seen = localStorage.getItem('cookie-consent')
    if (!seen) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div role="region" aria-label="Cookie consent" className="fixed bottom-4 right-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-lg p-4 w-11/12 max-w-md">
      <div className="flex items-start justify-between">
        <div className="text-sm text-gray-700 dark:text-gray-200">
          We use cookies to improve your experience. By continuing, you agree to our cookie policy.
        </div>
        <button onClick={accept} className="ml-4 bg-blue-600 text-white px-3 py-2 rounded">Accept</button>
      </div>
    </div>
  )
}
