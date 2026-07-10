import { useState } from 'react'
import { Video, MapPin, Phone, ShieldCheck, ChevronDown } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import CTASection from '../components/CTASection'
import { insurance, business } from '../data/content'

// Number of plans shown before the list collapses behind a toggle.
const PREVIEW_COUNT = 8

export default function Insurance() {
  const [expanded, setExpanded] = useState(false)
  const visiblePlans = expanded ? insurance.plans : insurance.plans.slice(0, PREVIEW_COUNT)
  const hiddenCount = insurance.plans.length - PREVIEW_COUNT

  return (
    <>
      <PageHeader
        eyebrow={insurance.eyebrow}
        crumb="Insurance"
        icon={ShieldCheck}
        title={insurance.heading}
        subtitle={insurance.body}
      />

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Accepted plans */}
          <div className="rounded-2xl border border-brand-100 bg-white p-8">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-500">
                Accepted Insurance Plans
              </h2>
              <span className="text-xs font-medium text-brand-400">
                {insurance.plans.length} plans
              </span>
            </div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {visiblePlans.map((plan) => (
                <li
                  key={plan}
                  className="rounded-xl border border-brand-100 bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-800"
                >
                  {plan}
                </li>
              ))}
            </ul>

            {hiddenCount > 0 && (
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-500"
              >
                {expanded ? 'Show fewer' : `Show all ${insurance.plans.length} plans`}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
            )}

            <p className="mt-6 border-t border-brand-100 pt-6 text-sm leading-relaxed text-brand-600">
              {insurance.note}
            </p>
            <a href={business.phoneHref} className="btn-primary mt-6">
              <Phone className="h-4 w-4" />
              Verify your coverage
            </a>
          </div>

          {/* Visit options */}
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-2xl border border-brand-100 bg-white p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white">
                <MapPin className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-brand-900">In-person appointments</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-600">
                  Visit our Coral Gables office at {business.address.line1}, {business.address.city},{' '}
                  {business.address.state} {business.address.zip}.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-brand-100 bg-white p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white">
                <Video className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-brand-900">Telemedicine consultations</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-600">
                  We offer both in-person appointments and telemedicine consultations, so you can
                  receive care from the comfort of home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
