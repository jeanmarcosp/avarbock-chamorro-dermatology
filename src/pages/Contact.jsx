import { Phone, Printer, Mail, MapPin, ArrowUpRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { contact, business } from '../data/content'

export default function Contact() {
  const { address } = business

  const details = [
    {
      icon: MapPin,
      label: 'Address',
      value: (
        <>
          {address.line1}
          <br />
          {address.city}, {address.state} {address.zip}
        </>
      ),
      href: business.mapUrl,
      external: true,
    },
    { icon: Phone, label: 'Phone', value: business.phone, href: business.phoneHref },
    { icon: Printer, label: 'Fax', value: business.fax },
    { icon: Mail, label: 'Email', value: business.email, href: business.emailHref },
  ]

  return (
    <>
      <PageHeader
        eyebrow={contact.eyebrow}
        crumb="Contact"
        icon={Phone}
        title={contact.heading}
        subtitle={contact.body}
      />

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <a href={business.phoneHref} className="btn-primary text-base">
              <Phone className="h-5 w-5" />
              Call {business.phone}
            </a>

            <dl className="mt-10 grid gap-5 sm:grid-cols-2">
              {details.map(({ icon: Icon, label, value, href, external }) => {
                const body = (
                  <>
                    <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-500">
                      <Icon className="h-4 w-4" />
                      {label}
                    </dt>
                    <dd className="mt-2 text-sm font-medium leading-relaxed text-brand-800">
                      {value}
                    </dd>
                  </>
                )
                return (
                  <div
                    key={label}
                    className="rounded-2xl border border-brand-100 bg-white p-5 transition-colors hover:border-brand-200"
                  >
                    {href ? (
                      <a
                        href={href}
                        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="group block"
                      >
                        {body}
                      </a>
                    ) : (
                      body
                    )}
                  </div>
                )
              })}
            </dl>
          </div>

          {/* Interactive Google Maps embed (no API key required) */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-brand-100 shadow-sm">
              <iframe
                title={`Map to ${business.name}`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  `${business.name}, ${address.line1}, ${address.city}, ${address.state} ${address.zip}`,
                )}&z=15&output=embed`}
                className="block aspect-[4/3] w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a
              href={business.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-500"
            >
              <MapPin className="h-4 w-4" />
              Get directions
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
