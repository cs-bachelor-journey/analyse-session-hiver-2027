import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { Navbar } from './Navbar'
import { Footer } from './Footer'

/** Scrolls back to the top on every route change. */
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])

  return null
}

export function Layout() {
  return (
    <div className="flex min-h-svh flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
