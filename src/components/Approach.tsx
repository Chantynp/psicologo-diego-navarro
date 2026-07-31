'use client';

import { 
  Puzzle, 
  Lightbulb, 
  Target, 
  Layers, 
  RefreshCw, 
  Compass,
  ArrowRight 
} from 'lucide-react';

const approaches = [
  {
    icon: Puzzle,
    title: 'Terapia Cognitivo-Conductual (TCC)',
    description: 'Identificación y modificación de patrones de pensamiento y conducta que mantienen el malestar. Técnicas estructuradas y basadas en evidencia.',
    focus: 'Pensamientos → Emociones → Conductas',
  },
  {
    icon: Lightbulb,
    title: 'Terapia de Aceptación y Compromiso (ACT)',
    description: 'Desarrollo de flexibilidad psicológica: aceptar lo incontrolable y comprometerse con acciones valiosas. Mindfulness y valores personales.',
    focus: 'Aceptación + Acción comprometida',
  },
  {
    icon: Target,
    title: 'Enfoque Centrado en Soluciones',
    description: 'Breve y orientado a metas. Identifica recursos, excepciones al problema y pequeños pasos hacia el cambio deseado.',
    focus: 'Recursos + Metas concretas',
  },
  {
    icon: Layers,
    title: 'Perspectiva Sistémica',
    description: 'Comprende al individuo en sus contextos: familia, pareja, trabajo, cultura. Los problemas se ven como patrones relacionales.',
    focus: 'Contexto + Relaciones',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Primera sesión - Evaluación',
    description: 'Entrevista clínica para entender tu motivo de consulta, historia, recursos y objetivos. Duración: 60-75 min.',
  },
  {
    number: '02',
    title: 'Devolución y plan',
    description: 'Comparto mi impresión diagnóstica, explico el enfoque recomendado y acordamos frecuencia, duración y metas terapéuticas.',
  },
  {
    number: '03',
    title: 'Proceso terapéutico',
    description: 'Sesiones de trabajo (50 min) aplicando técnicas según el enfoque acordado. Revisión periódica de avances y ajustes.',
  },
  {
    number: '04',
    title: 'Cierre y seguimiento',
    description: 'Cuando se alcanzan las metas, planificamos el alta con herramientas de prevención de recaídas. Sesiones de seguimiento opcionales.',
  },
];

export default function Approach() {
  return (
    <section id="enfoque" className="py-20 lg:py-32 bg-white" aria-labelledby="approach-title">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-500" aria-hidden="true" />
            Metodología
          </div>
          <h2 id="approach-title" className="section-title">
            Enfoque <span className="text-primary-700">integrador y personalizado</span>
          </h2>
          <p className="section-subtitle mx-auto">
            No existe una talla única en terapia. Integro herramientas de corrientes con mayor respaldo científico, adaptándolas a tu caso concreto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {approaches.map((approach, index) => (
            <article key={approach.title} className="card group relative">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center group-hover:bg-primary-700 group-hover:text-white transition-all duration-300">
                  <approach.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1">{approach.title}</h3>
                  <p className="text-neutral-600 text-sm mb-3">{approach.description}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
                    <Target className="w-3 h-3" aria-hidden="true" />
                    {approach.focus}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 to-primary-400 hidden lg:block" aria-hidden="true" />
          
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative lg:pl-20">
                <div className="absolute left-0 top-0 w-16 h-16 lg:w-16 lg:h-16 rounded-full bg-primary-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg shadow-primary-600/30 z-10">
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

        <div className="mt-20 p-8 rounded-2xl bg-primary-50 border border-primary-100 text-center">
          <h3 className="text-2xl font-display font-bold text-neutral-900 mb-4">
            ¿Listo para dar el primer paso?
          </h3>
          <p className="text-neutral-600 max-w-2xl mx-auto mb-6">
            La terapia es un espacio para ti. Sin juicios, sin prisa, a tu ritmo. La primera sesión es para que nos conozcamos y veas si conectamos.
          </p>
          <a 
            href="https://wa.me/523316360640?text=Hola%20Diego%2C%20me%20gustar%C3%ADa%20agendar%20mi%20primera%20sesión%20de%20terapia." 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-2"
          >
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
            Agendar primera sesión
          </a>
        </div>
      </div>
    </section>
  );
}