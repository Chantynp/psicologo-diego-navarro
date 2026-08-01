import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Diego Armando Navarro Nolasco - Psicólogo',
  description: 'Términos y condiciones de uso del sitio web y de los servicios de atención psicológica del Lic. Diego Armando Navarro Nolasco.',
};

export default function TerminosPage() {
  return (
    <main className="pt-32 pb-20 bg-white min-h-screen">
      <div className="section-container max-w-3xl">
        <Link href="/" className="text-primary-700 hover:text-primary-800 text-sm font-medium inline-flex items-center gap-1 mb-8">
          ← Volver al inicio
        </Link>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-4">Términos y Condiciones</h1>
        <p className="text-sm text-neutral-500 mb-10">Última actualización: Julio 2026</p>

        <div className="space-y-8 text-neutral-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">1. Aceptación de los términos</h2>
            <p>
              Al utilizar este sitio web y/o solicitar los servicios del Lic. Diego Armando Navarro Nolasco, aceptas los presentes términos y condiciones en su totalidad.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">2. Naturaleza del servicio</h2>
            <p>
              Los servicios ofrecidos consisten en terapia Gestalt individual para adultos, en modalidad presencial (Xalapa, Veracruz) y en línea. El contenido de este sitio tiene fines informativos y <strong>no sustituye la atención directa</strong> ni el diagnóstico profesional.
            </p>
            <p className="mt-3">
              Este sitio no es un servicio de urgencias. Si te encuentras en crisis, contacta al 911, acude a urgencias o llama a la Línea de la Vida al <strong>800 911 2000</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">3. Citas y cancelaciones</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Las citas se confirman por WhatsApp, correo electrónico o Calendly.</li>
              <li>Se solicita avisar con al menos <strong>24 horas de anticipación</strong> en caso de cancelación o reprogramación.</li>
              <li>Las inasistencias sin aviso podrán cobrarse, según política acordada previamente.</li>
              <li>La puntualidad aplica: el tiempo de la sesión inicia a la hora pactada.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">4. Honorarios y pagos</h2>
            <p>
              El costo de las sesiones se acuerda de forma privada con cada paciente. Métodos de pago aceptados: <strong>efectivo y transferencia bancaria</strong>. Se emite recibo o factura cuando se solicite y aplique.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">5. Modalidad en línea</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Las sesiones en línea se realizan mediante videollamada en plataformas seguras.</li>
              <li>Requieres conexión estable a internet y un espacio privado sin interrupciones.</li>
              <li>Se firma consentimiento informado específico para la modalidad en línea.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">6. Propiedad intelectual</h2>
            <p>
              Todo el contenido de este sitio (textos, diseño, imágenes) es propiedad del Lic. Diego Armando Navarro Nolasco. Queda prohibida su reproducción sin autorización escrita.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">7. Limitación de responsabilidad</h2>
            <p>
              Los resultados de la terapia dependen de múltiples factores y no pueden garantizarse. La información publicada en este sitio es general y puede no aplicarse a tu caso particular.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">8. Contacto</h2>
            <p>
              Para dudas sobre estos términos: WhatsApp 331 636 0640 · danavarro2040@gmail.com
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}