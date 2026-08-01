const sharp = require('sharp');
const path = require('path');

const ROOT = process.cwd();
const SRC = path.join(ROOT, 'public', 'hero-full.webp');

async function generateOgImage() {
  const photo = await sharp(SRC)
    .resize(360, 520, { fit: 'cover', position: 'north' })
    .png()
    .toBuffer();

  const roundedPhoto = await sharp(photo)
    .resize(360, 520)
    .composite([
      {
        input: Buffer.from(
          `<svg width="360" height="520" xmlns="http://www.w3.org/2000/svg"><rect width="360" height="520" rx="24" fill="#ffffff00"/></svg>`
        ),
        blend: 'dest-in',
      },
    ])
    .png()
    .toBuffer();

  const svg = Buffer.from(
    `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#2e1065"/>
          <stop offset="100%" stop-color="#6d28d9"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#bg)"/>
      <circle cx="100" cy="80" r="180" fill="#ffffff" opacity="0.06"/>
      <circle cx="1150" cy="620" r="240" fill="#ffffff" opacity="0.06"/>
      <text x="70" y="130" font-family="Arial" font-size="24" fill="#c4b5fd" font-weight="bold" letter-spacing="4">PSICÓLOGO · TERAPIA GESTALT</text>
      <text x="70" y="220" font-family="Arial" font-size="52" fill="#ffffff" font-weight="bold">Diego Armando</text>
      <text x="70" y="290" font-family="Arial" font-size="52" fill="#ffffff" font-weight="bold">Navarro Nolasco</text>
      <text x="70" y="350" font-family="Arial" font-size="24" fill="#ddd6fe">Psicólogo y Dr. en Investigaciones Cerebrales (UV)</text>
      <text x="70" y="400" font-family="Arial" font-size="22" fill="#a78bfa">Cédula profesional 12309823</text>
      <rect x="70" y="440" width="330" height="56" rx="28" fill="#ffffff"/>
      <text x="235" y="477" font-family="Arial" font-size="22" fill="#4c1d95" font-weight="bold" text-anchor="middle">Agenda tu primera sesión</text>
    </svg>`
  );

  await sharp(svg)
    .composite([{ input: roundedPhoto, left: 790, top: 55 }])
    .jpeg({ quality: 88 })
    .toFile(path.join(ROOT, 'public', 'og-image.jpg'));
  console.log('og-image.jpg OK');
}

async function generateIcons() {
  for (const size of [192, 512]) {
    const circle = Buffer.from(
      `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg"><circle cx="${size / 2}" cy="${size / 2}" r="${size * 0.44}" fill="#6d28d9"/><circle cx="${size / 2}" cy="${size / 2}" r="${size * 0.26}" fill="#fff"/></svg>`
    );
    await sharp(circle)
      .png()
      .toFile(path.join(ROOT, 'public', `icon-${size}.png`));
    console.log(`icon-${size}.png OK`);
  }

  const apple = Buffer.from(
    `<svg width="180" height="180" xmlns="http://www.w3.org/2000/svg"><rect width="180" height="180" rx="40" fill="#6d28d9"/><circle cx="90" cy="90" r="36" fill="#fff"/></svg>`
  );
  await sharp(apple)
    .png()
    .toFile(path.join(ROOT, 'public', 'apple-touch-icon.png'));
  console.log('apple-touch-icon.png OK');

  await sharp(Buffer.from(`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="30" fill="#6d28d9"/><circle cx="32" cy="32" r="16" fill="#fff"/></svg>`))
    .png()
    .toFile(path.join(ROOT, 'public', 'favicon-64.png'));
  console.log('favicon-64.png OK');
}

async function main() {
  await generateOgImage();
  await generateIcons();
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
