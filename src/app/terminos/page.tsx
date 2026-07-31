import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'TÃ©rminos y Condiciones | Diego Armando Navarro Nolasco - PsicÃ³logo',
  description: 'TÃ©rminos y condiciones de uso del sitio web y de los servicios de atenciÃ³n psicolÃ³gica del Lic. Diego Armando Navarro Nolasco.',
};

export default function TerminosPage() {
  return (
    <main className="pt-32 pb-20 bg-white min-h-screen">
      <div className="section-container max-w-3xl">
        <Link href="/" className="text-primary-700 hover:text-primary-800 text-sm font-medium inline-flex items-center gap-1 mb-8">
          â† Volver al inicio
        </Link>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-4">TÃ©rminos y Condiciones</h1>
        <p className="text-sm text-neutral-500 mb-10">Ãšltima actualizaciÃ³n: Julio 2026</p>

        <div className="space-y-8 text-neutral-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">1. AceptaciÃ³n de los tÃ©rminos</h2>
            <p>
              Al utilizar este sitio web y/o solicitar los servicios del Lic. Diego Armando Navarro Nolasco, aceptas los presentes tÃ©rminos y condiciones en su totalidad.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">2. Naturaleza del servicio</h2>
            <p>
              Los servicios ofrecidos consisten en atenciÃ³n psicolÃ³gica individual para adultos en modalidad presencial (Xalapa, Veracruz) y en lÃ­nea. El contenido de este sitio tiene fines informativos y <strong>no sustituye la atenciÃ³n directa</strong> ni el diagnÃ³stico profesional.
            </p>
            <p className="mt-3">
              Este sitio no es un servicio de urgencias. Si te encuentras en crisis, contacta al 911, acude a urgencias o llama a la LÃ­nea de la Vida al <strong>800 911 2000</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">3. Citas y cancelaciones</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Las citas se confirman por WhatsApp o correo electrÃ³nico.</li>
              <li>Se solicita avisar con al menos <strong>24 horas de anticipaciÃ³n</strong> en caso de cancelaciÃ³n o reprogramaciÃ³n.</li>
              <li>Las inasistencias sin aviso podrÃ¡n cobrarse, segÃºn polÃ­tica acordada previamente.</li>
              <li>La puntualidad aplica: el tiempo de la sesiÃ³n inicia a la hora pactada.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">4. Honorarios y pagos</h2>
            <p>
              Los honorarios se informan previamente a la primera sesiÃ³n. MÃ©todos de pago aceptados: efectivo, transferencia bancaria y tarjeta. Se emite recibo o factura cuando se solicite y aplique.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">5. Modalidad en lÃ­nea</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Las sesiones en lÃ­nea se realizan mediante videollamada en plataformas seguras.</li>
              <li>Requieres conexiÃ³n estable a internet y un espacio privado sin interrupciones.</li>
              <li>Se firma consentimiento informado especÃ­fico para la modalidad en lÃ­nea.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">6. Propiedad intelectual</h2>
            <p>
              Todo el contenido de este sitio (textos, diseÃ±o, imÃ¡genes) es propiedad del Lic. Diego Armando Navarro Nolasco. Queda prohibida su reproducciÃ³n sin autorizaciÃ³n escrita.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">7. LimitaciÃ³n de responsabilidad</h2>
            <p>
              Los resultados de la terapia dependen de mÃºltiples factores y no pueden garantizarse. La informaciÃ³n publicada en este sitio es general y puede no aplicarse a tu caso particular.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">8. Contacto</h2>
            <p>
              Para dudas sobre estos tÃ©rminos: WhatsApp 331 636 0640 Â· danavarro2040@gmail.com
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}