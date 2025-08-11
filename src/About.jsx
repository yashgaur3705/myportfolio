import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden"
    >
      {/* Animated Gradient Blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-400 opacity-20 rounded-full blur-3xl animate-about-blob1 z-0"></div>
      <div className="absolute -bottom-32 right-0 w-96 h-96 bg-yellow-300 opacity-20 rounded-full blur-3xl animate-about-blob2 z-0"></div>
      <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-indigo-400 opacity-10 rounded-full blur-2xl animate-about-blob3 z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent animate-about-title drop-shadow-lg">
          <span className="inline-block animate-bounce">👨‍💻</span> About Me
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed font-medium animate-fade-in-up">
          Hi, I'm <span className="font-bold text-indigo-600 bg-gradient-to-r from-yellow-300 via-pink-400 to-indigo-400 bg-clip-text text-transparent animate-gradient-x">Yash Gaur</span> — a <span className="font-semibold text-pink-500">Frontend Developer</span> & <span className="font-semibold text-yellow-500">Web Designer</span> passionate about crafting
          <span className="inline-block mx-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-pink-100 via-yellow-100 to-indigo-100 text-indigo-700 font-semibold shadow animate-pulse">modern</span>
          and <span className="inline-block mx-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-yellow-100 via-pink-100 to-indigo-100 text-pink-700 font-semibold shadow animate-pulse">responsive</span> websites.
          <br className="hidden md:block" />
          <span className="inline-block mt-3 animate-fade-in-down">
            <span className="font-semibold text-indigo-700">React.js</span>, <span className="font-semibold text-pink-600">HTML</span>, <span className="font-semibold text-yellow-600">CSS</span>, <span className="font-semibold text-indigo-500">JavaScript</span> — these are my tools of choice.
          </span>
          <br />
          <span className="inline-block mt-3 animate-fade-in-up">
            I supercharge my workflow with <span className="font-semibold text-pink-500">AI tools</span> like <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-semibold">ChatGPT</span>, <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-semibold">BlackBox</span>, and <span className="bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full font-semibold">MidJourney</span>.
          </span>
          <br />
          <span className="inline-block mt-3 animate-bounce">
            Always learning, always building, always ready to <span className="font-bold text-pink-500">collaborate</span> on exciting projects <span className="animate-bounce inline-block">🚀</span>
          </span>
        </p>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes about-blob1 {
            0%,100% { transform: scale(1) translateY(0);}
            50% { transform: scale(1.12) translateY(30px);}
          }
          .animate-about-blob1 {
            animation: about-blob1 7s ease-in-out infinite;
          }
          @keyframes about-blob2 {
            0%,100% { transform: scale(1) translateY(0);}
            50% { transform: scale(1.08) translateY(-20px);}
          }
          .animate-about-blob2 {
            animation: about-blob2 8s ease-in-out infinite;
          }
          @keyframes about-blob3 {
            0%,100% { transform: scale(1) translateX(0);}
            50% { transform: scale(1.1) translateX(-30px);}
          }
          .animate-about-blob3 {
            animation: about-blob3 9s ease-in-out infinite;
          }
          @keyframes about-title {
            0% { opacity: 0; transform: translateY(-40px) scale(0.95);}
            60% { opacity: 1; transform: translateY(10px) scale(1.05);}
            100% { opacity: 1; transform: translateY(0) scale(1);}
          }
          .animate-about-title {
            animation: about-title 1.2s cubic-bezier(.4,0,.2,1);
          }
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in-up {
            animation: fade-in-up 1.2s cubic-bezier(.4,0,.2,1);
          }
          @keyframes fade-in-down {
            from { opacity: 0; transform: translateY(-30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in-down {
            animation: fade-in-down 1.2s cubic-bezier(.4,0,.2,1);
          }
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 4s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}
