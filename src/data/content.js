// Single source of truth for all site copy and business facts.
// All practice/doctor/condition text is preserved verbatim from the
// existing acdermatology.com site.

export const business = {
  name: 'Avarbock Chamorro Dermatology',
  location: 'Miami, FL',
  tagline: 'COMPREHENSIVE DERMATOLOGY CARE',
  subtagline: 'We work together to provide you the best possible experience',
  phone: '(305) 306-9470',
  phoneHref: 'tel:+13053069470',
  fax: '(305) 440-1370',
  email: 'info@acdermatology.com',
  emailHref: 'mailto:info@acdermatology.com',
  address: {
    line1: '2601 SW 37th Avenue, Suite 607',
    city: 'Coral Gables',
    state: 'FL',
    zip: '33133',
  },
  // Google Maps directions link for the office address.
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=2601+SW+37th+Avenue+Suite+607+Coral+Gables+FL+33133',
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'Our Doctors', to: '/our-doctors' },
  { label: 'Skin Conditions', to: '/skin-conditions' },
  { label: 'Insurance', to: '/insurance' },
  { label: 'Contact', to: '/contact' },
]

export const about = {
  eyebrow: 'Avarbock Chamorro Dermatology · Miami, FL',
  heading: 'Comprehensive, collaborative dermatology care',
  body:
    'We work together to provide you the best possible experience. Avarbock Chamorro Dermatology offers comprehensive dermatological care for both adult and pediatric patients, combining decades of academic training with a personal, attentive approach.',
}

// Doctor profiles. `image` points to the file the client will drop into
// public/contents/ — until then a <Placeholder> is shown.
export const doctors = [
  {
    id: 'andrew-avarbock',
    name: 'Dr. Andrew Avarbock',
    credential: 'M.D., Ph.D. · Board-Certified Dermatologist',
    image: '/contents/dr-avarbock.jpg',
    overview:
      'Dr. Avarbock is a board-certified dermatologist practicing in Miami, Florida. He brings ten years of experience from Cornell Medical College in New York, treating both routine and complex skin conditions across pediatric and adult patient populations. He sees adult and pediatric patients with routine skin conditions as well as rare diseases and is regularly sought after for a second opinion. His background includes teaching dermatology residents and maintaining an active research presence, and he explains medical complexity in understandable terms.',
    expertise: [
      'General & Complex Medical Dermatology',
      'Acne',
      'Hair Loss & PRP Therapy',
      'Skin Cancer Diagnosis',
      'Psoriasis',
      'Eczema',
      'Wart Removal',
      'Cyst & Lipoma Extraction',
      'Infectious Skin Conditions',
    ],
    education: [
      'B.A. in Biology, University of Pennsylvania (2001)',
      'Ph.D., University of Pennsylvania (2005) — research focused on tuberculosis biochemistry',
      'M.D., University of Pennsylvania School of Medicine (2008)',
      'Dermatology Residency, Columbia University-New York Presbyterian Hospital (2012)',
    ],
    history:
      'He served as Assistant Professor at Weill Cornell Medical College and directed dermatology consultations at NewYork-Presbyterian/Lower Manhattan Hospital before relocating to Miami.',
    boardCertifications: ['American Board of Dermatology'],
  },
  {
    id: 'paola-chamorro',
    name: 'Dr. Paola T. Chamorro',
    credential: 'M.D. · Board-Certified Dermatologist & Internist',
    image: '/contents/dr-chamorro.jpg',
    overview:
      'Dr. Paola T. Chamorro is a board-certified dermatologist from Miami, Florida. She completed training in New York and New Jersey and is among the few dermatologists in the country who also finished an Internal Medicine residency.',
    expertise: [
      'General & Complex Medical Dermatology',
      'Cosmetic Dermatology',
      'Acne',
      'Eczema',
      'Psoriasis',
      'Alopecia & Hair Disorders',
      'Skin Cancer',
      'Actinic Keratoses',
    ],
    education: [
      'B.A. in Neuroscience, Vanderbilt University (2004)',
      'M.D., Ponce School of Medicine, Puerto Rico (2010)',
      'Internal Medicine Residency, Columbia University/New York-Presbyterian Hospital (2013)',
      'Research Fellowship, Rutgers-Robert Wood Johnson Medical School (reflectance confocal microscopy)',
      'Dermatology Residency, Rutgers-Robert Wood Johnson Medical School (2021, served as chief resident)',
    ],
    history: null,
    boardCertifications: [
      'American Board of Dermatology (2021)',
      'American Board of Internal Medicine (2013)',
    ],
  },
]

export const conditions = {
  eyebrow: 'Skin Conditions',
  heading: 'Adult & pediatric dermatology',
  body:
    'We treat a comprehensive range of skin conditions for patients of all ages — from common concerns to rare and complex diseases.',
  groups: [
    {
      title: 'Adult and Pediatric Dermatology',
      items: ['Acne', 'Rosacea', 'Psoriasis', 'Eczema', 'Sarcoidosis', 'Hidradenitis Suppurativa'],
    },
    {
      title: 'Hair Disorders & Related Conditions',
      items: [
        'Actinic Keratosis',
        'Skin Cancer',
        'Brown spots',
        'Cysts, Lumps and Bumps',
        'Sexually Transmitted Disease',
      ],
    },
  ],
}

export const insurance = {
  eyebrow: 'Insurance & Telemedicine',
  heading: 'Convenient, covered care',
  body:
    'The office accepts most major insurance plans. We offer both in-person appointments and telemedicine consultations.',
  plans: [
    'Aetna',
    'Ambetter/Sunshine/Allwell',
    'America Choice Provider Network',
    'Avmed',
    'Blue Cross Blue Shield',
    'Cigna',
    'Community Care Plan',
    'Devoted',
    'Dimension PPO',
    'DNS',
    'First Health Network PPO',
    'Freedom & Optimum Medicare',
    'GHI/Emblem',
    'Healthsun',
    'Medblue Specialist',
    'Medicare',
    'Multimed-USA',
    'Multiplan',
    'Oscar',
    'RR Medicare',
    'Simply Medicare',
    'Tricare',
    'United Healthcare',
  ],
  note: 'Most major insurance plans accepted. Please contact our office to confirm your coverage.',
}

export const contact = {
  eyebrow: 'Get in Touch',
  heading: 'Contact Us',
  body: 'Call our office to schedule an appointment or ask a question. We look forward to caring for your skin.',
}
