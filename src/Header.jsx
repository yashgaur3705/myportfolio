import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Animation classes for menu and hero
  const navLinkBase = "relative transition-all duration-300 hover:text-yellow-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-0.5 after:bg-yellow-300 after:transition-all after:duration-300";
  const heroTextGradient = "bg-gradient-to-r from-yellow-300 via-pink-400 to-indigo-500 bg-clip-text text-transparent animate-gradient-x";
  const buttonAnim = "relative overflow-hidden group";
  const buttonSpan = "absolute left-0 top-0 w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition duration-300 blur-sm";
  const buttonText = "relative z-10";

  // Fallback image URL (public folder)
  const fallbackProfile = "/imgyash.png";

  // State to handle image error
  const [imgSrc, setImgSrc] = useState(fallbackProfile);

  return (
    <header className="bg-gradient-to-r from-purple-700 via-indigo-700 to-indigo-900 text-white shadow-2xl animate-fade-in">
      {/* Navbar */}
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="relative group">
            <img
              src={imgSrc}
              alt="imgyash"
              className="h-20 w-16 rounded-full border-4 border-yellow-300 shadow-lg transform group-hover:scale-110 transition duration-300 bg-white object-cover"
              onError={() => setImgSrc("https://ui-avatars.com/api/?name=Yash+Gaur&background=FDE68A&color=312E81&size=128")}
            />
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs bg-yellow-300 text-indigo-900 px-2 py-0.5 rounded-full font-bold shadow group-hover:scale-110 transition duration-300">Yash</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-300 via-pink-400 to-indigo-500 bg-clip-text text-transparent animate-gradient-x drop-shadow-lg ml-2">
            Yash Gaur
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-lg font-semibold">
          <li><a href="#about" className={navLinkBase}>About</a></li>
          <li><a href="#skills" className={navLinkBase}>Skills</a></li>
          <li><a href="#projects" className={navLinkBase}>Projects</a></li>
          <li><a href="#education" className={navLinkBase}>Education</a></li>
          <li><a href="#contact" className={navLinkBase}>Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="text-3xl transition-transform duration-300" style={{ transform: menuOpen ? "rotate(90deg)" : "rotate(0deg)" }}>
            {menuOpen ? <>&times;</> : <>&#9776;</>}
          </span>
        </button>
      </nav>

      {/* Mobile Menu with animation */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-indigo-900/90 z-40 transition-all duration-500 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ backdropFilter: menuOpen ? "blur(4px)" : "none" }}
      >
        <ul className={`flex flex-col items-center justify-center h-full space-y-8 text-2xl font-bold transition-all duration-500 ${menuOpen ? "translate-y-0" : "-translate-y-10"}`}>
          <li><a href="#about" className="hover:text-yellow-300 transition" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#skills" className="hover:text-yellow-300 transition" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" className="hover:text-yellow-300 transition" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#education" className="hover:text-yellow-300 transition" onClick={() => setMenuOpen(false)}>Education</a></li>
          <li><a href="#contact" className="hover:text-yellow-300 transition" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>

      {/* Hero Section */}
      <div className="relative text-center py-24 px-6 overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-yellow-300 via-pink-400 to-indigo-500 opacity-20 rounded-full blur-3xl animate-pulse-slow z-0"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-400 opacity-10 rounded-full blur-2xl animate-bounce-slow z-0"></div>
        <div className="relative z-10">
          <h2 className={`text-5xl md:text-6xl font-extrabold mb-4 ${heroTextGradient} animate-fade-in-down`}>
            Frontend Developer  &  Web Designer
          </h2>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-white/90 animate-fade-in-up">
            I create <span className="font-bold text-yellow-300">responsive</span>, <span className="font-bold text-pink-300">modern</span> websites using <span className="font-bold text-indigo-300">React.js</span>, <span className="font-bold text-pink-200">Tailwind CSS</span>, and <span className="font-bold text-yellow-200">AI tools</span>.<br />
            Always learning new technologies and building exciting projects <span className="animate-bounce inline-block">🚀</span>
          </p>
          <a
            href="#contact"
            className={`mt-10 inline-block px-8 py-3 rounded-full font-bold text-lg shadow-xl bg-white text-indigo-700 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-500 transition-all duration-300 ${buttonAnim} animate-fade-in-up`}
          >
            <span className={buttonSpan}></span>
            <span className={buttonText}>Contact Me</span>
          </a>
        </div>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 4s ease-in-out infinite;
          }
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fade-in {
            animation: fade-in 1.2s ease;
          }
          @keyframes fade-in-down {
            from { opacity: 0; transform: translateY(-30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in-down {
            animation: fade-in-down 1.2s cubic-bezier(.4,0,.2,1);
          }
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in-up {
            animation: fade-in-up 1.2s cubic-bezier(.4,0,.2,1);
          }
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.2; transform: scale(1);}
            50% { opacity: 0.4; transform: scale(1.1);}
          }
          .animate-pulse-slow {
            animation: pulse-slow 6s ease-in-out infinite;
          }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0);}
            50% { transform: translateY(-20px);}
          }
          .animate-bounce-slow {
            animation: bounce-slow 4s infinite;
          }
          @keyframes wiggle {
            0%, 100% { transform: rotate(-5deg);}
            50% { transform: rotate(5deg);}
          }
          .animate-wiggle {
            animation: wiggle 1.2s infinite;
            display: inline-block;
          }
        `}
      </style>
    </header>
  );
}
