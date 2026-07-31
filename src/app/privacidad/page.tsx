import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aviso de Privacidad | Diego Armando Navarro Nolasco - PsicÃ³logo',
  description: 'Aviso de privacidad conforme a la Ley Federal de ProtecciÃ³n de Datos Personales en PosesiÃ³n de los Particulares (MÃ©xico).',
};

export default function PrivacidadPage() {
  return (
    <main className="pt-32 pb-20 bg-white min-h-screen">
      <div className="section-container max-w-3xl">
        <Link href="/" className="text-primary-700 hover:text-primary-800 text-sm font-medium inline-flex items-center gap-1 mb-8">
          â† Volver al inicio
        </Link>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-4">Aviso de Privacidad</h1>
        <p className="text-sm text-neutral-500 mb-10">Ãšltima actualizaciÃ³n: Julio 2026</p>

        <div className="prose prose-neutral max-w-none space-y-8 text-neutral-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">1. Responsable del tratamiento</h2>
            <p>
              Lic. Diego Armando Navarro Nolasco, Licenciado en PsicologÃ­a, CÃ©dula profesional 12309823, con consultorio presencial en Xalapa, Veracruz, MÃ©xico.
            </p>
            <p>
              Contacto: WhatsApp 331 636 0640 Â· danavarro2040@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">2. Datos personales que recabamos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Datos de identificaciÃ³n y contacto: nombre, telÃ©fono, correo electrÃ³nico.</li>
              <li>Datos de salud y psicolÃ³gicos: motivo de consulta, historia clÃ­nica, evoluciÃ³n del tratamiento (confidenciales).</li>
              <li>Datos de facturaciÃ³n si el servicio se factura.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">3. Finalidades del tratamiento</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Atender solicitudes de informaciÃ³n y agendar citas.</li>
              <li>Prestar servicios de evaluaciÃ³n, diagnÃ³stico e intervenciÃ³n psicolÃ³gica.</li>
              <li>Dar seguimiento clÃ­nico a tu proceso terapÃ©utico.</li>
              <li>Emitir comprobantes de pago si aplica.</li>
            </ul>
            <p className="mt-3">
              Los datos personales <strong>sensibles</strong> (salud, informaciÃ³n psicolÃ³gica) solo se tratarÃ¡n con tu consentimiento expreso, conforme al artÃ­culo 9 de la LFPDPPP.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">4. Confidencialidad y secreto profesional</h2>
            <p>
              La informaciÃ³n de las sesiones estÃ¡ protegida por el <strong>secreto profesional</strong> (CÃ³digo Ã‰tico del PsicÃ³logo, Consejo Nacional para la EnseÃ±anza e InvestigaciÃ³n en PsicologÃ­a). Solo se revelarÃ¡ informaciÃ³n con tu autorizaciÃ³n escrita, o cuando exista obligaciÃ³n legal o riesgo para tu integridad o la de terceros.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">5. Derechos ARCO</h2>
            <p>
              Puedes ejercer tus derechos de <strong>A</strong>cceso, <strong>R</strong>ectificaciÃ³n, <strong>C</strong>ancelaciÃ³n u <strong>O</strong>posiciÃ³n (ARCO) enviando tu solicitud a danavarro2040@gmail.com, indicando tu nombre y la razÃ³n de tu solicitud. Te responderemos en un mÃ¡ximo de 15 dÃ­as hÃ¡biles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">6. Uso de cookies y datos del sitio web</h2>
            <p>
              Este sitio web no utiliza cookies de rastreo de terceros. Los datos enviados a travÃ©s del formulario de contacto se utilizan exclusivamente para responder a tu solicitud y no se comparten con terceros, salvo obligaciÃ³n legal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">7. Cambios al aviso</h2>
            <p>
              Cualquier modificaciÃ³n a este aviso se publicarÃ¡ en esta misma pÃ¡gina. Recomendamos revisar periÃ³dicamente esta secciÃ³n.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}