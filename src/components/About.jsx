import { Users, HeartPulse, Baby } from 'lucide-react'
import { about } from '../data/content'

const highlights = [
  {
    icon: Users,
    title: 'Two board-certified doctors',
    body: 'Dr. Andrew Avarbock and Dr. Paola Chamorro work together on your care.',
  },
  {
    icon: HeartPulse,
    title: 'Routine to complex',
    body: 'From everyday skin concerns to rare and complex diseases, including second opinions.',
  },
  {
    icon: Baby,
    title: 'Adult & pediatric',
    body: 'Comprehensive dermatological care for patients of every age.',
  },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="max-w-3xl">
          <span className="eyebrow">{about.eyebrow}</span>
          <h2 className="mt-4 text-3xl font-extrabold text-brand-900 sm:text-4xl">
            {about.heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-600">{about.body}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {highlights.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-brand-100 bg-brand-50/50 p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 text-white">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-brand-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-600">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
