// Composant SectionFade simulé
const SectionFade = ({ children }) => (
  <div className="animate-fade-in">{children}</div>
);

export default function Skills() {
  const categories = [
    {
      title: "Langages",
      icon: "💻",
      items: ["C", "C++", "C#", "Java", "Python", "PHP", "JavaScript", "HTML/CSS", "PL/SQL"],
      color: "cyan"
    },
    {
      title: "Frameworks",
      icon: "🧩",
      items: ["Spring Boot", "Angular 17", "React", "Next.js", "Django"],
      color: "blue"
    },
    {
      title: "Bases de données",
      icon: "🗄️",
      items: ["Oracle", "MySQL", "SQLite", "Firebase"],
      color: "purple"
    },
    {
      title: "Outils & DevOps",
      icon: "⚙️",
      items: ["Git", "GitHub", "Docker", "Postman", "Vercel", "Linux", "VMware", "VirtualBox"],
      color: "green"
    },
    {
      title: "Sécurité",
      icon: "🔐",
      items: ["Spring Security", "JWT", "AES-256", "RBAC"],
      color: "red"
    },
    {
      title: "Méthodologies",
      icon: "📘",
      items: ["UML", "Merise", "Agile SCRUM", "MS Project"],
      color: "yellow"
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      cyan: {
        border: "border-cyan-500/30",
        bg: "bg-cyan-500/20",
        text: "text-cyan-300",
        glow: "shadow-[0_0_20px_#00eaff20] hover:shadow-[0_0_40px_#00eaff40]"
      },
      blue: {
        border: "border-blue-500/30",
        bg: "bg-blue-500/20",
        text: "text-blue-300",
        glow: "shadow-[0_0_20px_#3b82f620] hover:shadow-[0_0_40px_#3b82f640]"
      },
      purple: {
        border: "border-purple-500/30",
        bg: "bg-purple-500/20",
        text: "text-purple-300",
        glow: "shadow-[0_0_20px_#a855f720] hover:shadow-[0_0_40px_#a855f740]"
      },
      green: {
        border: "border-green-500/30",
        bg: "bg-green-500/20",
        text: "text-green-300",
        glow: "shadow-[0_0_20px_#22c55e20] hover:shadow-[0_0_40px_#22c55e40]"
      },
      red: {
        border: "border-red-500/30",
        bg: "bg-red-500/20",
        text: "text-red-300",
        glow: "shadow-[0_0_20px_#ef444420] hover:shadow-[0_0_40px_#ef444440]"
      },
      yellow: {
        border: "border-yellow-500/30",
        bg: "bg-yellow-500/20",
        text: "text-yellow-300",
        glow: "shadow-[0_0_20px_#eab30820] hover:shadow-[0_0_40px_#eab30840]"
      }
    };
    return colors[color] || colors.cyan;
  };

  return (
    <SectionFade>
      <section className="py-20 px-6 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_#00eaff80]">
            Compétences Techniques
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies et outils que je maîtrise pour donner vie à vos projets
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => {
            const colorClasses = getColorClasses(cat.color);
            return (
              <div
                key={index}
                className={`
                  group relative
                  bg-gradient-to-br from-[#0c1424]/80 to-[#0a0f1a]/80 backdrop-blur-sm
                  p-6 rounded-2xl 
                  border ${colorClasses.border}
                  ${colorClasses.glow}
                  hover:border-opacity-60
                  hover:transform hover:scale-[1.02]
                  transition-all duration-500
                `}
              >
                {/* Icon avec background */}
                <div className={`mb-5 w-16 h-16 ${colorClasses.bg} rounded-xl flex items-center justify-center border ${colorClasses.border} group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{cat.icon}</span>
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-bold mb-4 ${colorClasses.text} flex items-center gap-2`}>
                  {cat.title}
                </h3>

                {/* Skills as pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, idx) => (
                    <span 
                      key={idx}
                      className={`
                        px-3 py-1.5 
                        bg-[#0a0f1a] 
                        text-gray-300 
                        text-sm rounded-lg 
                        border ${colorClasses.border}
                        hover:${colorClasses.bg}
                        hover:${colorClasses.text}
                        transition-all duration-200
                        cursor-default
                      `}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Count badge */}
                <div className="mt-4 pt-4 border-t border-gray-700/30">
                  <span className="text-xs text-gray-400">
                    {cat.items.length} compétence{cat.items.length > 1 ? 's' : ''}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-gradient-to-br from-[#0c1424]/60 to-[#0a0f1a]/60 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
              9
            </div>
            <div className="text-gray-400 text-sm">Langages</div>
          </div>
          
          <div className="text-center bg-gradient-to-br from-[#0c1424]/60 to-[#0a0f1a]/60 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              5
            </div>
            <div className="text-gray-400 text-sm">Frameworks</div>
          </div>
          
          <div className="text-center bg-gradient-to-br from-[#0c1424]/60 to-[#0a0f1a]/60 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              4
            </div>
            <div className="text-gray-400 text-sm">Bases de données</div>
          </div>
          
          <div className="text-center bg-gradient-to-br from-[#0c1424]/60 to-[#0a0f1a]/60 backdrop-blur-sm p-6 rounded-2xl border border-green-500/20">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              8+
            </div>
            <div className="text-gray-400 text-sm">Outils DevOps</div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-[#0c1424]/60 to-[#0a0f1a]/60 backdrop-blur-lg px-8 py-4 rounded-2xl border border-cyan-500/20">
            <p className="text-gray-300 flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              En constante évolution et apprentissage de nouvelles technologies
            </p>
          </div>
        </div>

      </section>
    </SectionFade>
  );
}