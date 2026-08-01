'use client';

import { Mail, Phone, MapPin, Clock, Heart, CalendarCheck } from 'lucide-react';

const EMAIL = 'danavarro2040@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/diego-navarro-a4a56207';
const CALENDLY_URL = 'https://calendly.com/danavarro2040/30min';
const WHATSAPP_URL = 'https://wa.me/523316360640';

const socialLinks = [
  {
    label: 'LinkedIn',
    href: LINKEDIN_URL,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navegacion: [
      { label: 'Inicio', href: '#' },
      { label: 'Sobre mí', href: '#sobre-mi' },
      { label: 'Servicios', href: '#servicios' },
      { label: 'Enfoque', href: '#enfoque' },
      { label: 'Investigación', href: '#investigacion' },
      { label: 'Contacto', href: '#contacto' },
    ],
    servicios: [
      { label: 'Ansiedad y estrés', href: '#servicios' },
      { label: 'Depresión', href: '#servicios' },
      { label: 'Autoestima', href: '#servicios' },
      { label: 'Regulación emocional', href: '#servicios' },
      { label: 'Transiciones vitales', href: '#servicios' },
    ],
    legal: [
      { label: 'Aviso de privacidad', href: '/privacidad' },
      { label: 'Términos y condiciones', href: '/terminos' },
      { label: 'Consentimiento informado', href: '/consentimiento' },
    ],
  };

  const contactInfo = [
    { icon: Mail, text: EMAIL, href: `mailto:${EMAIL}` },
    { icon: Phone, text: 'WhatsApp: 331 636 0640', href: WHATSAPP_URL },
    { icon: CalendarCheck, text: 'Agenda online: Calendly', href: CALENDLY_URL },
    { icon: MapPin, text: 'Presencial: Xalapa, Veracruz', href: '#' },
    { icon: Clock, text: 'Lun-Vie 9:00-20:00 / Sáb 9:00-14:00', href: '#' },
  ];

  return (
    <footer className="bg-neutral-950 text-neutral-300" role="contentinfo">
      <div className="section-container py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 xl:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2 xl:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-primary-500" aria-hidden="true" />
              <span className="font-display font-bold text-xl text-white">Diego Navarro</span>
            </div>
            <p className="text-neutral-400 max-w-xs leading-relaxed">
              Psicólogo y Dr. en Investigaciones Cerebrales (UV). Terapia Gestalt individual para adultos, presencial en Xalapa y en línea.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-neutral-800 text-neutral-400 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Navegación rápida" className="space-y-4">
            <h3 className="font-semibold text-white">Navegación</h3>
            <ul className="space-y-2" role="list">
              {footerLinks.navegacion.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Servicios" className="space-y-4">
            <h3 className="font-semibold text-white">Servicios</h3>
            <ul className="space-y-2" role="list">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-4">
            <h3 className="font-semibold text-white">Contacto directo</h3>
            <ul className="space-y-3" role="list">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-sm">
                  <item.icon className="w-5 h-5 text-primary-500 flex-shrink-0" aria-hidden="true" />
                  {item.href.startsWith('http') || item.href.startsWith('mailto') ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary-400 transition-colors">{item.text}</a>
                  ) : (
                    <span className="text-neutral-400">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">
            © {currentYear} Diego Armando Navarro Nolasco. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-neutral-500">
            <a href="/privacidad" className="hover:text-primary-400 transition-colors">Aviso de privacidad</a>
            <a href="/terminos" className="hover:text-primary-400 transition-colors">Términos y condiciones</a>
            <span className="flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-red-500" aria-hidden="true" />
              Hecho para tu bienestar
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}