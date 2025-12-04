import SectionFade from "../components/SectionFade";

export default function Skills() {
  const categories = [
    {
      title: "Langages",
      icon: "💻",
      items: "C, C++, C#, Java, Python, PHP, JavaScript, HTML/CSS, PL/SQL",
    },
    {
      title: "Frameworks",
      icon: "🧩",
      items: "Spring Boot, Angular 17, React, Next.js, Django",
    },
    {
      title: "Bases de données",
      icon: "🗄️",
      items: "Oracle, MySQL, SQLite, Firebase",
    },
    {
      title: "Outils & DevOps",
      icon: "⚙️",
      items: "Git, GitHub, Docker, Postman, Vercel, Linux, VMware, VirtualBox",
    },
    {
      title: "Sécurité",
      icon: "🔐",
      items: "Spring Security, JWT, AES-256, RBAC",
    },
    {
      title: "Méthodologies",
      icon: "📘",
      items: "UML, Merise, Agile SCRUM, MS Project",
    },
  ];

  return (
    <SectionFade>
      <section className="py-20 px-6 max-w-6xl mx-auto">
        
        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400 drop-shadow-[0_0_10px_#00eaff]">
          Compétences Techniques
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="
                bg-[#0c1424] p-6 rounded-xl 
                border border-cyan-500/20
                shadow-[0_0_15px_#00eaff40]
                hover:shadow-[0_0_25px_#00eaff80]
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-white drop-shadow-[0_0_6px_#00eaff]">
                <span className="text-cyan-300">{cat.icon}</span> {cat.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {cat.items}
              </p>
            </div>
          ))}
        </div>
      </section>
    </SectionFade>
  );
}
