'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    modalidad: 'online',
    motivo: '',
    mensaje: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus('submitting');
    
    // Simular envío - en producción conectar con Formspree, Netlify Forms, o backend propio
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Aquí iría la llamada real al endpoint
    // const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
    
    setStatus('success');
    setFormData({ nombre: '', email: '', telefono: '', modalidad: 'online', motivo: '', mensaje: '' });
  };

  const contactInfo = [
    { icon: Mail, title: 'Email', value: 'diego.navarro.psicologo@gmail.com', href: 'mailto:diego.navarro.psicologo@gmail.com' },
    { icon: Phone, title: 'WhatsApp / Llamadas', value: '331 636 0640', href: 'https://wa.me/523316360640' },
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
              Rellena el formulario o escríbeme directo por WhatsApp. Te responderé en menos de 24h para concertar cita.
            </p>

            <div className="mt-10 space-y-6" role="list" aria-label="Información de contacto">
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
            {status === 'success' ? (
              <div className="text-center py-12 animate-fade-in-up">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary-700" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">¡Mensaje enviado!</h3>
                <p className="text-neutral-600 mb-6">Te contactaré pronto para confirmar tu cita. Revisa tu WhatsApp o email.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="btn-secondary"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
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
                      disabled={status === 'submitting'}
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
                      disabled={status === 'submitting'}
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
                      disabled={status === 'submitting'}
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
                      disabled={status === 'submitting'}
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
                    disabled={status === 'submitting'}
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
                    disabled={status === 'submitting'}
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="btn-primary w-full sm:w-auto justify-center group"
                >
                  {status === 'submitting' ? (
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