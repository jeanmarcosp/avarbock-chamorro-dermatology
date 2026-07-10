import { GraduationCap, Stethoscope, BadgeCheck, Building2 } from 'lucide-react'

// Renders a single doctor's full profile. `reverse` alternates the image side
// on large screens for visual rhythm.
export default function DoctorCard({ doctor, reverse = false }) {
  return (
    <article className="grid items-start gap-8 lg:grid-cols-5 lg:gap-12">
      {/* Photo + at-a-glance */}
      <div className={`lg:col-span-2 ${reverse ? 'lg:order-last' : ''}`}>
        <div className="lg:sticky lg:top-28">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl ring-1 ring-brand-100">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="h-full w-full object-cover object-top"
            />
          </div>

          <div className="mt-5">
            <h3 className="text-2xl font-extrabold text-brand-900">{doctor.name}</h3>
            <p className="mt-1 text-sm font-semibold text-brand-500">{doctor.credential}</p>
          </div>

          <div className="mt-5 space-y-2">
            {doctor.boardCertifications.map((cert) => (
              <div key={cert} className="flex items-start gap-2 text-sm text-brand-700">
                <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bio + details */}
      <div className="lg:col-span-3">
        <p className="text-base leading-relaxed text-brand-700">{doctor.overview}</p>

        <div className="mt-8">
          <div className="flex items-center gap-2 text-brand-900">
            <Stethoscope className="h-5 w-5 text-brand-500" />
            <h4 className="text-sm font-bold uppercase tracking-wide">Clinical Expertise</h4>
          </div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {doctor.expertise.map((item) => (
              <li
                key={item}
                className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1.5 text-sm font-medium text-brand-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <div className="flex items-center gap-2 text-brand-900">
            <GraduationCap className="h-5 w-5 text-brand-500" />
            <h4 className="text-sm font-bold uppercase tracking-wide">Education & Training</h4>
          </div>
          <ol className="mt-4 space-y-4 border-l-2 border-brand-100 pl-5">
            {doctor.education.map((item) => (
              <li key={item} className="relative text-sm leading-relaxed text-brand-700">
                <span
                  className="absolute -left-[1.55rem] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-brand-500"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ol>
        </div>

        {doctor.history && (
          <div className="mt-8">
            <div className="flex items-center gap-2 text-brand-900">
              <Building2 className="h-5 w-5 text-brand-500" />
              <h4 className="text-sm font-bold uppercase tracking-wide">Professional History</h4>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-brand-700">{doctor.history}</p>
          </div>
        )}
      </div>
    </article>
  )
}
