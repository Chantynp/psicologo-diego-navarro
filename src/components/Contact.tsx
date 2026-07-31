'use client';

import { useState } from 'react';
import { useForm } from '@formspree/react';
import { Mail, Phone, MapPin, Clock, Send, Loader2, CheckCircle, AlertCircle, CalendarCheck } from 'lucide-react';

const FORM_ID = 'xykrqgzd';
const CALENDLY_URL = 'https://calendly.com/danavarro2040/30min';
const WHATSAPP_URL = 'https://wa.me/523316360640';
const EMAIL = 'danavarro2040@gmail.com';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    modalidad: 'online',
    motivo: '',
    mensaje: '',
  });
  const [state, handleSubmit, reset] = useForm(FORM_ID);
  const [errors, setErrors] = useState<Partial<typeof formData>>({});

  const validate = () => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio';
    if (!formData.email.trim()) newErrors.email = 'El email es obligatorio';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email inválido';
    if (!formData.telefono.trim()) newErrors.telefono = 'El teléfono es obligatorio';
    if (!formData.motivo.trim()) newErrors.motivo = 'Cuéntame brevemente el motivo';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!validate()) {
      e.preventDefault();
      return;
    }
    handleSubmit(e);
  };

  const onReset = () => {
    reset();
    setFormData({ nombre: '', email: '', telefono: '', modalidad: 'online', motivo: '', mensaje: '' });
    setErrors({});
  };

  const contactInfo = [
    { icon: Mail, title: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: Phone, title: 'WhatsApp / Llamadas', value: '331 636 0640', href: WHATSAPP_URL },
    { icon: CalendarCheck, title: 'Agenda online (Calendly)', value: 'Elige día y hora disponibles', href: CALENDLY_URL },
    { icon: MapPin, title: 'Consultorio Presencial', value: 'Xalapa, Veracruz', href: '#' },
    { icon: Clock, title: 'Horario', value: 'Lun-Vie: 9:00-20:00 / Sáb: 9:00-14:00', href: '#' },
  ];

  return (
    <section id="contacto" className="py-20 lg:py-32 bg-neutral-50" aria-labelledby="contact-title">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500" aria-hidden="true" />
              Contacto
            </div>
            <h2 id="contact-title" className="section-title">
              Agenda tu <span className="text-primary-700">primera sesión</span>
            </h2>
            <p className="section-subtitle">
              Elige tu horario directamente en mi calendario online, escríbeme por WhatsApp o rellena el formulario. Te responderé en menos de 24h.
            </p>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 group flex items-center justify-between gap-4 p-5 rounded-2xl bg-primary-700 text-white hover:bg-primary-800 transition-all duration-200 shadow-lg shadow-primary-700/20"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CalendarCheck className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold">Agendar cita en línea</p>
                  <p className="text-sm text-primary-100">Disponibilidad en tiempo real · Sin necesidad de llamar</p>
                </div>
              </div>
              <svg className="w-5 h-5 flex-shrink-0 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>

            <div className="mt-8 space-y-6" role="list" aria-label="Información de contacto">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-neutral-200 hover:border-primary-200 transition-colors" role="listitem">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center">
                    <item.icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-900">{item.title}</h3>
                    {item.href.startsWith('http') || item.href.startsWith('mailto') ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 text-sm font-medium mt-1 inline-flex items-center gap-1">
                        {item.value}
                        {(item.href.startsWith('http') || item.href.startsWith('mailto')) && (
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        )}
                      </a>
                    ) : (
                      <p className="text-neutral-600 text-sm mt-1">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-primary-50 border border-primary-100">
              <h3 className="font-semibold text-primary-900 mb-2 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" aria-hidden="true" />
                Nota importante
              </h3>
              <p className="text-sm text-primary-800">
                Este formulario no es para emergencias. Si estás en crisis o riesgo inminente, contacta al <strong>911</strong> o acude a urgencias. También puedes llamar a la línea de prevención del suicidio: <a href="tel:8009112000" className="underline">800 911 2000</a> (México, 24/7).
              </p>
            </div>
          </div>

          <div className="card">
            {state.succeeded ? (
              <div className="text-center py-12 animate-fade-in-up">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary-700" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">¡Mensaje enviado!</h3>
                <p className="text-neutral-600 mb-6">Te contactaré pronto para confirmar tu cita. Revisa tu WhatsApp o email.</p>
                <button
                  onClick={onReset}
                  className="btn-secondary"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5" noValidate>
                {state.errors && Object.keys(state.errors).length > 0 && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700" role="alert">
                    Hubo un problema al enviar. Verifica tus datos e intenta de nuevo.
                  </div>
                )}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="nombre" className="label-field">Nombre completo *</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                      className={`input-field ${errors.nombre ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                      placeholder="Tu nombre"
                      aria-invalid={errors.nombre ? 'true' : 'false'}
                      aria-describedby={errors.nombre ? 'nombre-error' : undefined}
                      disabled={state.submitting}
                    />
                    {errors.nombre && <p id="nombre-error" className="mt-1 text-sm text-red-600" role="alert">{errors.nombre}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="label-field">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className={`input-field ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                      placeholder="tu@email.com"
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      disabled={state.submitting}
                    />
                    {errors.email && <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="telefono" className="label-field">Teléfono / WhatsApp *</label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                      className={`input-field ${errors.telefono ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                      placeholder="Ej: 33 1234 5678"
                      aria-invalid={errors.telefono ? 'true' : 'false'}
                      aria-describedby={errors.telefono ? 'telefono-error' : undefined}
                      disabled={state.submitting}
                    />
                    {errors.telefono && <p id="telefono-error" className="mt-1 text-sm text-red-600" role="alert">{errors.telefono}</p>}
                  </div>
                  <div>
                    <label htmlFor="modalidad" className="label-field">Modalidad preferida</label>
                    <select
                      id="modalidad"
                      name="modalidad"
                      value={formData.modalidad}
                      onChange={(e) => setFormData({...formData, modalidad: e.target.value})}
                      className="input-field"
                      disabled={state.submitting}
                    >
                      <option value="online">Online (videollamada)</option>
                      <option value="presencial">Presencial en Xalapa</option>
                      <option value="indiferente">Sin preferencia / Lo que recomiendes</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="motivo" className="label-field">Motivo de consulta *</label>
                  <select
                    id="motivo"
                    name="motivo"
                    value={formData.motivo}
                    onChange={(e) => setFormData({...formData, motivo: e.target.value})}
                    className={`input-field ${errors.motivo ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                    aria-invalid={errors.motivo ? 'true' : 'false'}
                    aria-describedby={errors.motivo ? 'motivo-error' : undefined}
                    disabled={state.submitting}
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="ansiedad">Ansiedad / Estrés / Ataques de pánico</option>
                    <option value="depresion">Depresión / Bajo estado de ánimo</option>
                    <option value="autoestima">Autoestima / Autoconocimiento</option>
                    <option value="emociones">Regulación emocional / Ira</option>
                    <option value="transiciones">Transiciones vitales / Duelo</option>
                    <option value="habitos">Hábitos / Sueño / Procrastinación</option>
                    <option value="otro">Otro / No estoy seguro/a</option>
                  </select>
                  {errors.motivo && <p id="motivo-error" className="mt-1 text-sm text-red-600" role="alert">{errors.motivo}</p>}
                </div>

                <div>
                  <label htmlFor="mensaje" className="label-field">Mensaje adicional (opcional)</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                    rows={4}
                    className="input-field resize-none"
                    placeholder="Cuéntame brevemente qué te trae aquí, horarios preferidos, dudas..."
                    disabled={state.submitting}
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="btn-primary w-full sm:w-auto justify-center group"
                >
                  {state.submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" aria-hidden="true" />
                      Enviar solicitud
                    </>
                  )}
                </button>

                <p className="text-xs text-neutral-500 text-center">
                  Al enviar, aceptas que tus datos se usen solo para contactarte sobre terapia. Ver <a href="/privacidad" className="underline hover:text-primary-700">Política de privacidad</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}