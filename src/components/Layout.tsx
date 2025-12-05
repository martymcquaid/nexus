import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import CookieBanner from './CookieBanner'
import ChatWidget from './ChatWidget'

export default function Layout({ children }: { children: React.ReactNode }) {
  // Theme toggle is handled by a global toggle in Navbar; implement a simple dispatch via window for this demo
  const toggleDark = () => {
    const current = document.documentElement.classList.contains('dark')
    if (current) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar onToggleDark={toggleDark} />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
      <ChatWidget />
      <CookieBanner />
    </div>
  )
}
