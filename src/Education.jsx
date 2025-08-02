import React from "react";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      place: "Vivekananda Global University, Jaipur",
      year: "2024 – Present",
    },
    {
      degree: "Diploma in Full Stack Development",
      place: "Samyak Computer Classes",
      year: "2024 – Present",
    },
    {
      degree: "Science (Biology)",
      place: "Proton School",
      year: "2022",
    },
  ];

  return (
    <section id="education" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-indigo-600">
          Education
        </h2>
        <div className="relative border-l-4 border-indigo-600 pl-6 space-y-10">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-purple-600 transition">
              <h3 className="text-2xl font-semibold text-gray-800">{edu.degree}</h3>
              <p className="text-gray-600">{edu.place}</p>
              <span className="text-sm text-gray-500">{edu.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
