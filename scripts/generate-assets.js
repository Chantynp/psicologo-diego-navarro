const sharp = require('sharp');
const path = require('path');

const ROOT = process.cwd();
const src = path.join(ROOT, 'public', 'doctor.jpg');

async function main() {
  const img = sharp(src);
  const meta = await img.metadata();
  console.log('Source:', meta.width + 'x' + meta.height);

  await img
    .resize(480, 580, { fit: 'cover', position: 'centre' })
    .toFile(path.join(ROOT, 'public', 'hero-doctor.jpg'));
  console.log('hero-doctor.jpg OK');

  await sharp(src)
    .resize(1200, 630, { fit: 'cover', position: 'centre' })
    .toFile(path.join(ROOT, 'public', 'og-image.jpg'));
  console.log('og-image.jpg OK');

  for (const size of [192, 512]) {
    const circle = Buffer.from(
      `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg"><circle cx="${size / 2}" cy="${size / 2}" r="${size * 0.44}" fill="#16a34a"/><circle cx="${size / 2}" cy="${size / 2}" r="${size * 0.26}" fill="#fff"/></svg>`
    );
    await sharp(circle)
      .png()
      .toFile(path.join(ROOT, 'public', `icon-${size}.png`));
    console.log(`icon-${size}.png OK`);
  }

  await sharp(src)
    .resize(180, 180, { fit: 'cover' })
    .png()
    .toFile(path.join(ROOT, 'public', 'apple-touch-icon.png'));
  console.log('apple-touch-icon.png OK');

  await sharp(src)
    .resize(64, 64, { fit: 'cover' })
    .png()
    .toFile(path.join(ROOT, 'public', 'favicon-64.png'));
  console.log('favicon-64.png OK');
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});