// Composant SectionFade simulé
const SectionFade = ({ children }) => (
  <div className="animate-fade-in">{children}</div>
);

export default function About() {
  return (
    <SectionFade>
      <section id="about" className="max-w-6xl mx-auto py-24 px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_#00eaff80]">
            À propos de moi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Introduction avec card */}
        <div className="bg-gradient-to-br from-[#0c1424]/80 to-[#0a0f1a]/80 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/30 shadow-[0_0_30px_#00eaff20] mb-12">
          <p className="text-gray-300 leading-8 text-lg">
            Ingénieur d'État en Informatique & Réseaux diplômé de l'EMSI Rabat, spécialisé en MIAGE,
            passionné par le développement Full Stack, l'architecture logicielle moderne, la sécurité et les
            systèmes distribués. Rigoureux, curieux et orienté solution, j'aime concevoir des applications 
            performantes, sécurisées et centrées utilisateur.
          </p>
        </div>

        {/* Formation */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-cyan-300">Formation</h3>
          </div>
          
          <div className="bg-gradient-to-br from-[#0c1424]/60 to-[#0a0f1a]/60 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_25px_#00eaff30]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-2 h-full bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm font-medium rounded-full border border-cyan-500/30">
                    2020–2025
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm font-medium rounded-full border border-purple-500/30">
                    MIAGE
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  Diplôme d'Ingénieur d'État en Informatique & Réseaux
                </h4>
                <p className="text-gray-400">EMSI Rabat</p>
              </div>
            </div>
          </div>
        </div>

        {/* Expériences */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-cyan-300">Expériences Professionnelles</h3>
          </div>

          <div className="space-y-6">
            {/* S2M */}
            <div className="group bg-gradient-to-br from-[#0c1424]/80 to-[#0a0f1a]/80 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_35px_#00eaff30] hover:transform hover:scale-[1.01]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-full bg-gradient-to-b from-green-500 to-cyan-500 rounded-full"></div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs font-medium rounded-full border border-green-500/30">
                      2025
                    </span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full border border-blue-500/30">
                      Full Stack Developer
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    Société Maghrébine de Monétique (S2M)
                  </h4>
                  
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Conception & développement du système <span className="text-cyan-400 font-semibold">DMS</span> pour la gestion des litiges Visa/Mastercard :
                    automatisation du workflow chargeback, arbitrage, délais réglementaires, audit trail, chiffrement
                    AES-256, RBAC et conformité PCI-DSS.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {['Java', 'Spring Boot', 'Angular 17', 'Oracle', 'Spring Security'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-[#0a0f1a] text-gray-300 text-sm rounded-lg border border-cyan-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Ministère 2024 */}
            <div className="group bg-gradient-to-br from-[#0c1424]/80 to-[#0a0f1a]/80 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_35px_#00eaff30] hover:transform hover:scale-[1.01]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full border border-blue-500/30">
                      2024
                    </span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-medium rounded-full border border-purple-500/30">
                      Stagiaire Full Stack
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    Ministère de l'Économie
                  </h4>
                  
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Développement d'une application mobile de dématérialisation des concours administratifs.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {['Java', 'Android Studio', 'SQLite', 'Firebase'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-[#0a0f1a] text-gray-300 text-sm rounded-lg border border-cyan-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Ministère 2023 */}
            <div className="group bg-gradient-to-br from-[#0c1424]/80 to-[#0a0f1a]/80 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_35px_#00eaff30] hover:transform hover:scale-[1.01]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-medium rounded-full border border-purple-500/30">
                      2023
                    </span>
                    <span className="px-3 py-1 bg-pink-500/20 text-pink-300 text-xs font-medium rounded-full border border-pink-500/30">
                      Stagiaire Web
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    Ministère de l'Économie
                  </h4>
                  
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Application de gestion d'événements avec suivi en temps réel.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'MySQL', 'HTML', 'CSS'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-[#0a0f1a] text-gray-300 text-sm rounded-lg border border-cyan-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Objectif */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-cyan-300">Objectif</h3>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/40 shadow-[0_0_30px_#00eaff20]">
            <p className="text-gray-200 leading-8 text-lg">
              Je suis à la recherche d'une première opportunité en tant qu'ingénieur Full Stack
              au sein d'une équipe dynamique et innovante où je pourrai apporter mes compétences
              techniques tout en continuant à progresser.
            </p>
          </div>
        </div>

      </section>
    </SectionFade>
  );
}