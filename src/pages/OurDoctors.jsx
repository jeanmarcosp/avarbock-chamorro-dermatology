import { Stethoscope } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import DoctorCard from '../components/DoctorCard'
import CTASection from '../components/CTASection'
import { doctors } from '../data/content'

export default function OurDoctors() {
  return (
    <>
      <PageHeader
        eyebrow="Meet Our Doctors"
        crumb="Our Doctors"
        icon={Stethoscope}
        title="Get to know your dermatologists"
        subtitle="Two board-certified physicians with decades of academic training, committed to explaining medical complexity in understandable terms."
      />

      <section className="section">
        <div className="container space-y-20">
          {doctors.map((doctor, i) => (
            <DoctorCard key={doctor.id} doctor={doctor} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
