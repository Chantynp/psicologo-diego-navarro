'use client';

export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: 'Diego Armando Navarro Nolasco',
    alternateName: 'Diego Navarro',
    description: 'Psicólogo licenciado especialista en terapia individual para adultos. Atención presencial en Xalapa, Veracruz y modalidad online.',
    url: 'https://psicologo-diego-navarro.vercel.app',
    logo: 'https://psicologo-diego-navarro.vercel.app/icon-512.png',
    image: 'https://psicologo-diego-navarro.vercel.app/og-image.jpg',
    sameAs: [
      'https://wa.me/523316360640',
      'https://www.linkedin.com/in/diego-navarro-a4a56207',
      'https://calendly.com/danavarro2040/30min',
    ],
    knowsAbout: [
      'Psicología clínica',
      'Terapia cognitivo-conductual',
      'Terapia de aceptación y compromiso',
      'Ansiedad',
      'Depresión',
      'Autoestima',
      'Regulación emocional',
      'Duelo y pérdidas',
    ],
    medicalSpecialty: 'Psychiatry',
    credential: 'Cédula profesional 12309823',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Universidad del Golfo de México Norte, Campus Tierra Blanca',
    },
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
        name: 'Terapia individual adultos - Online',
        description: 'Sesiones de psicoterapia individual para adultos mediante videollamada segura.',
        url: 'https://calendly.com/danavarro2040/30min',
      },
      {
        '@type': 'MedicalTherapy',
        name: 'Terapia individual adultos - Presencial',
        description: 'Sesiones de psicoterapia individual para adultos en consultorio privado en Xalapa, Veracruz.',
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