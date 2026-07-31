'use client';

import { 
  User, 
  Heart, 
  Brain, 
  Cloud, 
  Sun, 
  Moon, 
  Zap, 
  Anchor,
  Check 
} from 'lucide-react';

const services = [
  {
    icon: User,
    title: 'Ansiedad y estrés',
    description: 'Manejo de preocupación excesiva, ataques de pánico, estrés laboral/académico y síntomas físicos asociados.',
    issues: ['Trastorno de ansiedad generalizada', 'Ansiedad social', 'Estrés crónico', 'Ataques de pánico'],
  },
  {
    icon: Cloud,
    title: 'Depresión y estado de ánimo',
    description: 'Tratamiento de tristeza persistente, pérdida de interés, fatiga, cambios en sueño/apetito y pensamientos negativos.',
    issues: ['Depresión mayor', 'Distimia', 'Trastorno afectivo estacional', 'Duelo no resuelto'],
  },
  {
    icon: Brain,
    title: 'Autoestima y autoconocimiento',
    description: 'Trabajo en autocrítica excesiva, perfeccionismo, inseguridad, límites personales y construcción de identidad.',
    issues: ['Baja autoestima', 'Síndrome del impostor', 'Dificultad para decidir', 'Patrones de autosabotaje'],
  },
  {
    icon: Heart,
    title: 'Regulación emocional',
    description: 'Desarrollo de habilidades para identificar, comprender y gestionar emociones intensas o difíciles.',
    issues: ['Irritabilidad/Ira', 'Hipersensibilidad', 'Alexitimia', 'Desregulación emocional'],
  },
  {
    icon: Sun,
    title: 'Transiciones vitales',
    description: 'Acompañamiento en cambios importantes: duelos, separaciones, cambios de carrera, migración, paternidad.',
    issues: ['Duelo y pérdidas', 'Separaciones/Divorcios', 'Cambios laborales', 'Crisis de vida'],
  },
  {
    icon: Anchor,
    title: 'Hábitos y bienestar',
    description: 'Mejora de sueño, alimentación, ejercicio, procrastinación, uso de pantallas y rutinas saludables.',
    issues: ['Insomnio', 'Procrastinación', 'Adicciones comportamentales', 'Burnout'],
  },
];

const modalities = [
  { icon: User, title: 'Presencial', description: 'Consultorio en Xalapa, Veracruz. Espacio privado, cómodo y seguro.' },
  { icon: Brain, title: 'Online', description: 'Videollamadas seguras (Google Meet/Zoom). Mismo nivel de confidencialidad y eficacia.' },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-32 bg-neutral-50" aria-labelledby="services-title">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-500" aria-hidden="true" />
            Servicios
          </div>
          <h2 id="services-title" className="section-title">
            Áreas de <span className="text-primary-700">intervención psicológica</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Atención individual para adultos con enfoque integrador. Cada proceso se adapta a tus necesidades específicas tras una evaluación inicial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <article key={service.title} className="card group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-100 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center mb-4 group-hover:bg-primary-700 group-hover:text-white transition-all duration-300">
                  <service.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">{service.title}</h3>
                <p className="text-neutral-600 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2" role="list">
                  {service.issues.map((issue, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-neutral-600">
                      <Check className="w-4 h-4 text-primary-600 flex-shrink-0" aria-hidden="true" />
                      {issue}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {modalities.map((modality, index) => (
            <div key={modality.title} className="card relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
              <div className="relative z-10 flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center group-hover:bg-primary-700 group-hover:text-white transition-all duration-300">
                  <modality.icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-1">{modality.title}</h3>
                  <p className="text-neutral-600">{modality.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}