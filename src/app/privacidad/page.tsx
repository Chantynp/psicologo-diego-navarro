import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aviso de Privacidad | Diego Armando Navarro Nolasco - Psicólogo',
  description: 'Aviso de privacidad conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (México).',
};

export default function PrivacidadPage() {
  return (
    <main className="pt-32 pb-20 bg-white min-h-screen">
      <div className="section-container max-w-3xl">
        <Link href="/" className="text-primary-700 hover:text-primary-800 text-sm font-medium inline-flex items-center gap-1 mb-8">
          ← Volver al inicio
        </Link>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-4">Aviso de Privacidad</h1>
        <p className="text-sm text-neutral-500 mb-10">Última actualización: Julio 2026</p>

        <div className="prose prose-neutral max-w-none space-y-8 text-neutral-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">1. Responsable del tratamiento</h2>
            <p>
              Lic. Diego Armando Navarro Nolasco, Licenciado en Psicología, Cédula profesional 12309823, con consultorio presencial en Xalapa, Veracruz, México.
            </p>
            <p>
              Contacto: WhatsApp 331 636 0640 · diego.navarro.psicologo@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">2. Datos personales que recabamos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Datos de identificación y contacto: nombre, teléfono, correo electrónico.</li>
              <li>Datos de salud y psicológicos: motivo de consulta, historia clínica, evolución del tratamiento (confidenciales).</li>
              <li>Datos de facturación si el servicio se factura.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">3. Finalidades del tratamiento</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Atender solicitudes de información y agendar citas.</li>
              <li>Prestar servicios de evaluación, diagnóstico e intervención psicológica.</li>
              <li>Dar seguimiento clínico a tu proceso terapéutico.</li>
              <li>Emitir comprobantes de pago si aplica.</li>
            </ul>
            <p className="mt-3">
              Los datos personales <strong>sensibles</strong> (salud, información psicológica) solo se tratarán con tu consentimiento expreso, conforme al artículo 9 de la LFPDPPP.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">4. Confidencialidad y secreto profesional</h2>
            <p>
              La información de las sesiones está protegida por el <strong>secreto profesional</strong> (Código Ético del Psicólogo, Consejo Nacional para la Enseñanza e Investigación en Psicología). Solo se revelará información con tu autorización escrita, o cuando exista obligación legal o riesgo para tu integridad o la de terceros.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">5. Derechos ARCO</h2>
            <p>
              Puedes ejercer tus derechos de <strong>A</strong>cceso, <strong>R</strong>ectificación, <strong>C</strong>ancelación u <strong>O</strong>posición (ARCO) enviando tu solicitud a diego.navarro.psicologo@gmail.com, indicando tu nombre y la razón de tu solicitud. Te responderemos en un máximo de 15 días hábiles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">6. Uso de cookies y datos del sitio web</h2>
            <p>
              Este sitio web no utiliza cookies de rastreo de terceros. Los datos enviados a través del formulario de contacto se utilizan exclusivamente para responder a tu solicitud y no se comparten con terceros, salvo obligación legal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">7. Cambios al aviso</h2>
            <p>
              Cualquier modificación a este aviso se publicará en esta misma página. Recomendamos revisar periódicamente esta sección.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}