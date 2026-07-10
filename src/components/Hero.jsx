import { Link } from 'react-router-dom'
import { Phone, ArrowRight, ShieldCheck, Users, Video, MapPin } from 'lucide-react'
import { business } from '../data/content'

const trust = [
  { icon: ShieldCheck, label: 'Board-Certified' },
  { icon: Users, label: 'Adult & Pediatric' },
  { icon: Video, label: 'Telemedicine' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/70 via-white to-white">
      {/* Soft, organic color washes for a calm, clinical feel */}
      <div
        className="pointer-events-none absolute -left-32 -top-40 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-24 h-[28rem] w-[28rem] rounded-full bg-sky-200/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600 shadow-sm backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-brand-500" />
            {business.name} · {business.location}
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-brand-900 sm:text-5xl lg:text-6xl">
            {business.tagline}
          </h1>

          <div
            className="mt-6 h-1.5 w-16 rounded-full bg-gradient-to-r from-brand-500 to-sky-400"
            aria-hidden="true"
          />

          <p className="mt-6 max-w-xl text-lg text-brand-600">{business.subtagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={business.phoneHref} className="btn-primary text-base">
              <Phone className="h-5 w-5" />
              Call {business.phone}
            </a>
            <Link to="/our-doctors" className="btn-ghost text-base">
              Meet Our Doctors
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <ul className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-brand-100 pt-6">
            {trust.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-brand-500 ring-1 ring-brand-100">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Hero image — both doctors, with floating accent cards */}
        <div className="relative">
          <div
            className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-brand-200/50 to-sky-200/40 blur-2xl"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[2rem] bg-white p-2 shadow-xl shadow-brand-900/10 ring-1 ring-brand-100">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[1.6rem] bg-brand-50">
              <img
                src="/contents/hero.jpg"
                alt="Dr. Andrew Avarbock and Dr. Paola Chamorro at Avarbock Chamorro Dermatology"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Floating location pill (top-right) */}
          <div className="absolute -right-3 top-8 hidden items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg shadow-brand-900/10 ring-1 ring-brand-100 sm:flex">
            <MapPin className="h-4 w-4 text-brand-500" aria-hidden="true" />
            <span className="text-xs font-semibold text-brand-800">
              {business.address.city}, {business.address.state}
            </span>
          </div>

          {/* Floating credential card (bottom-left) */}
          <div className="absolute -bottom-6 -left-4 hidden max-w-[16rem] items-center gap-3 rounded-2xl bg-white p-4 shadow-xl shadow-brand-900/10 ring-1 ring-brand-100 sm:flex">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
              <ShieldCheck className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold leading-tight text-brand-900">
                Board-Certified Dermatologists
              </p>
              <p className="mt-0.5 text-xs text-brand-500">Dr. Avarbock &amp; Dr. Chamorro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
