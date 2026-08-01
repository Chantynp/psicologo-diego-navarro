'use client';

import { Eye, Sun, Hand, Route, ArrowRight } from 'lucide-react';

const principles = [
  {
    icon: Eye,
    title: 'Darse cuenta',
    description: 'El corazón de la Gestalt: notar qué sientes, qué piensas y qué evitas. Lo que se hace consciente, puede transformarse.',
  },
  {
    icon: Sun,
    title: 'Aquí y ahora',
    description: 'Trabajamos con lo que traes hoy a la sesión, no con interpretaciones lejanas de tu historia.',
  },
  {
    icon: Hand,
    title: 'Cuerpo presente',
    description: 'La emoción habita en tu cuerpo: la respiración, la tensión, el gesto. Aprendemos a escucharlo y a expresarlo.',
  },
  {
    icon: Route,
    title: 'Contacto y relación',
    description: 'La vida se vive en relación. Exploramos cómo te vinculas y dónde pones distancia o te acercas de más.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Nos conocemos',
    description: 'Primera sesión para escucharte, entender tu motivo y sentir si conectamos. Sin compromiso.',
  },
  {
    number: '02',
    title: 'Trabajo de darse cuenta',
    description: 'Sesiones semanales donde exploramos lo que aparece: emociones, cuerpo, patrones, relaciones.',
  },
  {
    number: '03',
    title: 'Integración y cierre',
    description: 'Cuando tu vida responde distinto, cerramos el proceso con claridad y herramientas propias.',
  },
];

export default function Approach() {
  return (
    <section id="enfoque" className="py-20 lg:py-28 bg-white" aria-labelledby="approach-title">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-500" aria-hidden="true" />
            Enfoque
          </div>
          <h2 id="approach-title" className="section-title">
            Terapia <span className="text-primary-700">Gestalt</span>
          </h2>
          <p className="section-subtitle mx-auto">
            No eres un diagnóstico: eres una persona completa. La Gestalt no etiqueta síntomas, te acompaña a vivir con más conciencia y libertad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {principles.map((principle) => (
            <article key={principle.title} className="card group relative">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center mb-4 group-hover:bg-primary-700 group-hover:text-white transition-all duration-300">
                <principle.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">{principle.title}</h3>
              <p className="text-sm text-neutral-600">{principle.description}</p>
            </article>
          ))}
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 to-primary-400 hidden lg:block" aria-hidden="true" />
          <div className="space-y-10">
            {processSteps.map((step) => (
              <div key={step.number} className="relative lg:pl-20">
                <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-primary-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg shadow-primary-600/30 z-10">
                  {step.number}
                </div>
                <div className="card pl-6 lg:pl-0">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">{step.title}</h3>
                  <p className="text-neutral-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-primary-50 border border-primary-100 text-center">
          <h3 className="text-2xl font-display font-bold text-neutral-900 mb-4">
            Dar el primer paso es también darse cuenta
          </h3>
          <a
            href="https://calendly.com/danavarro2040/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
            Agendar primera sesión
          </a>
        </div>
      </div>
    </section>
  );
}