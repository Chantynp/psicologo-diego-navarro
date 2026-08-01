'use client';

import { FileText, Newspaper, ExternalLink } from 'lucide-react';

const publications = [
  {
    title: 'The medial prefrontal cortex as a proposed regulatory structure in the relationship between anxiety and perceived social support: a review',
    venue: 'BMC Psychology · 2025',
    doi: '10.1186/s40359-025-02449-x',
    url: 'https://doi.org/10.1186/s40359-025-02449-x',
  },
  {
    title: 'Electroencefalografía en reposo en el trastorno del espectro autista: revisión narrativa de patrones, conectividad y biomarcadores funcionales',
    venue: 'Revista eNeurobiología, UV · 2025',
    doi: '10.25009/eb.v16i41.2652',
    url: 'https://eneurobiologia.uv.mx/index.php/eneurobiologia/article/view/2539',
  },
];

const news = [
  {
    title: 'Apoyo social es vital para la salud mental de jóvenes',
    source: 'Universo · Sistema de noticias de la UV',
    description: 'Cobertura de su tesis doctoral sobre biomarcadores de ansiedad con EEG y Big Data.',
    url: 'https://www.uv.mx/prensa/general/apoyo-social-es-vital-para-la-salud-mental-de-jovenes/',
  },
  {
    title: 'Apoyo social es vital para la salud mental de jóvenes',
    source: 'La Silla Rota · Veracruz',
    description: 'Sueño, soledad percibida y ciclo ovárico alteran las ondas cerebrales, según su estudio.',
    url: 'https://lasillarota.com/veracruz/local/2026/2/21/apoyo-social-es-vital-para-la-salud-mental-de-jovenes-587852.html',
  },
];

export default function Research() {
  return (
    <section id="investigacion" className="py-20 lg:py-28 bg-neutral-50" aria-labelledby="research-title">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-500" aria-hidden="true" />
            Investigación
          </div>
          <h2 id="research-title" className="section-title">
            Lo que aprendí del <span className="text-primary-700">cerebro</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Mi tesis doctoral midió la ansiedad en las ondas cerebrales de jóvenes con EEG: el bienestar se construye en la relación y en el cuerpo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {publications.map((pub) => (
            <article key={pub.doi} className="card group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center group-hover:bg-primary-700 group-hover:text-white transition-all duration-300">
                  <FileText className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 leading-snug group-hover:text-primary-700 transition-colors">{pub.title}</h3>
                  <p className="text-sm text-neutral-500 mt-2">{pub.venue}</p>
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700"
                  >
                    Ver publicación <span className="text-neutral-400 font-normal">({pub.doi})</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {news.map((item) => (
            <article key={item.url} className="card group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center group-hover:bg-primary-700 group-hover:text-white transition-all duration-300">
                  <Newspaper className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 group-hover:text-primary-700 transition-colors">{item.title}</h3>
                  <p className="text-sm text-neutral-500 mt-1">{item.source}</p>
                  <p className="text-sm text-neutral-600 mt-2">{item.description}</p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700"
                  >
                    Leer nota
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}