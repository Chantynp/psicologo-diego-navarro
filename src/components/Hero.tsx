'use client';

import Image from 'next/image';
import { ArrowRight, MessageSquare, MapPin, CheckCircle, CalendarCheck, Brain } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/danavarro2040/30min';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden" aria-labelledby="hero-title">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100" aria-hidden="true" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center bg-[length:60px_60px] opacity-5" aria-hidden="true" />

      <div className="relative section-container py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-6 animate-fade-in-up delay-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
              </span>
              Doctor en Investigaciones Cerebrales · Terapia Gestalt
            </div>

            <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-neutral-950 leading-tight animate-fade-in-up delay-200">
              Tu bienestar empieza en el <span className="text-primary-700">aquí y ahora</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-xl animate-fade-in-up delay-300">
              Psicoterapia Gestalt para adultos, con la profundidad que da la ciencia del cerebro. Presencial en Xalapa y en línea.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group w-full sm:w-auto justify-center"
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

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-neutral-500 animate-fade-in-up delay-400">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary-600 flex-shrink-0" aria-hidden="true" />
                <span>Dr. en Investigaciones Cerebrales (UV)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" aria-hidden="true" />
                <span>Cédula profesional 12309823</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0" aria-hidden="true" />
                <span>Xalapa, Ver. y en línea</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-up delay-200" aria-hidden="true">
            <div className="relative max-w-md mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-200 to-primary-100 rounded-3xl blur-2xl opacity-30" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-primary-100 bg-white">
                <Image
                  src="/hero-doctor.jpg"
                  alt="Diego Armando Navarro Nolasco - Psicólogo"
                  width={480}
                  height={580}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-primary-100 animate-fade-in-up delay-300">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-700" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">Consultorio Presencial</p>
                    <p className="text-sm text-neutral-500">Xalapa, Veracruz</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-primary-100 animate-fade-in-up delay-400">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">Sesiones Online</p>
                    <p className="text-sm text-neutral-500">Videollamada segura</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg className="w-6 h-6 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
      </div>
    </section>
  );
}