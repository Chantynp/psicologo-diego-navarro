'use client';

import { GraduationCap, Award, BookOpen, Leaf, Clock, HeartHandshake } from 'lucide-react';

const credentials = [
  {
    icon: GraduationCap,
    title: 'Lic. en Psicología',
    institution: 'Universidad del Golfo de México Norte',
    year: 'Cédula profesional 12309823',
  },
  {
    icon: Award,
    title: 'Doctorado en Investigaciones Cerebrales',
    institution: 'Universidad Veracruzana (IICE)',
    year: 'Formación concluida · Grado en proceso',
  },
  {
    icon: BookOpen,
    title: 'Investigador y divulgador',
    institution: 'Publicaciones en BMC Psychology y eNeurobiología',
    year: 'Ansiedad y neurofisiología',
  },
];

const values = [
  {
    icon: Clock,
    title: 'Aquí y ahora',
    description: 'El presente es el único lugar donde el cambio es posible: trabajamos sobre lo que te pasa hoy.',
  },
  {
    icon: Leaf,
    title: 'Cuerpo y emoción',
    description: 'Las emociones se viven en el cuerpo: se respiran y se expresan, no solo se analizan.',
  },
  {
    icon: HeartHandshake,
    title: 'Ciencia y humanidad',
    description: 'Neurociencias para la claridad técnica; Gestalt para la sensibilidad del acompañamiento.',
  },
];

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 lg:py-28 bg-white" aria-labelledby="about-title">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500" aria-hidden="true" />
              Sobre mí
            </div>
            <h2 id="about-title" className="section-title">
              Ciencia del cerebro, <span className="text-primary-700">corazón Gestalt</span>
            </h2>
            <p className="mt-6 text-neutral-600 leading-relaxed">
              Soy psicólogo con formación doctoral en Investigaciones Cerebrales por la Universidad Veracruzana. Mi camino une dos mundos: la rigurosidad de la neurociencia y la calidez de la terapia Gestalt.
            </p>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              Mi investigación doctoral exploró asociaciones entre ansiedad, apoyo social percibido y patrones de electroencefalografía en reposo en adultos jóvenes sanos. Resultados exploratorios, y con esa misma rigurosidad acompaño cada proceso: cada persona es única, y el cambio real viene de darse cuenta.
            </p>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              Acompaño a adultos con ansiedad, depresión, autoestima y transiciones, presencial en Xalapa o en línea.
            </p>
          </div>

          <div className="space-y-6">
            {credentials.map((cred) => (
              <div key={cred.title} className="card group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <cred.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 group-hover:text-primary-700 transition-colors">{cred.title}</h3>
                    <p className="text-neutral-600 text-sm mt-1">{cred.institution}</p>
                    <p className="text-primary-600 text-sm font-medium mt-1">{cred.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-display font-bold text-center text-neutral-900">
            Tres pilares de mi trabajo
          </h3>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card text-center group">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center group-hover:bg-primary-700 group-hover:text-white transition-all duration-300">
                  <value.icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">{value.title}</h4>
                <p className="text-neutral-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}