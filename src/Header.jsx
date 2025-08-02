import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      {/* Navbar */}
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-1 ">
        <img src="imgyash.png" alt="" className="h-15 w-10 rounded-full " />
        <h1 className="text-2xl font-bold">Yash Gaur</h1>

        </div>
       
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li><a href="#about" className="hover:text-gray-300">About</a></li>
          <li><a href="#skills" className="hover:text-gray-300">Skills</a></li>
          <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
          <li><a href="#education" className="hover:text-gray-300">Education</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <span className="text-3xl">&times;</span>
          ) : (
            <span className="text-3xl">&#9776;</span>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-indigo-700 text-center py-4 space-y-4">
          <li><a href="#about" className="block hover:text-gray-300">About</a></li>
          <li><a href="#skills" className="block hover:text-gray-300">Skills</a></li>
          <li><a href="#projects" className="block hover:text-gray-300">Projects</a></li>
          <li><a href="#education" className="block hover:text-gray-300">Education</a></li>
          <li><a href="#contact" className="block hover:text-gray-300">Contact</a></li>
        </ul>
      )}

      {/* Hero Section */}
      <div className="text-center py-20 px-6">
        <h2 className="text-5xl md:text-6xl font-bold">Frontend Developer & Web Designer</h2>
        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto">
          I create responsive, modern websites using React.js, Tailwind CSS, and AI tools.  
          Always learning new technologies and building exciting projects 🚀
        </p>
        <a
          href="#contact"
          className="mt-8 inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
}
