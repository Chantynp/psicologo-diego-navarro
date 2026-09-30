import { NextResponse } from 'next/server';
import { timingSafeEqual } from 'node:crypto';
import { issueSignedToken, presignUrl } from '@vercel/blob';

export const runtime = 'nodejs';

const BLOB_PATHNAME = 'Investigación médica con IA y GPC.zip';
const DOWNLOAD_FILENAME = 'Investigación médica con IA y GPC.zip';
const URL_TTL_MS = 60_000;
const MAX_ATTEMPTS = 5;
const ATTEMPT_WINDOW_MS = 10 * 60_000;

type Attempt = { count: number; resetAt: number };

const globalForRateLimit = globalThis as unknown as {
  __downloadAttempts?: Map<string, Attempt>;
};
const attempts = globalForRateLimit.__downloadAttempts ?? new Map<string, Attempt>();
globalForRateLimit.__downloadAttempts = attempts;

function getClientKey(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for') ?? '';
  const ip = forwarded.split(',')[0]?.trim();
  return ip && ip.length > 0 ? ip : 'desconocido';
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const entry = attempts.get(key);

  if (!entry || entry.resetAt <= now) {
    attempts.set(key, { count: 1, resetAt: now + ATTEMPT_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_ATTEMPTS;
}

function clearAttempts(key: string): void {
  attempts.delete(key);
}

function passwordMatches(candidate: string, expected: string): boolean {
  const a = Buffer.from(candidate);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export async function POST(request: Request) {
  const key = getClientKey(request);

  if (isRateLimited(key)) {
    return NextResponse.json(
      { error: 'Demasiados intentos. Espera unos minutos e inténtalo de nuevo.' },
      { status: 429 },
    );
  }

  const expected = process.env.CURSO_PASSWORD;

  if (!expected) {
    return NextResponse.json(
      { error: 'La descarga no está disponible en este momento.' },
      { status: 503 },
    );
  }

  let candidate = '';
  try {
    const body = (await request.json()) as { password?: unknown };
    candidate = typeof body.password === 'string' ? body.password : '';
  } catch {
    candidate = '';
  }

  if (!passwordMatches(candidate, expected)) {
    return NextResponse.json({ error: 'Contraseña incorrecta.' }, { status: 401 });
  }

  try {
    const validUntil = Date.now() + URL_TTL_MS;

    // El alcance del token se pide como `*` a proposito: el SDK decodifica el
    // `delegationToken` con `atob()` (latin1) y aborta si el pathname lleva
    // acentos o espacios. Con `*` esa comparacion se omite, mientras que la
    // URL firmada sigue limitada a BLOB_PATHNAME y caduca en 60 s.
    const token = await issueSignedToken({
      pathname: '*',
      operations: ['get'],
      validUntil,
    });
    const { presignedUrl } = await presignUrl(token, {
      pathname: BLOB_PATHNAME,
      operation: 'get',
      access: 'private',
      validUntil,
    });

    clearAttempts(key);

    return NextResponse.json({
      url: presignedUrl,
      filename: DOWNLOAD_FILENAME,
      expiresIn: Math.floor(URL_TTL_MS / 1000),
    });
  } catch (error) {
    console.error('Error generando enlace de descarga:', error);
    return NextResponse.json(
      { error: 'No fue posible generar el enlace de descarga. Inténtalo de nuevo.' },
      { status: 500 },
    );
  }
}
