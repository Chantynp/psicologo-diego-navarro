import { Metadata } from 'next';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Approach from '@/components/Approach';
import Research from '@/components/Research';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Diego Armando Navarro Nolasco | Psicólogo Gestalt y Dr. en Neurociencias | Xalapa',
  description: 'Terapia Gestalt para adultos con enfoque en el aquí y ahora. Doctor en Investigaciones Cerebrales (UV). Presencial en Xalapa y en línea. Agenda tu cita.',
};

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
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.099-.174.05-.369-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.369-.01-.543-.01-.185 0-.36.01-.534.01-.297.01-.644.16-.945.52-.298.348-.768.965-.882 1.28-.114.313-.114.673-.114.814 0 .149.095.348.114.473.02.134.115.314.298.574.39.543 1.257 1.767 2.13 2.752.875.986 1.255 1.73 1.255 1.914 0 .099-.1.198-.21.198-.124 0-.238-.01-.352-.01-.372 0-.493-.249-.53-.279a.75.75 0 0 0-.28-.124c-.135 0-.27.01-.393.01-.24.02-.46.1-.643.23-.264.19-.472.45-.472.674 0 .314.342.615.76.904.25.173.387.215.587.193.278-.03.507-.216.724-.52.217-.304.39-.705.39-.924 0-.185-.094-.43-.21-.614-.116-.185-.36-.334-.57-.354a.75.75 0 0 0-.584-.01c-.278.01-.543.154-.79.42-.484.52-1.09 1.42-1.572 2.295-.483.874-.785 1.559-.824 1.736-.038.175-.104.354-.15.52-.03.1-.045.184-.065.264-.01.075-.03.174-.06.258-.03.08-.054.14-.084.2-.03.06-.054.105-.084.15-.03.045-.06.09-.08.134zM12 2C6.477 2 2 6.484 2 12c0 2.652 1.067 5.088 2.838 6.893.113.114.2.24.274.384l.036.064c.05.084.084.16.12.24.01.024.024.05.024.084l.013.046a17.6 17.6 0 0 0 .37 1.434c.085.2.16.41.24.62.08.2.17.4.25.61a24.5 24.5 0 0 0 .695 2.33c.154.42.32.83.5.1.24.24.49.47.75.69.27.22.55.43.84.63.1.06.2.1.3.15.1.04.21.05.3.05h.02a15.5 15.5 0 0 0 1.42-.02c.24-.01.48-.06.7-.19.23-.14.44-.3.63-.48.18-.18.35-.37.5-.57.16-.19.3-.39.45-.6.14-.2.27-.41.39-.62.13-.21.25-.43.37-.65.12-.22.23-.45.33-.68.1-.23.2-.46.28-.69.09-.23.17-.47.24-.7.07-.23.13-.47.17-.7.04-.24.06-.48.08-.72.02-.24.03-.48.03-.72a12 12 0 0 0-.02-1.4c-.01-.35-.04-.7-.08-1.04-.03-.35-.08-.69-.14-1.03-.06-.34-.14-.67-.23-.99-.08-.32-.18-.63-.29-.93-.1-.3-.22-.59-.35-.87-.13-.28-.27-.55-.42-.81-.15-.26-.31-.5-.48-.73-.17-.23-.35-.45-.54-.65-.19-.2-.39-.39-.6-.57-.2-.17-.42-.32-.65-.45-.23-.13-.47-.24-.71-.33-.24-.09-.48-.16-.72-.21-.24-.06-.48-.1-.72-.13-.23-.03-.47-.04-.7-.04h-.02c-.27 0-.54.01-.8.04-.26.03-.51.09-.75.16-.24.07-.47.16-.69.26-.22.1-.43.22-.63.35-.2.13-.39.28-.57.44-.18.16-.35.33-.5.51-.15.18-.3.37-.43.56-.13.19-.25.39-.36.6-.11.2-.21.41-.3.62-.09.21-.17.43-.24.65-.07.22-.13.44-.18.66-.05.22-.08.44-.1.66-.02.22-.03.44-.03.66a12 12 0 0 0 .02 1.4c0 .35.01.7.04 1.04.03.35.08.69.14 1.03.06.34.14.67.23.99.08.32.18.63.29.93.1.3.22.59.35.87.13.28.27.55.42.81.15.26.31.5.48.73.17.23.35.45.54.65.19.2.39.39.6.57.2.17.42.32.65.45.23.13.47.24.71.33.24.09.48.16.72.21.24.06.48.1.72.13.23.03.47.04.7.04h.02c.27 0 .54-.01.8-.04.26-.03.51-.09.75-.16.24-.07.47-.16.69-.26.22-.1.43-.22.63-.35.2-.13.39-.28.57-.44.18-.16.35-.33.5-.51.15-.18.3-.37.43-.56.13-.19.25-.39.36-.6.11-.2.21-.41.3-.62.09-.21.17-.43.24-.65.07-.22.13-.44.18-.66.05-.22.08-.44.1-.66.02-.22.03-.44.03-.66 0-.18-.01-.35-.02-.53-.01-.17-.03-.34-.06-.5-.02-.15-.05-.3-.08-.45-.03-.14-.06-.28-.1-.42-.04-.13-.08-.26-.13-.38-.05-.13-.1-.25-.16-.37-.06-.12-.12-.23-.19-.33-.07-.1-.14-.19-.22-.28-.08-.08-.16-.16-.25-.23-.09-.07-.18-.14-.27-.2-.09-.06-.18-.12-.27-.18-.09-.06-.18-.11-.27-.17-.09-.05-.17-.11-.26-.16-.09-.06-.18-.12-.27-.18-.09-.06-.18-.11-.27-.17-.09-.05-.17-.1-.26-.15z"/></svg>
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