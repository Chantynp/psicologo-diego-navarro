import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://psicologo-diego-navarro.vercel.app'),
  title: 'Diego Armando Navarro Nolasco | Psicólogo y Psicoterapia Gestalt | Xalapa y en línea',
  description: 'Psicoterapia Gestalt individual para adultos, presencial en Xalapa y en línea. Psicólogo con formación doctoral en Investigaciones Cerebrales (UV), cédula 12309823.',
  keywords: ['psicólogo', 'terapia gestalt', 'psicología', 'Xalapa', 'terapia online', 'salud mental', 'ansiedad', 'depresión', 'neurociencias', 'Diego Navarro', 'Navarro Nolasco'],
  authors: [{ name: 'Diego Armando Navarro Nolasco' }],
  creator: 'Diego Armando Navarro Nolasco',
  publisher: 'Diego Armando Navarro Nolasco',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://psicologo-diego-navarro.vercel.app',
    title: 'Diego Armando Navarro Nolasco | Psicólogo y Psicoterapia Gestalt',
    description: 'Psicoterapia Gestalt para adultos. Psicólogo con formación doctoral en Investigaciones Cerebrales (UV). Presencial en Xalapa y en línea. Cédula 12309823.',
    siteName: 'Diego Armando Navarro Nolasco - Psicólogo',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Diego Armando Navarro Nolasco - Psicólogo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diego Armando Navarro Nolasco | Psicólogo',
    description: 'Terapia Gestalt para adultos. Presencial en Xalapa y online.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'zDF_N7L0rcPb9txrvLKTqDdMftRTrHxyl0m-r7Pm7ss',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#030712' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon-64.png" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}