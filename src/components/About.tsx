'use client';

import { GraduationCap, Award, UserCheck, Heart, Brain, Leaf } from 'lucide-react';

const credentials = [
  {
    icon: GraduationCap,
    title: 'Licenciatura en Psicología',
    institution: 'Universidad del Golfo de México Norte, Campus Tierra Blanca',
    year: 'Titulado',
    color: 'primary',
  },
  {
    icon: Award,
    title: 'Cédula Profesional',
    institution: 'Registro oficial: 12309823',
    year: 'Vigente',
    color: 'emerald',
  },
  {
    icon: UserCheck,
    title: 'Experiencia Clínica',
    institution: 'Atención individual adultos',
    year: 'Presencial y Online',
    color: 'primary',
  },
];

const values = [
  {
    icon: Heart,
    title: 'Empatía genuina',
    description: 'Espacio seguro, sin juicios, donde te sientas escuchado y comprendido profundamente.',
  },
  {
    icon: Brain,
    title: 'Evidencia científica',
    description: 'Intervenciones basadas en enfoques con respaldo empírico y actualización constante.',
  },
  {
    icon: Leaf,
    title: 'Enfoque integral',
    description: 'Considero tu historia, contexto y recursos personales para un acompañamiento a tu medida.',
  },
];

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 lg:py-32 bg-white" aria-labelledby="about-title">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500" aria-hidden="true" />
              Sobre mí
            </div>
            <h2 id="about-title" className="section-title">
              Acompañamiento profesional para tu <span className="text-primary-700">crecimiento personal</span>
            </h2>
            <p className="section-subtitle">
              Soy Diego Armando Navarro Nolasco, psicólogo licenciado con cédula profesional 12309823. Mi práctica se centra en la terapia individual para adultos, ofreciendo un espacio de confianza donde trabajar tus dificultades emocionales y potenciar tu bienestar.
            </p>
            <p className="mt-6 text-neutral-600 leading-relaxed">
              Mi formación en la Universidad del Golfo de México me proporcionó bases sólidas en evaluación, diagnóstico e intervención psicológica. Combino rigor técnico con una actitud humana y cercana, porque entiendo que pedir ayuda requiere valentía y merece el mejor trato posible.
            </p>
            <p className="mt-6 text-neutral-600 leading-relaxed">
              Atiendo de forma presencial en Xalapa, Veracruz y también en modalidad online, adaptándome a tus necesidades y circunstancias. Cada proceso es único y lo diseño contigo, respetando tu ritmo y objetivos.
            </p>
          </div>
          
          <div className="space-y-6">
            {credentials.map((cred, index) => (
              <div key={cred.title} className="card group">
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                    cred.color === 'primary' ? 'bg-primary-100 text-primary-700' : 'bg-emerald-100 text-emerald-700'
                  } group-hover:scale-110 transition-transform duration-300`}>
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
        
        <div className="mt-20">
          <h3 className="text-2xl font-display font-bold text-center text-neutral-900">
            Principios que guían mi trabajo
          </h3>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
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