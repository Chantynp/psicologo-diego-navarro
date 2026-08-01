'use client';

export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: 'Diego Armando Navarro Nolasco',
    alternateName: 'Diego Navarro',
    description: 'Psicólogo y Doctor en Investigaciones Cerebrales (Universidad Veracruzana). Terapia Gestalt individual para adultos. Presencial en Xalapa, Veracruz y en línea.',
    url: 'https://psicologo-diego-navarro.vercel.app',
    logo: 'https://psicologo-diego-navarro.vercel.app/icon-512.png',
    image: 'https://psicologo-diego-navarro.vercel.app/og-image.jpg',
    sameAs: [
      'https://wa.me/523316360640',
      'https://www.linkedin.com/in/diego-navarro-a4a56207',
      'https://calendly.com/danavarro2040/30min',
      'https://www.uv.mx/prensa/general/apoyo-social-es-vital-para-la-salud-mental-de-jovenes/',
    ],
    knowsAbout: [
      'Terapia Gestalt',
      'Psicología clínica',
      'Neurociencias',
      'Ansiedad',
      'Depresión',
      'Autoestima',
      'Regulación emocional',
      'Duelo y pérdidas',
      'Biomarcadores de ansiedad',
      'Electroencefalografía',
    ],
    medicalSpecialty: 'Psychiatry',
    credential: 'Cédula profesional 12309823 · Doctor en Investigaciones Cerebrales (Universidad Veracruzana)',
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Universidad del Golfo de México Norte, Campus Tierra Blanca',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Universidad Veracruzana - Instituto de Investigaciones Cerebrales (IICE)',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Xalapa',
      addressRegion: 'Veracruz',
      addressCountry: 'MX',
    },
    telephone: '+52-33-1636-0640',
    email: 'danavarro2040@gmail.com',
    availableService: [
      {
        '@type': 'MedicalTherapy',
        name: 'Terapia Gestalt individual adultos - Online',
        description: 'Psicoterapia Gestalt individual para adultos mediante videollamada segura.',
        url: 'https://calendly.com/danavarro2040/30min',
      },
      {
        '@type': 'MedicalTherapy',
        name: 'Terapia Gestalt individual adultos - Presencial',
        description: 'Psicoterapia Gestalt individual para adultos en consultorio privado en Xalapa, Veracruz.',
      },
    ],
    priceRange: 'Se acuerda en privado',
    currenciesAccepted: 'MXN',
    paymentAccepted: 'Efectivo, Transferencia',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 19.5333,
        longitude: -96.9167,
      },
      geoRadius: '50000',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}