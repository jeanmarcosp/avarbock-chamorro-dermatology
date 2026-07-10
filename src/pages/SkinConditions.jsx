import { Check, Sparkles } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import CTASection from '../components/CTASection'
import { conditions } from '../data/content'

export default function SkinConditions() {
  return (
    <>
      <PageHeader
        eyebrow={conditions.eyebrow}
        crumb="Skin Conditions"
        icon={Sparkles}
        title={conditions.heading}
        subtitle={conditions.body}
      />

      <section className="section">
        <div className="container grid gap-6 lg:grid-cols-2">
          {conditions.groups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-brand-100 bg-white p-6 sm:p-8"
            >
              <h2 className="text-lg font-bold text-brand-900">{group.title}</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium text-brand-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
