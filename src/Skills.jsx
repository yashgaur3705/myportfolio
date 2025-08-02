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
    <section id="skills" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-indigo-600">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skillData.map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-indigo-100 to-purple-100 shadow-md 
                         rounded-xl p-6 hover:scale-105 hover:shadow-purple-600 
                         transform transition duration-300 flex flex-col items-center"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="h-12 w-12 mb-4 object-contain"
                loading="lazy"
              />
              <p className="font-semibold text-gray-800">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
