import SectionFade from "../components/SectionFade";

const certifications = [
  { title: "Python for Everybody", provider: "University of Michigan", grade: null, category: "Specialization" },
  { title: "Introduction to Java and Object-Oriented Programming", provider: "University of Pennsylvania", grade: "95.02%", category: "Course" },
  { title: "Introduction to Big Data with Spark and Hadoop", provider: "IBM", grade: "89.20%", category: "Course" },
  { title: "React Native", provider: "Meta", grade: "83.81%", category: "Course" },
  { title: "Introduction to Git and GitHub", provider: "Google", grade: "90%", category: "Course" },
  { title: "Neural Networks and Deep Learning", provider: "DeepLearning.AI", grade: "95.70%", category: "Course" },
  { title: "Building Scalable Java Microservices", provider: "Google Cloud", grade: "100%", category: "Course" },
  { title: "React Basics", provider: "Meta", grade: "88.21%", category: "Course" },
  { title: "Using Databases with Python", provider: "University of Michigan", grade: "100%", category: "Course" },
  { title: "Introduction to Containers", provider: "IBM", grade: "88%", category: "Course" },
  { title: "Virtual Networks in Azure", provider: "Whizlabs", grade: "90.69%", category: "Course" },
  { title: "Using Python to Access Web Data", provider: "University of Michigan", grade: "95.56%", category: "Course" },
  { title: "Capstone: Retrieving, Processing, Visualizing Data", provider: "University of Michigan", grade: "92%", category: "Course" },
  { title: "Software Engineering using UML", provider: "HKUST", grade: "100%", category: "Course" },
  { title: "Unix System Basics", provider: "Codio", grade: "93.40%", category: "Course" },
  { title: "Python Data Structures", provider: "University of Michigan", grade: "97.60%", category: "Course" },
  { title: "Programming for Everybody", provider: "University of Michigan", grade: "95.87%", category: "Course" },
  { title: "Oracle Database Administration", provider: "Oracle", grade: "100%", category: "Oracle" },
  { title: "Oracle DBA Workshop", provider: "Oracle", grade: "100%", category: "Oracle" },
];

export default function Certifications() {
  return (
    <SectionFade>
      <section id="certif" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Certifications</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-400 mb-2">{cert.provider}</p>

              {cert.grade && (
                <p className="text-sm text-gray-300">
                  Note : <span className="font-bold">{cert.grade}</span>
                </p>
              )}

              <p className="text-xs text-gray-500 mt-3">
                Catégorie : {cert.category}
              </p>
            </div>
          ))}
        </div>
      </section>
    </SectionFade>
  );
}
