# PsicÃ³logo Diego Armando Navarro Nolasco - Web Profesional

Sitio web moderno, accesible y optimizado para SEO para promocionar los servicios de psicoterapia individual para adultos del Lic. Diego Armando Navarro Nolasco (CÃ©dula 12309823).

## ðŸš€ CaracterÃ­sticas

- **Next.js 14** con App Router y TypeScript
- **Tailwind CSS** para diseÃ±o responsive y moderno
- **Paleta verde/naturaleza** transmitiendo calma y profesionalismo
- **SEO optimizado**: Meta tags, Open Graph, Twitter Cards, JSON-LD (Schema.org)
- **Accesibilidad (WCAG 2.1 AA)**: SemÃ¡ntica HTML, contraste, navegaciÃ³n por teclado, ARIA
- **Formulario de contacto** con validaciÃ³n y envÃ­o a WhatsApp/email
- **IntegraciÃ³n WhatsApp Business** para agendamiento directo
- **Rendimiento**: ImÃ¡genes optimizadas, fonts optimizadas, lazy loading
- **Despliegue en Vercel** (gratis, SSL automÃ¡tico, CDN global)

## ðŸ“‹ Requisitos

- Node.js 18.17+
- npm / yarn / pnpm

## ðŸ›  InstalaciÃ³n local

```bash
# Clonar repositorio
git clone https://github.com/TU_USUARIO/psicologo-diego-navarro.git
cd psicologo-diego-navarro

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

## ðŸ“¦ Scripts disponibles

```bash
npm run dev      # Servidor desarrollo
npm run build    # Build producciÃ³n
npm run start    # Servidor producciÃ³n
npm run lint     # Linting
```

## ðŸŒ Despliegue en Vercel (Gratis)

### OpciÃ³n 1: Desde GitHub (Recomendado)

1. Sube este repo a GitHub
2. Entra a [vercel.com](https://vercel.com) e importa el repositorio
3. Vercel detecta Next.js automÃ¡ticamente
4. Click **Deploy** - Â¡Listo!

### OpciÃ³n 2: CLI Vercel

```bash
npm i -g vercel
vercel login
vercel --prod
```

### Variables de entorno (opcional)

En Vercel > Settings > Environment Variables:

| Variable | DescripciÃ³n | Ejemplo |
|----------|-------------|---------|
| `NEXT_PUBLIC_SITE_URL` | URL producciÃ³n | `https://tu-dominio.vercel.app` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp con cÃ³digo paÃ­s | `523316360640` |
| `NEXT_PUBLIC_EMAIL_CONTACT` | Email recepciÃ³n formularios | `danavarro2040@gmail.com` |
| `FORMSPREE_ENDPOINT` | Endpoint Formspree (si usas) | `https://formspree.io/f/xxxx` |

## ðŸ“ Estructura del proyecto

```
src/
â”œâ”€â”€ app/
â”‚   â”œâ”€â”€ globals.css      # Estilos globales + Tailwind
â”‚   â”œâ”€â”€ layout.tsx       # Layout raÃ­z + fonts + metadata
â”‚   â””â”€â”€ page.tsx         # PÃ¡gina principal (composiciÃ³n)
â”œâ”€â”€ components/
â”‚   â”œâ”€â”€ Hero.tsx         # SecciÃ³n hero con CTA
â”‚   â”œâ”€â”€ About.tsx        # Sobre mÃ­ + credenciales + valores
â”‚   â”œâ”€â”€ Services.tsx     # Servicios + modalidades
â”‚   â”œâ”€â”€ Approach.tsx     # Enfoques terapÃ©uticos + proceso
â”‚   â”œâ”€â”€ Contact.tsx      # Formulario + info contacto
â”‚   â”œâ”€â”€ Footer.tsx       # Footer con links + legal
â”‚   â””â”€â”€ JsonLd.tsx       # Schema.org structured data
â””â”€â”€ lib/                 # Utilidades (futuro)
```

## âœ¨ PersonalizaciÃ³n

### Colores (tailwind.config.ts)
```ts
primary: {
  500: '#22c55e',  // Verde principal
  700: '#15803d',  // Verde oscuro (botones)
}
```

### Contenido
Edita los componentes en `src/components/`:
- **Hero.tsx**: TÃ­tulo, subtÃ­tulo, foto
- **About.tsx**: Credenciales, valores, bio
- **Services.tsx**: Ãreas de intervenciÃ³n
- **Approach.tsx**: Enfoques, pasos del proceso
- **Contact.tsx**: Info contacto, campos formulario
- **Footer.tsx**: Links, redes sociales, legal

### Foto del psicÃ³logo
Reemplaza `public/doctor.jpg` (recomendado 480x580px, WebP/AVIF)

### Favicon e icons
Genera en [realfavicongenerator.net](https://realfavicongenerator.net/) y pon en `public/`:
- `favicon.ico`
- `icon.svg`
- `apple-touch-icon.png`
- `manifest.json`

## ðŸ“± SEO Checklist

- [ ] Meta title/description Ãºnicos por pÃ¡gina
- [ ] Open Graph + Twitter Cards
- [ ] JSON-LD (Physician, MedicalTherapy, OpeningHours)
- [ ] Sitemap.xml (auto con `next-sitemap`)
- [ ] Robots.txt
- [ ] Imagen OG (1200x630px) en `/public/og-image.jpg`
- [ ] Google Search Console + Analytics

## â™¿ Accesibilidad

- Contraste AA/AAA en toda la paleta
- NavegaciÃ³n por teclado completa
- Labels en formularios
- Alt text en imÃ¡genes
- ARIA en elementos interactivos
- Skip links (aÃ±adir si necesario)
- Reducir movimiento (`prefers-reduced-motion`)

## ðŸ”’ Privacidad y Legal

PÃ¡ginas legales recomendadas (crear en `src/app/`):
- `/privacidad` - Aviso de privacidad (LFPDPPP MÃ©xico)
- `/terminos` - TÃ©rminos y condiciones
- `/consentimiento` - Consentimiento informado terapia

## ðŸ“ž Contacto directo

- **WhatsApp**: https://wa.me/523316360640
- **Email**: danavarro2040@gmail.com
- **Tel**: 331 636 0640

## ðŸ“„ Licencia

MIT License - Libre para uso personal y comercial.

---

**Â¿Necesitas ayuda?** Abre un issue o contacta por WhatsApp.