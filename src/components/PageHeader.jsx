import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

// Soft, airy banner shown at the top of every interior page, with layered
// hierarchy: breadcrumb -> eyebrow pill -> title -> accent bar -> subtitle,
// plus a brand-gradient icon medallion as the focal point.
export default function PageHeader({ eyebrow, title, subtitle, crumb, icon: Icon }) {
  return (
    <section className="relative overflow-hidden border-b border-brand-100 bg-gradient-to-br from-brand-50 via-white to-sky-50/60">
      <div
        className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-28 -bottom-24 h-80 w-80 rounded-full bg-brand-100/60 blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative py-16 sm:py-20 lg:py-24">
        <div className="flex items-center justify-between gap-10">
          <div className="max-w-2xl">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-xs font-medium text-brand-400"
            >
              <Link to="/" className="transition-colors hover:text-brand-600">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="text-brand-600">{crumb || eyebrow || title}</span>
            </nav>

            {/* Eyebrow pill */}
            {eyebrow && (
              <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600 shadow-sm ring-1 ring-brand-100">
                {Icon && <Icon className="h-4 w-4 text-brand-500" aria-hidden="true" />}
                {eyebrow}
              </span>
            )}

            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] text-brand-900 sm:text-5xl">
              {title}
            </h1>

            {/* Accent bar */}
            <div
              className="mt-6 h-1.5 w-16 rounded-full bg-gradient-to-r from-brand-500 to-sky-400"
              aria-hidden="true"
            />

            {subtitle && <p className="mt-6 max-w-xl text-lg text-brand-600">{subtitle}</p>}
          </div>

          {/* Icon medallion — focal point (desktop) */}
          {Icon && (
            <div className="relative hidden shrink-0 lg:block">
              <div
                className="absolute -inset-5 rounded-full bg-brand-200/40 blur-2xl"
                aria-hidden="true"
              />
              <div className="relative flex h-32 w-32 items-center justify-center rounded-[2rem] bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-xl shadow-brand-900/20 ring-1 ring-white/20">
                <Icon className="h-14 w-14" strokeWidth={1.5} aria-hidden="true" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
