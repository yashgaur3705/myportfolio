import React from "react";

// Skill images (you can replace these URLs with your own local images or CDN links)
const skillData = [
  {
    name: "React.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "HTML",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Tailwind CSS",
    img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "Web Design (UI/UX)",
    img: "https://cdn-icons-png.flaticon.com/512/906/906334.png", // generic UI/UX icon
  },
  {
    name: "WordPress / Wix",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  {
    name: "AI Tools (ChatGPT, BlackBox, MidJourney, Leonardo)",
    img: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png", // generic AI icon
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-24 px-6 overflow-hidden"
    >
      {/* Animated Gradient Blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-400 opacity-20 rounded-full blur-3xl animate-skill-blob1 z-0"></div>
      <div className="absolute -bottom-32 right-0 w-96 h-96 bg-yellow-300 opacity-20 rounded-full blur-3xl animate-skill-blob2 z-0"></div>
      <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-indigo-400 opacity-10 rounded-full blur-2xl animate-skill-blob3 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-12 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent animate-skill-title">
          Skills
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {skillData.map((skill, index) => (
            <div
              key={index}
              className={`group relative bg-white/90 shadow-2xl rounded-3xl p-8 border border-indigo-100 hover:scale-[1.08] hover:shadow-pink-400/40 transition-transform duration-400 overflow-hidden cursor-pointer animate-skill-card`}
              style={{ animationDelay: `${index * 0.12 + 0.1}s` }}
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-pink-300 via-yellow-200 to-indigo-300 opacity-0 group-hover:opacity-40 blur-2xl transition duration-500 pointer-events-none z-0"></div>
              {/* Card Content */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-4">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-indigo-100 via-pink-100 to-yellow-100 shadow-lg group-hover:scale-110 transition-transform duration-300 animate-spin-slow">
                    <img
                      src={skill.img}
                      alt={skill.name}
                      className="h-10 w-10 object-contain drop-shadow-lg"
                      loading="lazy"
                    />
                  </div>
                </div>
                <p className="font-bold text-lg text-indigo-700 group-hover:text-pink-500 transition-colors duration-300 animate-skill-card-title text-center">
                  {skill.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Custom Animations */}
      <style>
        {`
          @keyframes skill-blob1 {
            0%,100% { transform: scale(1) translateY(0);}
            50% { transform: scale(1.15) translateY(20px);}
          }
          .animate-skill-blob1 {
            animation: skill-blob1 8s ease-in-out infinite;
          }
          @keyframes skill-blob2 {
            0%,100% { transform: scale(1) translateY(0);}
            50% { transform: scale(1.1) translateY(-30px);}
          }
          .animate-skill-blob2 {
            animation: skill-blob2 10s ease-in-out infinite;
          }
          @keyframes skill-blob3 {
            0%,100% { transform: scale(1) translate(0,0);}
            50% { transform: scale(1.08) translate(-20px, 20px);}
          }
          .animate-skill-blob3 {
            animation: skill-blob3 12s ease-in-out infinite;
          }
          @keyframes skill-title {
            0% { opacity: 0; transform: translateY(-40px) scale(0.95);}
            60% { opacity: 1; transform: translateY(10px) scale(1.05);}
            100% { opacity: 1; transform: translateY(0) scale(1);}
          }
          .animate-skill-title {
            animation: skill-title 1.2s cubic-bezier(.4,0,.2,1);
          }
          @keyframes skill-card {
            0% { opacity: 0; transform: scale(0.8) translateY(40px);}
            80% { opacity: 1; transform: scale(1.05) translateY(-5px);}
            100% { opacity: 1; transform: scale(1) translateY(0);}
          }
          .animate-skill-card {
            animation: skill-card 1s cubic-bezier(.4,0,.2,1) both;
          }
          @keyframes skill-card-title {
            0% { opacity: 0; transform: translateY(20px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-skill-card-title {
            animation: skill-card-title 1.1s cubic-bezier(.4,0,.2,1);
          }
          @keyframes spin-slow {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
          .animate-spin-slow {
            animation: spin-slow 7s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
