"use client";

import { useState } from "react";

// Composant SectionFade simulé
const SectionFade = ({ children }) => (
  <div className="animate-fade-in">{children}</div>
);

const certifications = [
  {
    title: "Python for Everybody",
    provider: "University of Michigan",
    grade: "100%",
    category: "Specialization",
    link: "https://coursera.org/share/fa26b506544170e9a4cc8303e2e04ec3",
  },
  {
    title: "Introduction to Java and Object-Oriented Programming",
    provider: "University of Pennsylvania",
    grade: "95.02%",
    category: "Course",
    link: "https://coursera.org/share/d26b9df54a4d01b51037baff3ce8436a",
  },
  {
    title: "Introduction to Big Data with Spark and Hadoop",
    provider: "IBM",
    grade: "89.20%",
    category: "Course",
    link: "https://coursera.org/share/618f6aeaa97cd9a99acfdd01b546159c",
  },
  {
    title: "React Native",
    provider: "Meta",
    grade: "83.81%",
    category: "Course",
    link: "https://coursera.org/share/6b4b68ed155b0bad021438e3c3b5ab82",
  },
  {
    title: "Introduction to Git and GitHub",
    provider: "Google",
    grade: "90%",
    category: "Course",
    link: "https://coursera.org/share/573aba686f15d6675862b2a1e7f05e1d",
  },
  {
    title: "Neural Networks and Deep Learning",
    provider: "DeepLearning.AI",
    grade: "95.70%",
    category: "Course",
    link: "https://coursera.org/share/181479d903e9bba771353d051d20925a",
  },
  {
    title: "Building Scalable Java Microservices with Spring Boot & Spring Cloud",
    provider: "Google Cloud",
    grade: "100%",
    category: "Course",
    link: "https://coursera.org/share/fcf803c85668349e415f0618ac8fcd8f",
  },
  {
    title: "React Basics",
    provider: "Meta",
    grade: "88.21%",
    category: "Course",
    link: "https://coursera.org/share/3eecc957bd4f0c01626b17a3ab94b2e3",
  },
  {
    title: "Using Databases with Python",
    provider: "University of Michigan",
    grade: "100%",
    category: "Course",
    link: "https://coursera.org/share/1dff5851ce782fb621524d1e2507faad",
  },
  {
    title: "Introduction to Containers: Docker, Kubernetes & OpenShift",
    provider: "IBM",
    grade: "88%",
    category: "Course",
    link: "https://coursera.org/share/b695fb6b4904855b17b6e195c9064796",
  },
  {
    title: "Virtual Networks in Azure",
    provider: "Whizlabs",
    grade: "90.69%",
    category: "Course",
    link: "https://coursera.org/share/e1718f6db13b31aeeeb091169a2fbe00",
  },
  {
    title: "Using Python to Access Web Data",
    provider: "University of Michigan",
    grade: "95.56%",
    category: "Course",
    link: "https://coursera.org/share/5317c229e2ef6a050338b6fe6ad22f53",
  },
  {
    title: "Capstone: Retrieving, Processing, and Visualizing Data with Python",
    provider: "University of Michigan",
    grade: "92%",
    category: "Course",
    link: "https://coursera.org/share/9d7257b136cb1100b4efab9483e49e52",
  },
  {
    title: "Software Engineering: Modeling Software Systems using UML",
    provider: "HKUST",
    grade: "100%",
    category: "Course",
    link: "https://coursera.org/share/958daf1c917ed6bbb77560d3ab5f2884",
  },
  {
    title: "Unix System Basics",
    provider: "Codio",
    grade: "93.40%",
    category: "Course",
    link: "https://www.coursera.org/account/accomplishments/verify/8XNKFTWMMGEV",
  },
  {
    title: "Python Data Structures",
    provider: "University of Michigan",
    grade: "97.60%",
    category: "Course",
    link: "https://coursera.org/share/ea76d678d3b5cba5763c5faf8fe08169",
  },
  {
    title: "Programming for Everybody (Getting Started with Python)",
    provider: "University of Michigan",
    grade: "95.87%",
    category: "Course",
    link: "https://coursera.org/share/adee5e84bcc5b405175d5df92aafc89b",
  },
  {
    title: "19c SQL Workshop",
    provider: "Oracle",
    grade: "100%",
    category: "Oracle",
    link: "https://mylearn.oracle.com/ou/course/19c-sql-workshop/118127",
  },
  {
    title: "Get Started with Oracle Database Administration",
    provider: "Oracle",
    grade: "100%",
    category: "Oracle",
    link: "https://mylearn.oracle.com/ou/learning-path/get-started-with-oracle-database-administration/118145",
  },
  {
    title: "19c Oracle DBA Workshop",
    provider: "Oracle",
    grade: "100%",
    category: "Oracle",
    link: "https://mylearn.oracle.com/ou/course/19c-oracle-dba-workshop/118146",
  },
];

export default function Certifications() {
  const [filter, setFilter] = useState("All");
  
  const categories = ["All", "Specialization", "Course", "Oracle"];
  
  const filteredCerts = filter === "All" 
    ? certifications 
    : certifications.filter(cert => cert.category === filter);

  const getGradeColor = (grade) => {
    const numGrade = parseFloat(grade);
    if (numGrade >= 95) return "text-green-400";
    if (numGrade >= 90) return "text-cyan-400";
    if (numGrade >= 85) return "text-blue-400";
    return "text-purple-400";
  };

  return (
    <SectionFade>
      <section id="certifications" className="py-20 px-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_#00eaff80]">
            Certifications
          </h2>
          <p className="text-gray-400 text-lg">
            {certifications.length} certifications obtenues auprès d'institutions reconnues
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-[0_0_20px_#00eaff60]"
                  : "bg-[#0c1424]/80 text-gray-400 border border-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-300"
              }`}
            >
              {cat}
              {cat !== "All" && (
                <span className="ml-2 text-xs opacity-75">
                  ({certifications.filter(c => c.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#0c1424]/80 to-[#0a0f1a]/80 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/30 shadow-[0_0_20px_#00eaff20] hover:shadow-[0_0_40px_#00eaff40] hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-[1.02]"
            >
              {/* Badge de catégorie */}
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  cert.category === "Specialization" 
                    ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                    : cert.category === "Oracle"
                    ? "bg-red-500/20 text-red-300 border border-red-500/30"
                    : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                }`}>
                  {cert.category}
                </span>
              </div>

              {/* Icône de certification */}
              <div className="mb-4 w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>

              {/* Titre */}
              <h3 className="text-xl font-semibold text-cyan-300 mb-3 leading-tight group-hover:text-cyan-200 transition-colors">
                {cert.title}
              </h3>

              {/* Provider avec icône */}
              <div className="flex items-center gap-2 text-gray-400 mb-3">
                <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className="text-sm">{cert.provider}</p>
              </div>

              {/* Grade avec barre de progression */}
              {cert.grade && (
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Note obtenue</span>
                    <span className={`text-lg font-bold ${getGradeColor(cert.grade)}`}>
                      {cert.grade}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700/30 rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: cert.grade }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Button View Certificate */}
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-4 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_#00eaff60] group"
                >
                  <span>Voir le certificat</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Nombre de résultats */}
        {filter !== "All" && (
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              {filteredCerts.length} certification{filteredCerts.length > 1 ? 's' : ''} 
              {' '}dans la catégorie <span className="text-cyan-400 font-medium">{filter}</span>
            </p>
          </div>
        )}
      </section>
    </SectionFade>
  );
}