# Psicólogo Diego Armando Navarro Nolasco - Web Profesional

Sitio web moderno, accesible y optimizado para SEO para los servicios de **terapia Gestalt individual para adultos** del psicólogo Diego Armando Navarro Nolasco (Dr. en Investigaciones Cerebrales, cédula 12309823).

## 🚀 Características

- **Next.js 16** con App Router y TypeScript (Turbopack)
- **Tailwind CSS** para diseño responsive y moderno
- **Paleta verde/naturaleza** transmitiendo calma y profesionalismo
- **Terapia Gestalt**: darse cuenta, aquí y ahora, cuerpo y contacto
- **Sección de investigación**: publicaciones reales (BMC Psychology, eNeurobiología) y noticias de la UV
- **SEO optimizado**: meta tags, Open Graph, Twitter Cards, JSON-LD (Schema.org), sitemap, verificación de Google Search Console
- **Accesibilidad (WCAG 2.1 AA)**: semántica HTML, contraste, navegación por teclado, ARIA
- **Formulario de contacto** conectado a Formspree (`@formspree/react`)
- **Agendamiento con Calendly** y botón directo de WhatsApp
- **Despliegue en Vercel** (gratis, SSL automático, CDN global)

## 📋 Requisitos

- Node.js 20.9+ (probado con Node 24)
- npm / yarn / pnpm

## 🛠 Instalación local

```bash
git clone https://github.com/Chantynp/psicologo-diego-navarro.git
cd psicologo-diego-navarro

npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

## 📦 Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Servidor de producción
```

## 🌐 Despliegue en Vercel (Gratis)

1. Sube el repo a GitHub (ya está en `github.com/Chantynp/psicologo-diego-navarro`)
2. Entra a [vercel.com](https://vercel.com) → **Add New → Project**
3. Importa el repositorio (Vercel detecta Next.js automáticamente)
4. **Deploy** — la página quedará en `https://psicologo-diego-navarro.vercel.app`

## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── globals.css          # Estilos globales + Tailwind
│   ├── layout.tsx           # Layout raíz + fonts + metadata + verificación Google
│   ├── page.tsx             # Página principal (composición)
│   ├── sitemap.ts           # Sitemap XML
│   ├── privacidad/page.tsx  # Aviso de privacidad (LFPDPPP)
│   ├── terminos/page.tsx    # Términos y condiciones
│   └── consentimiento/      # Consentimiento informado
├── components/
│   ├── Hero.tsx             # Hero: identidad Gestalt + CTAs
│   ├── About.tsx            # Trayectoria (Lic. UGMN + Dr. UV) + pilares
│   ├── Services.tsx         # 4 áreas de acompañamiento
│   ├── Approach.tsx         # Principios de terapia Gestalt + proceso
│   ├── Research.tsx         # Publicaciones y noticias reales
│   ├── Contact.tsx          # Formulario Formspree + Calendly + WhatsApp
│   ├── Footer.tsx           # Footer con links, LinkedIn, contacto
│   └── JsonLd.tsx           # Schema.org structured data
└── public/                  # Imágenes, favicons, manifest
```

## 🔑 Datos de integración

| Servicio | Valor |
|----------|-------|
| WhatsApp | `https://wa.me/523316360640` |
| Calendly | `https://calendly.com/danavarro2040/30min` |
| Formspree | `https://formspree.io/f/xykrqgzd` (formulario) |
| Email | `danavarro2040@gmail.com` |
| LinkedIn | `https://www.linkedin.com/in/diego-navarro-a4a56207` |
| Verificación Google | `zDF_N7L0rcPb9txrvLKTqDdMftRTrHxyl0m-r7Pm7ss` |

## ✨ Personalización

### Colores (tailwind.config.ts)
Paleta actual: verdes primarios (`primary.700: #15803d`). Otras opciones: azul serenidad, teal/salvia, terracota cálido, morado introspección.

### Foto del psicólogo
Reemplaza `public/hero-doctor.jpg` (recomendado 480x580px). Regenera assets con:

```bash
node scripts/generate-assets.js
```

## 📱 SEO Checklist

- [x] Meta title/description únicos por página
- [x] Open Graph + Twitter Cards
- [x] JSON-LD (Physician, MedicalTherapy, OpeningHours)
- [x] Sitemap.xml + robots.txt
- [x] Verificación de Google Search Console
- [ ] Configurar dominio propio en Vercel (opcional)
- [ ] Enviar sitemap en Search Console

## 🔒 Privacidad y Legal

- `/privacidad` — Aviso de privacidad (LFPDPPP México)
- `/terminos` — Términos y condiciones
- `/consentimiento` — Consentimiento informado de terapia

---

**¿Necesitas ayuda?** Abre un issue o contacta por WhatsApp.
