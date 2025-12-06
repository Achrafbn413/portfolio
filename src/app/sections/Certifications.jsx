import SectionFade from "../components/SectionFade";

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
  return (
    <SectionFade>
      <section id="certifications" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400 drop-shadow-[0_0_10px_#00eaff]">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-[#0c1424] p-6 rounded-xl border border-cyan-500/20 shadow-[0_0_15px_#00eaff30] hover:shadow-[0_0_25px_#00eaff60] transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                {cert.title}
              </h3>

              <p className="text-gray-400">{cert.provider}</p>

              {cert.grade && (
                <p className="text-sm text-gray-300 mt-1">
                  Note : <span className="font-bold">{cert.grade}</span>
                </p>
              )}

              <p className="text-xs text-gray-500 mt-3">
                Catégorie : {cert.category}
              </p>

              {/* Button View Certificate */}
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-4 py-2 bg-cyan-600 text-black font-semibold rounded-lg hover:bg-cyan-400 transition shadow-md"
                >
                  Voir certificat
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </SectionFade>
  );
}
