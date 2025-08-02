import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "Built with React.js and Tailwind CSS showcasing my skills and projects.",
      tech: ["React.js", "Tailwind CSS", "JavaScript"],
      link: "#"
    },
    {
      title: "Landing Page Design",
      description: "Modern and responsive landing page built with HTML, CSS, and JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "#"
    },
    {
      title: "Demo Business Website",
      description: "Created a responsive business demo website with UI/UX design principles.",
      tech: ["React.js", "UI/UX", "WordPress"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-indigo-600">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 text-left hover:scale-105  hover:shadow-purple-600  transition transform duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
