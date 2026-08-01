import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aviso de Privacidad | Diego Armando Navarro Nolasco - Psicólogo',
  description: 'Aviso de privacidad conforme a la normativa federal mexicana vigente en materia de protección de datos personales.',
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
              Lic. Diego Armando Navarro Nolasco, Licenciado en Psicología con formación doctoral en Investigaciones Cerebrales (Universidad Veracruzana, grado en proceso), Cédula profesional 12309823, con consultorio presencial en Xalapa, Veracruz, México.
            </p>
            <p>
              Contacto: WhatsApp 331 636 0640 · danavarro2040@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">2. Datos personales que recabamos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Datos de identificación y contacto: nombre, teléfono, correo electrónico.</li>
              <li>Datos de salud y psicológicos: motivo de consulta, historia clínica, evolución del tratamiento (confidenciales).</li>
              <li>Datos de facturación, únicamente si el servicio se factura.</li>
              <li>Datos de agendamiento: horarios y preferencia de modalidad al usar Calendly.</li>
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
              Los datos personales <strong>sensibles</strong> (salud, información psicológica) solo se tratarán con tu consentimiento expreso, conforme a la normativa federal vigente en materia de protección de datos personales en posesión de particulares (México). Este aviso requiere revisión jurídica especializada antes de considerarse documento definitivo.
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
              Puedes ejercer tus derechos de <strong>A</strong>cceso, <strong>R</strong>ectificación, <strong>C</strong>ancelación u <strong>O</strong>posición (ARCO) enviando tu solicitud a danavarro2040@gmail.com, indicando tu nombre y la razón de tu solicitud. Te responderemos en un máximo de 15 días hábiles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">6. Cookies y proveedores tecnológicos</h2>
            <p>
              Este sitio web no utiliza cookies de rastreo. Al agendar citas a través de <strong>Calendly</strong> o enviar el formulario de contacto (gestionado por <strong>Formspree</strong>), estos servicios actúan como <strong>encargados del tratamiento</strong>: reciben y almacenan tus datos para operar sus plataformas y pueden implicar transferencias a servidores fuera de México. Tus datos se utilizan exclusivamente para responder a tu solicitud o gestionar tu cita y no se comparten con otros terceros, salvo obligación legal.
            </p>
            <p className="mt-3">
              Los datos capturados por el sitio web (formulario y agendamiento) se mantienen <strong>separados del expediente clínico</strong>, que se integra únicamente a partir de la primera sesión.
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