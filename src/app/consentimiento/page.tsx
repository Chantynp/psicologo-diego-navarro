import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Consentimiento Informado | Diego Armando Navarro Nolasco - Psicólogo',
  description: 'Información sobre el consentimiento informado para el proceso de atención psicológica del Lic. Diego Armando Navarro Nolasco.',
};

export default function ConsentimientoPage() {
  return (
    <main className="pt-32 pb-20 bg-white min-h-screen">
      <div className="section-container max-w-3xl">
        <Link href="/" className="text-primary-700 hover:text-primary-800 text-sm font-medium inline-flex items-center gap-1 mb-8">
          ← Volver al inicio
        </Link>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-4">Consentimiento Informado</h1>
        <p className="text-sm text-neutral-500 mb-10">Documento de referencia. El consentimiento formal se firma en la primera sesión.</p>

        <div className="space-y-8 text-neutral-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">¿Qué es y para qué sirve?</h2>
            <p>
              El consentimiento informado es el documento mediante el cual, tras recibir información clara y completa sobre el proceso terapéutico, manifiestas de forma libre y voluntaria tu acuerdo para iniciar la atención psicológica.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">Información que recibirás</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Formación y acreditación profesional del terapeuta.</li>
              <li>Enfoque terapéutico propuesto y alternativas existentes.</li>
              <li>Duración estimada y frecuencia de las sesiones.</li>
              <li>Honorarios y formas de pago.</li>
              <li>Política de cancelaciones.</li>
              <li>Límites de la confidencialidad y secreto profesional.</li>
              <li>Derecho a interrumpir el proceso en cualquier momento.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">Confidencialidad</h2>
            <p>
              Todo lo tratado en sesión es confidencial y está protegido por el secreto profesional. Excepciones: riesgo inminente para ti o terceros, obligación legal (por ejemplo, violencia, abuso o maltrato) y por solicitud judicial.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">Derechos del consultante</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Recibir un trato digno, respetuoso y libre de discriminación.</li>
              <li>Preguntar cualquier duda sobre el proceso.</li>
              <li>Solicitar cambio de terapeuta si lo consideras necesario.</li>
              <li>Terminar el proceso terapéutico en cualquier momento.</li>
              <li>Acceder a tu información clínica en los términos de la ley.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">Firma del documento</h2>
            <p>
              El consentimiento informado formal se presenta y firma durante la primera sesión, presencial o en línea. Si tienes dudas previas, puedes solicitarlo por WhatsApp al <strong>331 636 0640</strong>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}