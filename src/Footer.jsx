import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side */}
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} <span className="font-semibold">Yash Gaur</span>. All Rights Reserved.
        </p>

        {/* Right Side - Social Links */}
        <div className="flex space-x-6 text-xl">
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/yash-gaur-a4a69735a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a 
            href="https://twitter.com/" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a 
            href="https://www.instagram.com/yashsharam3705/profilecard/?igsh=Z3E4Mnl6c3J0N3l5" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
