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
      title: "SBC Foundation Trust (NGO)",
      description: "Modern and responsive landing page built with HTML, CSS, and JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://sbryashproject.netlify.app/"
    },
    {
      title: "Green Dunk",
      description: "Created a responsive business E-commerce demo website with UI/UX design principles.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://greenyashproject.netlify.app/"
    }
  ];

  return (
    <section
      id="projects"
      className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-24 px-6 overflow-hidden"
    >
      {/* Animated Gradient Blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-400 opacity-20 rounded-full blur-3xl animate-project-blob1 z-0"></div>
      <div className="absolute -bottom-32 right-0 w-96 h-96 bg-yellow-300 opacity-20 rounded-full blur-3xl animate-project-blob2 z-0"></div>
      <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-indigo-400 opacity-10 rounded-full blur-2xl animate-project-blob3 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-12 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent animate-project-title">
          <span className="inline-block animate-bounce">🚀</span> Projects
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/90 shadow-2xl rounded-3xl p-8 text-left border border-indigo-100 hover:scale-[1.07] hover:shadow-pink-400/40 transition-transform duration-400 overflow-hidden cursor-pointer animate-project-card"
              style={{ animationDelay: `${index * 0.15 + 0.1}s` }}
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-pink-300 via-yellow-200 to-indigo-300 opacity-0 group-hover:opacity-40 blur-2xl transition duration-500 pointer-events-none z-0"></div>
              {/* Card Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-indigo-700 mb-2 group-hover:text-pink-500 transition-colors duration-300 animate-project-card-title">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 min-h-[60px] animate-fade-in">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-indigo-100 via-pink-100 to-yellow-100 text-indigo-700 font-semibold rounded-full text-xs shadow animate-tech-badge"
                      style={{ animationDelay: `${i * 0.08 + 0.1}s` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-6 py-2 rounded-full font-bold bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 text-white shadow-lg hover:from-pink-500 hover:to-indigo-500 hover:scale-110 transition-all duration-300 animate-project-btn"
                >
                  <span className="inline-block mr-2 animate-pulse">🔗</span>
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes project-blob1 {
            0%,100% { transform: scale(1) translateY(0);}
            50% { transform: scale(1.12) translateY(30px);}
          }
          .animate-project-blob1 {
            animation: project-blob1 7s ease-in-out infinite;
          }
          @keyframes project-blob2 {
            0%,100% { transform: scale(1) translateY(0);}
            50% { transform: scale(1.08) translateY(-20px);}
          }
          .animate-project-blob2 {
            animation: project-blob2 8s ease-in-out infinite;
          }
          @keyframes project-blob3 {
            0%,100% { transform: scale(1) translateX(0);}
            50% { transform: scale(1.18) translateX(-30px);}
          }
          .animate-project-blob3 {
            animation: project-blob3 9s ease-in-out infinite;
          }
          @keyframes project-title {
            0% { opacity: 0; transform: translateY(-40px) scale(0.95);}
            60% { opacity: 1; transform: translateY(10px) scale(1.05);}
            100% { opacity: 1; transform: translateY(0) scale(1);}
          }
          .animate-project-title {
            animation: project-title 1.2s cubic-bezier(.4,0,.2,1);
          }
          @keyframes project-card {
            0% { opacity: 0; transform: translateY(40px) scale(0.95);}
            80% { opacity: 1; transform: translateY(-5px) scale(1.03);}
            100% { opacity: 1; transform: translateY(0) scale(1);}
          }
          .animate-project-card {
            animation: project-card 1s cubic-bezier(.4,0,.2,1) both;
          }
          @keyframes project-card-title {
            0% { opacity: 0; transform: translateX(-30px);}
            100% { opacity: 1; transform: translateX(0);}
          }
          .animate-project-card-title {
            animation: project-card-title 0.8s cubic-bezier(.4,0,.2,1);
          }
          @keyframes fade-in {
            from { opacity: 0;}
            to { opacity: 1;}
          }
          .animate-fade-in {
            animation: fade-in 1.2s cubic-bezier(.4,0,.2,1);
          }
          @keyframes tech-badge {
            0% { opacity: 0; transform: scale(0.7);}
            100% { opacity: 1; transform: scale(1);}
          }
          .animate-tech-badge {
            animation: tech-badge 0.5s cubic-bezier(.4,0,.2,1) both;
          }
          @keyframes project-btn {
            0% { opacity: 0; transform: scale(0.8);}
            100% { opacity: 1; transform: scale(1);}
          }
          .animate-project-btn {
            animation: project-btn 0.7s cubic-bezier(.4,0,.2,1) both;
          }
        `}
      </style>
    </section>
  );
}
