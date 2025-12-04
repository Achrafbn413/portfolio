import SectionFade from "../components/SectionFade";

export default function About() {
  return (
    <SectionFade>
      <section id="about" className="max-w-5xl mx-auto py-24 px-6">

        <h2 className="text-4xl font-bold text-center text-cyan-300 mb-10 drop-shadow-[0_0_20px_#00eaff]">
          À propos de moi
        </h2>

        <p className="text-gray-300 leading-7 mb-10 text-lg">
          Ingénieur d’État en Informatique & Réseaux diplômé de l’EMSI Rabat, spécialisé en MIAGE,
          passionné par le développement Full Stack, l’architecture logicielle moderne, la sécurité et les
          systèmes distribués. Rigoureux, curieux et orienté solution, j’aime concevoir des applications 
          performantes, sécurisées et centrées utilisateur.
        </p>

        {/* Formation */}
        <h3 className="text-2xl font-semibold text-cyan-200 mb-3">🎓 Formation</h3>
        <p className="text-gray-300 mb-8">
          <strong>EMSI Rabat (2020–2025)</strong> — Diplôme d’Ingénieur d’État en Informatique &
          Réseaux — <em>Option MIAGE</em>.
        </p>

        {/* Expériences */}
        <h3 className="text-2xl font-semibold text-cyan-200 mb-3">💼 Expériences Professionnelles</h3>

        <div className="space-y-6 text-gray-300">

          <div>
            <h4 className="text-xl font-semibold text-white">
              Société Maghrébine de Monétique (S2M) — Full Stack Developer (2025)
            </h4>
            <p>
              Conception & développement du système <strong>DMS</strong> pour la gestion des litiges Visa/Mastercard :
              automatisation du workflow chargeback, arbitrage, délais réglementaires, audit trail, chiffrement
              AES-256, RBAC et conformité PCI-DSS.
            </p>
            <p className="text-sm text-gray-400">Techs : Java, Spring Boot, Angular 17, Oracle, Spring Security</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white">
              Ministère de l’Économie — Stagiaire Full Stack (2024)
            </h4>
            <p>
              Développement d’une application mobile de dématérialisation des concours administratifs.
            </p>
            <p className="text-sm text-gray-400">Techs : Java, Android Studio, SQLite, Firebase</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white">
              Ministère de l’Économie — Stagiaire Web (2023)
            </h4>
            <p>
              Application de gestion d’événements avec suivi en temps réel.
            </p>
            <p className="text-sm text-gray-400">Techs : Python, MySQL, HTML, CSS</p>
          </div>
        </div>

        {/* Objectif */}
        <h3 className="text-2xl font-semibold text-cyan-200 mt-10 mb-3">🎯 Objectif</h3>
        <p className="text-gray-300 text-lg">
          Je suis à la recherche d’une première opportunité en tant qu’ingénieur Full Stack
          au sein d’une équipe dynamique et innovante où je pourrai apporter mes compétences
          techniques tout en continuant à progresser.
        </p>

      </section>
    </SectionFade>
  );
}
