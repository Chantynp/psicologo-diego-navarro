'use client';

import { useEffect, useRef, useState } from 'react';
import { Download, FileArchive, Lock, X, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';

type Status = 'idle' | 'loading' | 'error' | 'ready';

export default function CourseDownload() {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setStatus('idle');
      setMessage('');
      setPassword('');
      window.setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/curso', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = (await response.json()) as { url?: string; error?: string; expiresIn?: number };

      if (!response.ok || !data.url) {
        setStatus('error');
        setMessage(data.error ?? 'No fue posible verificar la contraseña.');
        return;
      }

      setDownloadUrl(data.url);
      setStatus('ready');
      setMessage(`Enlace temporal válido por ${data.expiresIn ?? 60} segundos.`);
      window.location.href = data.url;
    } catch {
      setStatus('error');
      setMessage('No pudimos contactarte. Revisa tu conexión e inténtalo de nuevo.');
    }
  }

  return (
    <>
      <div className="mt-10 rounded-2xl border border-primary-100 bg-primary-50 p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-700 text-white flex items-center justify-center">
            <FileArchive className="w-6 h-6" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-neutral-900">Material del curso</h3>
            <p className="text-sm text-neutral-600 mt-1">
              Investigación médica apoyada por IA · Archivo ZIP · 171 MB
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="btn-primary justify-center w-full sm:w-auto"
          >
            <Download className="w-5 h-5" aria-hidden="true" />
            Descargar material
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <button
            type="button"
            aria-label="Cerrar"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-neutral-950/70 backdrop-blur-sm"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="curso-modal-title"
            className="relative w-full max-w-md rounded-2xl bg-white p-6 sm:p-8 shadow-2xl animate-fade-in"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
              aria-label="Cerrar ventana"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>

            <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center mb-4">
              <Lock className="w-6 h-6" aria-hidden="true" />
            </div>

            <h2 id="curso-modal-title" className="text-xl font-display font-bold text-neutral-900">
              Descarga protegida
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Este material es para participantes del curso. Introduce la contraseña que
              recibiste al inscribirte.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="curso-password" className="label-field">
                  Contraseña
                </label>
                <input
                  ref={inputRef}
                  type="password"
                  id="curso-password"
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className={`input-field ${status === 'error' ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                  autoComplete="off"
                  required
                  disabled={status === 'loading'}
                  aria-invalid={status === 'error' ? 'true' : 'false'}
                  aria-describedby={message ? 'curso-feedback' : undefined}
                />
              </div>

              {message && (
                <p
                  id="curso-feedback"
                  role="status"
                  className={`flex items-start gap-2 text-sm ${
                    status === 'error' ? 'text-red-600' : 'text-primary-700'
                  }`}
                >
                  {status === 'error' ? (
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  ) : (
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  )}
                  <span>{message}</span>
                </p>
              )}

              <button type="submit" disabled={status === 'loading'} className="btn-primary w-full justify-center">
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                    Verificando...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" aria-hidden="true" />
                    Desbloquear y descargar
                  </>
                )}
              </button>

              {status === 'ready' && downloadUrl && (
                <a
                  href={downloadUrl}
                  className="block text-center text-sm font-medium text-primary-700 hover:text-primary-800 underline"
                >
                  Si la descarga no inició, pulsa aquí
                </a>
              )}

              <p className="text-xs text-neutral-500 text-center">
                ¿No tienes la contraseña?{' '}
                <a
                  href="https://wa.me/523316360640?text=Hola%20Diego%2C%20necesito%20la%20contrase%C3%B1a%20para%20descargar%20el%20material%20del%20curso."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary-700"
                >
                  Escríbeme por WhatsApp
                </a>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
