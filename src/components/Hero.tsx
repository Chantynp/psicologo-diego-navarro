'use client';

import Image from 'next/image';
import { ArrowRight, MessageSquare, MapPin, CheckCircle, CalendarCheck, Brain } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/danavarro2040/30min';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden" aria-labelledby="hero-title">
      <Image
        src="/hero-full.webp"
        alt="Diego Armando Navarro Nolasco, psicólogo Gestalt"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_20%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-violet-950/90 via-primary-800/75 to-primary-600/45" aria-hidden="true" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center bg-[length:60px_60px] opacity-5" aria-hidden="true" />

      <div className="relative section-container py-24 lg:py-32 w-full">
        <div className="max-w-2xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6 animate-fade-in-up delay-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-300 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-200" />
            </span>
            Psicólogo · Psicoterapia Gestalt para adultos · Investigación en neurociencias
          </div>

          <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-tight animate-fade-in-up delay-200">
            Tu bienestar empieza en el <span className="text-violet-200">aquí y ahora</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-violet-100 leading-relaxed max-w-xl animate-fade-in-up delay-300">
            Psicoterapia Gestalt para adultos, con la profundidad que da la ciencia del cerebro. Presencial en Xalapa y en línea.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-violet-900 transition-all duration-200 hover:bg-violet-50 hover:shadow-lg shadow-white/10 group w-full sm:w-auto"
              aria-label="Agendar cita en línea con Calendly"
            >
              <CalendarCheck className="w-5 h-5" aria-hidden="true" />
              Agendar cita en línea
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="https://wa.me/523316360640?text=Hola%20Diego%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20para%20terapia%20individual."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp group w-full sm:w-auto justify-center"
              aria-label="Agendar cita por WhatsApp"
            >
              <MessageSquare className="w-5 h-5" aria-hidden="true" />
              Escribir por WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-violet-100 animate-fade-in-up delay-400">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-violet-200 flex-shrink-0" aria-hidden="true" />
              <span>Doctorado en Investigaciones Cerebrales (UV)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-violet-200 flex-shrink-0" aria-hidden="true" />
              <span>Cédula profesional 12309823</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-violet-200 flex-shrink-0" aria-hidden="true" />
              <span>Xalapa, Ver. y en línea</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
      </div>
    </section>
  );
}
