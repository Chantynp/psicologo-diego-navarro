'use client';

import { Brain, Cloud, Heart, Anchor, User, Video } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'Ansiedad y estrés',
    description: 'Preocupación constante, tensión que no cede. Aprendemos a escuchar la señal de tu cuerpo.',
  },
  {
    icon: Cloud,
    title: 'Depresión y tristeza',
    description: 'Falta de energía, pérdida de interés, vacío. Un espacio para volver a habitar tu vida.',
  },
  {
    icon: Heart,
    title: 'Autoestima y relaciones',
    description: 'Autocrítica, inseguridad, límites difíciles. Sanar el vínculo contigo para sanar con otros.',
  },
  {
    icon: Anchor,
    title: 'Transiciones de vida',
    description: 'Duelos, separaciones, cambios de etapa. Crisis que son puertas hacia otra forma de vivir.',
  },
];

const modalities = [
  { icon: User, title: 'Presencial', description: 'Consultorio en Xalapa, Veracruz.' },
  { icon: Video, title: 'En línea', description: 'Videollamada segura desde cualquier lugar.' },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-28 bg-neutral-50" aria-labelledby="services-title">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-500" aria-hidden="true" />
            Servicios
          </div>
          <h2 id="services-title" className="section-title">
            ¿Con qué puedo <span className="text-primary-700">acompañarte</span>?
          </h2>
          <p className="section-subtitle mx-auto">
            Terapia individual para adultos. Si tu situación no está aquí, escríbeme.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {services.map((service) => (
            <article key={service.title} className="card group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-100 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center mb-4 group-hover:bg-primary-700 group-hover:text-white transition-all duration-300">
                  <service.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{service.title}</h3>
                <p className="text-sm text-neutral-600">{service.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {modalities.map((modality) => (
            <div key={modality.title} className="card relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
              <div className="relative z-10 flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center group-hover:bg-primary-700 group-hover:text-white transition-all duration-300">
                  <modality.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">{modality.title}</h3>
                  <p className="text-sm text-neutral-600">{modality.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}