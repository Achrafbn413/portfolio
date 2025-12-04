import SectionFade from "../components/SectionFade";

export default function Projects() {
  const projects = [
    {
      title: "DMS - Dispute Management System",
      desc: "Plateforme bancaire avancée pour la gestion des litiges Visa/Mastercard : workflows chargeback complets, arbitrage, calcul automatisé des délais réglementaires, conformité PCI-DSS, RBAC, audit trail, sécurité multilayer.",
      tech: "Spring Boot, Angular 17, Oracle, Spring Security",
      front: "https://github.com/Achrafbn413/DMS-FRONT/tree/master",
      back: "https://github.com/Achrafbn413/DMS-BACKEND/tree/master",
    },
    {
      title: "MyHealth - Application Mobile",
      desc: "Application de télémédecine permettant gestion des patients, rendez-vous, messagerie et stockage local sécurisé.",
      tech: "Java, Android Studio, SQLite",
    },
    {
      title: "Gestion des Stocks & Ventes",
      desc: "Solution complète pour la gestion des produits, commandes, mouvements de stock et tableau de bord analytique.",
      tech: "Spring Boot, Angular, REST API",
    },
    {
      title: "E-commerce React + Authentification JWT",
      desc: "Site e-commerce avec authentification sécurisée, gestion panier, interface administrateur et API Node.js.",
      tech: "React, Node.js, JWT",
    },
    {
      title: "Gestion d'Événements Institutionnels",
      desc: "Plateforme web interne permettant gestion d’événements, participants, plannings et reporting en temps réel.",
      tech: "Python, MySQL, HTML/CSS",
    },
    {
      title: "Concours Administratifs – Mobile",
      desc: "Application mobile dédiée à la dématérialisation des concours : inscription, notifications, résultats et offline mode.",
      tech: "Java, Android, Firebase",
    },
    {
      title: "Tramway Rabat-Salé – Gestion Réseau",
      desc: "Application back-office de gestion du trafic, stations, lignes et véhicules du réseau urbain.",
      tech: "Django, Python",
    },
  ];

  return (
    <SectionFade>
      <section className="py-20 px-6 max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400 drop-shadow-[0_0_10px_#00eaff]">
          Projets
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((proj, index) => (
            <div
              key={index}
              className="
                relative overflow-hidden
                bg-[#0c1424]
                p-6 rounded-xl
                border border-cyan-500/20
                shadow-[0_0_15px_#00eaff40]
                hover:shadow-[0_0_28px_#00eaff90]
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              {/* Glow Border */}
              <div className="absolute inset-0 rounded-xl border border-transparent hover:border-cyan-400/40 transition-all z-0" />

              {/* Contenu */}
              <div className="relative z-10">

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3 drop-shadow-[0_0_6px_#00eaff]">
                  {proj.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {proj.desc}
                </p>

                {/* Tech stack */}
                <p className="text-sm text-cyan-300 font-mono drop-shadow-[0_0_4px_#00eaff] mb-4">
                  Technologies : {proj.tech}
                </p>

                {/* Boutons GitHub DMS */}
                {proj.front && proj.back && (
                  <div className="flex gap-3 mt-3">
                    <a
                      href={proj.front}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        px-4 py-2
                        bg-cyan-500 text-black
                        rounded-lg font-semibold
                        hover:bg-cyan-400
                        transition shadow-lg text-sm
                      "
                    >
                      Frontend
                    </a>

                    <a
                      href={proj.back}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        px-4 py-2
                        bg-purple-600 text-white
                        rounded-lg font-semibold
                        hover:bg-purple-500
                        transition shadow-lg text-sm
                      "
                    >
                      Backend
                    </a>
                  </div>
                )}

              </div>
            </div>
          ))}

        </div>
      </section>
    </SectionFade>
  );
}
