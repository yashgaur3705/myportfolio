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
    <section
      id="education"
      className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-24 px-6 overflow-hidden"
    >
      {/* Animated Gradient Blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-400 opacity-20 rounded-full blur-3xl animate-edu-blob1 z-0"></div>
      <div className="absolute -bottom-32 right-0 w-96 h-96 bg-yellow-300 opacity-20 rounded-full blur-3xl animate-edu-blob2 z-0"></div>
      <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-indigo-400 opacity-10 rounded-full blur-2xl animate-edu-blob3 z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-14 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent animate-edu-title">
         Education
        </h2>
        <div className="relative flex flex-col gap-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`group relative flex items-center gap-8 bg-white/90 shadow-2xl rounded-3xl px-8 py-7 border-l-8 border-indigo-300 hover:border-pink-400 hover:scale-[1.04] hover:shadow-pink-400/40 transition-transform duration-400 overflow-hidden cursor-pointer animate-edu-card`}
              style={{ animationDelay: `${index * 0.18 + 0.1}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 via-pink-400 to-yellow-300 shadow-lg border-4 border-white animate-edu-dot"></div>
              {/* Card Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-pink-200 via-yellow-100 to-indigo-200 opacity-0 group-hover:opacity-40 blur-2xl transition duration-500 pointer-events-none z-0"></div>
              {/* Card Content */}
              <div className="relative z-10 text-left w-full">
                <h3 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-1 group-hover:text-pink-500 transition-colors duration-300 animate-edu-card-title">
                  {edu.degree}
                </h3>
                <p className="text-gray-600 text-lg mb-2 animate-fade-in">{edu.place}</p>
                <span className="inline-block px-4 py-1 bg-gradient-to-r from-indigo-100 via-pink-100 to-yellow-100 text-indigo-700 font-semibold rounded-full text-xs shadow animate-edu-badge">
                  {edu.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes edu-blob1 {
            0%,100% { transform: scale(1) translateY(0);}
            50% { transform: scale(1.12) translateY(18px);}
          }
          .animate-edu-blob1 {
            animation: edu-blob1 7s ease-in-out infinite;
          }
          @keyframes edu-blob2 {
            0%,100% { transform: scale(1) translateY(0);}
            50% { transform: scale(1.08) translateY(-22px);}
          }
          .animate-edu-blob2 {
            animation: edu-blob2 8s ease-in-out infinite;
          }
          @keyframes edu-blob3 {
            0%,100% { transform: scale(1);}
            50% { transform: scale(1.15);}
          }
          .animate-edu-blob3 {
            animation: edu-blob3 10s ease-in-out infinite;
          }
          @keyframes edu-title {
            0% { opacity: 0; transform: translateY(-40px) scale(0.95);}
            60% { opacity: 1; transform: translateY(10px) scale(1.05);}
            100% { opacity: 1; transform: translateY(0) scale(1);}
          }
          .animate-edu-title {
            animation: edu-title 1.2s cubic-bezier(.4,0,.2,1);
          }
          @keyframes edu-card {
            0% { opacity: 0; transform: translateX(-60px) scale(0.95);}
            60% { opacity: 1; transform: translateX(10px) scale(1.03);}
            100% { opacity: 1; transform: translateX(0) scale(1);}
          }
          .animate-edu-card {
            animation: edu-card 1.1s cubic-bezier(.4,0,.2,1) both;
          }
          @keyframes edu-dot {
            0% { box-shadow: 0 0 0 0 rgba(236, 72, 153, 0.5);}
            70% { box-shadow: 0 0 0 12px rgba(236, 72, 153, 0);}
            100% { box-shadow: 0 0 0 0 rgba(236, 72, 153, 0);}
          }
          .animate-edu-dot {
            animation: edu-dot 2s infinite;
          }
          @keyframes edu-card-title {
            0% { opacity: 0; transform: translateY(-20px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-edu-card-title {
            animation: edu-card-title 1s cubic-bezier(.4,0,.2,1);
          }
          @keyframes edu-badge {
            0% { opacity: 0; transform: scale(0.8);}
            100% { opacity: 1; transform: scale(1);}
          }
          .animate-edu-badge {
            animation: edu-badge 1.2s cubic-bezier(.4,0,.2,1);
          }
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fade-in {
            animation: fade-in 1.2s ease;
          }
        `}
      </style>
    </section>
  );
}
