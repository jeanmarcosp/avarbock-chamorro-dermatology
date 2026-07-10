import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { business, nav } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `text-sm font-semibold transition-colors ${
      isActive ? 'text-brand-500' : 'text-brand-700 hover:text-brand-500'
    }`

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled
          ? 'border-brand-100 bg-white/90 backdrop-blur'
          : 'border-transparent bg-white/70 backdrop-blur'
      }`}
    >
      <nav className="container flex h-20 items-center justify-between gap-4">
        {/* Brand / logo. Swap the initials block for <img src="/contents/logo.png" ... /> */}
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500 text-sm font-extrabold tracking-tight text-white">
            AC
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-base font-extrabold text-brand-900">
              Avarbock Chamorro
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-brand-500">
              Dermatology
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href={business.phoneHref} className="btn-primary hidden sm:inline-flex">
            <Phone className="h-4 w-4" />
            {business.phone}
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-brand-900 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-brand-100 bg-white lg:hidden">
          <div className="container flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-base font-semibold ${
                    isActive ? 'bg-brand-50 text-brand-600' : 'text-brand-800 hover:bg-brand-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={business.phoneHref}
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              <Phone className="h-4 w-4" />
              {business.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
