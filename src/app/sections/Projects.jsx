// Composant SectionFade simulé
const SectionFade = ({ children }) => (
  <div className="animate-fade-in">{children}</div>
);

export default function Projects() {
  const projects = [
    {
      title: "DMS - Dispute Management System",
      desc: "Plateforme bancaire avancée pour la gestion des litiges Visa/Mastercard : workflows chargeback complets, arbitrage, calcul automatisé des délais réglementaires, conformité PCI-DSS, RBAC, audit trail, sécurité multilayer.",
      tech: ["Spring Boot", "Angular 17", "Oracle", "Spring Security"],
      front: "https://github.com/Achrafbn413/DMS-FRONT/tree/master",
      back: "https://github.com/Achrafbn413/DMS-BACKEND/tree/master",
      featured: true,
      category: "Full Stack"
    },
    {
      title: "MyHealth - Application Mobile",
      desc: "Application de télémédecine permettant gestion des patients, rendez-vous, messagerie et stockage local sécurisé.",
      tech: ["Java", "Android Studio", "SQLite"],
      category: "Mobile"
    },
    {
      title: "Gestion des Stocks & Ventes",
      desc: "Solution complète pour la gestion des produits, commandes, mouvements de stock et tableau de bord analytique.",
      tech: ["Spring Boot", "Angular", "REST API"],
      category: "Full Stack"
    },
    {
      title: "E-commerce React + Authentification JWT",
      desc: "Site e-commerce avec authentification sécurisée, gestion panier, interface administrateur et API Node.js.",
      tech: ["React", "Node.js", "JWT"],
      category: "Full Stack"
    },
    {
      title: "Gestion d'Événements Institutionnels",
      desc: "Plateforme web interne permettant gestion d'événements, participants, plannings et reporting en temps réel.",
      tech: ["Python", "MySQL", "HTML/CSS"],
      category: "Web"
    },
    {
      title: "Concours Administratifs – Mobile",
      desc: "Application mobile dédiée à la dématérialisation des concours : inscription, notifications, résultats et offline mode.",
      tech: ["Java", "Android", "Firebase"],
      category: "Mobile"
    },
    {
      title: "Tramway Rabat-Salé – Gestion Réseau",
      desc: "Application back-office de gestion du trafic, stations, lignes et véhicules du réseau urbain.",
      tech: ["Django", "Python"],
      category: "Backend"
    },
  ];

  return (
    <SectionFade>
      <section className="py-20 px-6 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_#00eaff80]">
            Projets
          </h2>
          <p className="text-gray-400 text-lg">
            Une sélection de mes réalisations techniques et projets personnels
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((proj, index) => (
            <div
              key={index}
              className={`
                group relative
                bg-gradient-to-br from-[#0c1424]/80 to-[#0a0f1a]/80 backdrop-blur-sm
                p-6 rounded-2xl
                border border-cyan-500/30
                shadow-[0_0_20px_#00eaff20]
                hover:shadow-[0_0_40px_#00eaff40]
                hover:border-cyan-400/50
                hover:transform hover:scale-[1.02]
                transition-all duration-500
                ${proj.featured ? 'md:col-span-2 lg:col-span-1' : ''}
              `}
            >
              {/* Badge Featured */}
              {proj.featured && (
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/40 text-yellow-300 text-xs font-semibold rounded-full flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Projet phare
                  </span>
                </div>
              )}

              {/* Badge Category */}
              <div className="mb-4">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  proj.category === "Full Stack" 
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                    : proj.category === "Mobile"
                    ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                    : proj.category === "Backend"
                    ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    : "bg-green-500/20 text-green-300 border border-green-500/30"
                }`}>
                  {proj.category}
                </span>
              </div>

              {/* Icon */}
              <div className="mb-4 w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors leading-tight">
                {proj.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-5 leading-relaxed text-sm">
                {proj.desc}
              </p>

              {/* Tech stack */}
              <div className="mb-5">
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((technology, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-[#0a0f1a] text-gray-300 text-xs rounded-lg border border-cyan-500/20 font-mono"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Boutons GitHub */}
              {proj.front && proj.back ? (
                <div className="flex gap-3">
                  <a
                    href={proj.front}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_#00eaff60] text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Frontend
                  </a>

                  <a
                    href={proj.back}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_#a855f760] text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Backend
                  </a>
                </div>
              ) : (
                <div className="pt-4 border-t border-cyan-500/20">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Projet privé ou en cours</span>
                  </div>
                </div>
              )}

            </div>
          ))}

        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-[#0c1424]/60 to-[#0a0f1a]/60 backdrop-blur-lg px-8 py-6 rounded-2xl border border-cyan-500/20 shadow-lg">
            <p className="text-gray-300 mb-4">
              Vous avez un projet en tête ? Travaillons ensemble !
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_#00eaff60]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Discutons de votre projet
            </a>
          </div>
        </div>

      </section>
    </SectionFade>
  );
}