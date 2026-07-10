import { Phone } from 'lucide-react'
import { business } from '../data/content'

// Reusable phone call-to-action band. Appended to the bottom of most pages.
export default function CTASection() {
  return (
    <section className="section">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-500 to-brand-700 px-8 py-14 text-center sm:px-14">
          <div
            className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full bg-white/10 blur-2xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 -right-10 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to see a dermatologist?
            </h2>
            <p className="mt-4 text-brand-100">
              Call our office to schedule an appointment or ask a question. We look forward to
              caring for your skin.
            </p>
            <a
              href={business.phoneHref}
              className="btn mt-8 bg-white text-brand-700 hover:bg-brand-50 focus-visible:ring-white text-base"
            >
              <Phone className="h-5 w-5" />
              Call {business.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
