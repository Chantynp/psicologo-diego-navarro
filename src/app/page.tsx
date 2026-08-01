import { MessageSquare } from 'lucide-react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Approach from '@/components/Approach';
import Research from '@/components/Research';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
        <nav className="section-container flex h-16 items-center justify-between" aria-label="Navegación principal">
          <a href="/" className="font-display font-bold text-xl text-primary-800" aria-label="Inicio - Diego Navarro Psicólogo">
            Diego Navarro
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#sobre-mi" className="text-sm font-medium text-neutral-600 hover:text-primary-700 transition-colors">Sobre mí</a>
            <a href="#servicios" className="text-sm font-medium text-neutral-600 hover:text-primary-700 transition-colors">Servicios</a>
            <a href="#enfoque" className="text-sm font-medium text-neutral-600 hover:text-primary-700 transition-colors">Enfoque</a>
            <a href="#investigacion" className="text-sm font-medium text-neutral-600 hover:text-primary-700 transition-colors">Investigación</a>
            <a href="#contacto" className="btn-primary text-sm px-4 py-2">Agendar cita</a>
          </div>
          <div className="flex md:hidden items-center gap-4">
            <a href="https://wa.me/523316360640" target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm px-4 py-2" aria-label="Contactar por WhatsApp">
              <MessageSquare className="w-5 h-5" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </nav>
      </header>

      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Approach />
        <Research />
        <Contact />
      </main>

      <Footer />
    </>
  );
}