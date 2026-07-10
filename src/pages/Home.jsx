import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Hero from '../components/Hero'
import About from '../components/About'
import CTASection from '../components/CTASection'
import { doctors } from '../data/content'

// Compact doctors preview shown on the home page, linking to the full page.
function DoctorsPreview() {
  return (
    <section className="section bg-brand-50/40">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="eyebrow">Meet Our Doctors</span>
            <h2 className="mt-4 text-3xl font-extrabold text-brand-900 sm:text-4xl">
              Two board-certified dermatologists
            </h2>
          </div>
          <Link
            to="/our-doctors"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-500"
          >
            View full profiles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {doctors.map((doctor) => (
            <Link
              key={doctor.id}
              to="/our-doctors"
              className="group flex items-center gap-5 rounded-2xl border border-brand-100 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg"
            >
              <div className="w-28 shrink-0 overflow-hidden rounded-xl ring-1 ring-brand-100">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-900">{doctor.name}</h3>
                <p className="mt-1 text-sm font-semibold text-brand-500">{doctor.credential}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:text-brand-500">
                  Read bio
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <DoctorsPreview />
      <CTASection />
    </>
  )
}
