import { Link } from 'react-router-dom'
import { Phone, Printer, Mail, MapPin } from 'lucide-react'
import { business, nav } from '../data/content'

export default function Footer() {
  const { address } = business

  return (
    <footer className="bg-brand-950 text-brand-100">
      <div className="container grid gap-10 py-14 md:grid-cols-3">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500 text-sm font-extrabold tracking-tight text-white">
              AC
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-base font-extrabold text-white">
                Avarbock Chamorro
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-sky-300">
                Dermatology
              </span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-brand-200">
            {business.tagline.charAt(0) + business.tagline.slice(1).toLowerCase()} in{' '}
            {business.location}.
          </p>
        </div>

        {/* Explore */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">Explore</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-brand-200 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-brand-200">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" />
              <span>
                {address.line1}
                <br />
                {address.city}, {address.state} {address.zip}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-sky-300" />
              <a href={business.phoneHref} className="hover:text-white">
                {business.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Printer className="h-4 w-4 shrink-0 text-sky-300" />
              <span>{business.fax}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-sky-300" />
              <a href={business.emailHref} className="hover:text-white">
                {business.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-2 py-6 text-xs text-brand-300 sm:flex-row">
          <p>
            &copy; {business.name}. All rights reserved.
          </p>
          <p>
            {address.line1}, {address.city}, {address.state} {address.zip}
          </p>
        </div>
      </div>
    </footer>
  )
}
