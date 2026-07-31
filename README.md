# Psicólogo Diego Armando Navarro Nolasco - Web Profesional

Sitio web moderno, accesible y optimizado para SEO para promocionar los servicios de psicoterapia individual para adultos del Lic. Diego Armando Navarro Nolasco (Cédula 12309823).

## 🚀 Características

- **Next.js 14** con App Router y TypeScript
- **Tailwind CSS** para diseño responsive y moderno
- **Paleta verde/naturaleza** transmitiendo calma y profesionalismo
- **SEO optimizado**: Meta tags, Open Graph, Twitter Cards, JSON-LD (Schema.org)
- **Accesibilidad (WCAG 2.1 AA)**: Semántica HTML, contraste, navegación por teclado, ARIA
- **Formulario de contacto** con validación y envío a WhatsApp/email
- **Integración WhatsApp Business** para agendamiento directo
- **Rendimiento**: Imágenes optimizadas, fonts optimizadas, lazy loading
- **Despliegue en Vercel** (gratis, SSL automático, CDN global)

## 📋 Requisitos

- Node.js 18.17+
- npm / yarn / pnpm

## 🛠 Instalación local

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

## 📦 Scripts disponibles

```bash
npm run dev      # Servidor desarrollo
npm run build    # Build producción
npm run start    # Servidor producción
npm run lint     # Linting
```

## 🌐 Despliegue en Vercel (Gratis)

### Opción 1: Desde GitHub (Recomendado)

1. Sube este repo a GitHub
2. Entra a [vercel.com](https://vercel.com) e importa el repositorio
3. Vercel detecta Next.js automáticamente
4. Click **Deploy** - ¡Listo!

### Opción 2: CLI Vercel

```bash
npm i -g vercel
vercel login
vercel --prod
```

### Variables de entorno (opcional)

En Vercel > Settings > Environment Variables:

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `NEXT_PUBLIC_SITE_URL` | URL producción | `https://tu-dominio.vercel.app` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp con código país | `523316360640` |
| `NEXT_PUBLIC_EMAIL_CONTACT` | Email recepción formularios | `diego.navarro.psicologo@gmail.com` |
| `FORMSPREE_ENDPOINT` | Endpoint Formspree (si usas) | `https://formspree.io/f/xxxx` |

## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── globals.css      # Estilos globales + Tailwind
│   ├── layout.tsx       # Layout raíz + fonts + metadata
│   └── page.tsx         # Página principal (composición)
├── components/
│   ├── Hero.tsx         # Sección hero con CTA
│   ├── About.tsx        # Sobre mí + credenciales + valores
│   ├── Services.tsx     # Servicios + modalidades
│   ├── Approach.tsx     # Enfoques terapéuticos + proceso
│   ├── Contact.tsx      # Formulario + info contacto
│   ├── Footer.tsx       # Footer con links + legal
│   └── JsonLd.tsx       # Schema.org structured data
└── lib/                 # Utilidades (futuro)
```

## ✨ Personalización

### Colores (tailwind.config.ts)
```ts
primary: {
  500: '#22c55e',  // Verde principal
  700: '#15803d',  // Verde oscuro (botones)
}
```

### Contenido
Edita los componentes en `src/components/`:
- **Hero.tsx**: Título, subtítulo, foto
- **About.tsx**: Credenciales, valores, bio
- **Services.tsx**: Áreas de intervención
- **Approach.tsx**: Enfoques, pasos del proceso
- **Contact.tsx**: Info contacto, campos formulario
- **Footer.tsx**: Links, redes sociales, legal

### Foto del psicólogo
Reemplaza `public/doctor.jpg` (recomendado 480x580px, WebP/AVIF)

### Favicon e icons
Genera en [realfavicongenerator.net](https://realfavicongenerator.net/) y pon en `public/`:
- `favicon.ico`
- `icon.svg`
- `apple-touch-icon.png`
- `manifest.json`

## 📱 SEO Checklist

- [ ] Meta title/description únicos por página
- [ ] Open Graph + Twitter Cards
- [ ] JSON-LD (Physician, MedicalTherapy, OpeningHours)
- [ ] Sitemap.xml (auto con `next-sitemap`)
- [ ] Robots.txt
- [ ] Imagen OG (1200x630px) en `/public/og-image.jpg`
- [ ] Google Search Console + Analytics

## ♿ Accesibilidad

- Contraste AA/AAA en toda la paleta
- Navegación por teclado completa
- Labels en formularios
- Alt text en imágenes
- ARIA en elementos interactivos
- Skip links (añadir si necesario)
- Reducir movimiento (`prefers-reduced-motion`)

## 🔒 Privacidad y Legal

Páginas legales recomendadas (crear en `src/app/`):
- `/privacidad` - Aviso de privacidad (LFPDPPP México)
- `/terminos` - Términos y condiciones
- `/consentimiento` - Consentimiento informado terapia

## 📞 Contacto directo

- **WhatsApp**: https://wa.me/523316360640
- **Email**: diego.navarro.psicologo@gmail.com
- **Tel**: 331 636 0640

## 📄 Licencia

MIT License - Libre para uso personal y comercial.

---

**¿Necesitas ayuda?** Abre un issue o contacta por WhatsApp.