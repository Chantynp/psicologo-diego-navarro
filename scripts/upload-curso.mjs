/**
 * Sube el ZIP del curso al almacenamiento privado de Vercel Blob.
 *
 * Uso (desde la raíz del proyecto, en PowerShell):
 *   $env:BLOB_READ_WRITE_TOKEN = "vercel_blob_rw_XXXX"
 *   node scripts/upload-curso.mjs "C:\ruta\al\curso.zip"
 *
 * El token se obtiene en Vercel: Project > Storage > (tu Blob store) > pestaña
 * "Blob" > Read-write token. También se usa automáticamente en produccion
 * (OIDC), este script solo es para la carga inicial.
 */
import { put } from '@vercel/blob';
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import path from 'node:path';

const BLOB_PATHNAME = 'material/curso-investigacion-medica-ia.zip';

async function main() {
  const input = process.argv[2];

  if (!input) {
    console.error('Uso: node scripts/upload-curso.mjs "C:\\ruta\\al\\archivo.zip"');
    process.exit(1);
  }

  const filePath = path.resolve(input);
  const fileStat = await stat(filePath).catch(() => null);

  if (!fileStat || !fileStat.isFile()) {
    console.error(`No se encontro el archivo: ${filePath}`);
    process.exit(1);
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error('Falta la variable de entorno BLOB_READ_WRITE_TOKEN.');
    process.exit(1);
  }

  const sizeMb = (fileStat.size / (1024 * 1024)).toFixed(1);
  console.log(`Subiendo ${filePath} (${sizeMb} MB) como ${BLOB_PATHNAME}...`);

  let lastPercent = 0;

  const blob = await put(BLOB_PATHNAME, createReadStream(filePath), {
    access: 'private',
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: 'application/zip',
    multipart: true,
    onUploadProgress: ({ percentage }) => {
      const percent = Math.round(percentage);
      if (percent >= lastPercent + 10) {
        lastPercent = percent;
        process.stdout.write(`  ${percent}%\n`);
      }
    },
  });

  console.log('\nListo.');
  console.log(`  pathname: ${blob.pathname}`);
  console.log(`  bytes:    ${blob.size}`);
  console.log('\nRecuerda: la contrasena de descarga se define en Vercel como CURSO_PASSWORD.');
}

main().catch((error) => {
  console.error('Error al subir:', error?.message ?? error);
  process.exit(1);
});
