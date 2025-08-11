import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-gray-900 text-gray-200 py-10 overflow-hidden">
      {/* Animated Gradient Blobs */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-pink-500 opacity-20 rounded-full blur-3xl animate-footer-blob1 z-0"></div>
      <div className="absolute -bottom-20 right-0 w-80 h-80 bg-yellow-400 opacity-10 rounded-full blur-3xl animate-footer-blob2 z-0"></div>
      <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-indigo-500 opacity-10 rounded-full blur-2xl animate-footer-blob3 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side */}
        <p className="text-base mb-6 md:mb-0 font-medium tracking-wide flex items-center gap-2 animate-footer-fadein">
          <span className="text-xl animate-footer-wave">👋</span>
          <span>
            © {new Date().getFullYear()} <span className="font-bold bg-gradient-to-r from-yellow-300 via-pink-400 to-indigo-400 bg-clip-text text-transparent">Yash Gaur</span>
            <span className="mx-1 text-pink-400 animate-footer-heart">♥</span>
            All Rights Reserved.
          </span>
        </p>

        {/* Right Side - Social Links */}
        <div className="flex space-x-7 text-2xl">
          <FooterIcon
            href="https://github.com/"
            label="GitHub"
            icon={
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
              </svg>
            }
            color="hover:text-white hover:scale-125"
            anim="animate-footer-bounce"
          />
          <FooterIcon
            href="https://www.linkedin.com/in/yash-gaur-a4a69735a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            label="LinkedIn"
            icon={
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z"/>
              </svg>
            }
            color="hover:text-blue-400 hover:scale-125"
            anim="animate-footer-bounce"
          />
          <FooterIcon
            href="https://twitter.com/"
            label="Twitter"
            icon={
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.56c-.89.39-1.84.65-2.84.77a4.93 4.93 0 0 0 2.16-2.72c-.95.56-2 .97-3.13 1.19a4.92 4.92 0 0 0-8.39 4.48A13.97 13.97 0 0 1 1.67 3.15a4.92 4.92 0 0 0 1.52 6.57c-.8-.02-1.56-.25-2.22-.62v.06a4.93 4.93 0 0 0 3.95 4.83c-.39.11-.8.17-1.22.17-.3 0-.58-.03-.86-.08a4.93 4.93 0 0 0 4.6 3.42A9.87 9.87 0 0 1 0 21.54a13.94 13.94 0 0 0 7.56 2.22c9.05 0 14-7.5 14-14v-.64A9.94 9.94 0 0 0 24 4.56z"/>
              </svg>
            }
            color="hover:text-sky-400 hover:scale-125"
            anim="animate-footer-bounce"
          />
          <FooterIcon
            href="https://www.instagram.com/yashsharam3705/profilecard/?igsh=Z3E4Mnl6c3J0N3l5"
            label="Instagram"
            icon={
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41a4.92 4.92 0 0 1 1.77 1.03 4.92 4.92 0 0 1 1.03 1.77c.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43a4.92 4.92 0 0 1-1.03 1.77 4.92 4.92 0 0 1-1.77 1.03c-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41a4.92 4.92 0 0 1-1.77-1.03 4.92 4.92 0 0 1-1.03-1.77c-.17-.46-.354-1.26-.41-2.43C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43a4.92 4.92 0 0 1 1.03-1.77 4.92 4.92 0 0 1 1.77-1.03c.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.013 7.052.072 5.77.13 4.77.31 3.97.54a7.07 7.07 0 0 0-2.56 1.64A7.07 7.07 0 0 0 .54 4.03c-.23.8-.41 1.8-.47 3.08C.013 8.332 0 8.736 0 12c0 3.264.013 3.668.072 4.948.058 1.28.24 2.28.47 3.08a7.07 7.07 0 0 0 1.64 2.56 7.07 7.07 0 0 0 2.56 1.64c.8.23 1.8.41 3.08.47C8.332 23.987 8.736 24 12 24c3.264 0 3.668-.013 4.948-.072 1.28-.058 2.28-.24 3.08-.47a7.07 7.07 0 0 0 2.56-1.64 7.07 7.07 0 0 0 1.64-2.56c.23-.8.41-1.8.47-3.08.059-1.28.072-1.684.072-4.948 0-3.264-.013-3.668-.072-4.948-.058-1.28-.24-2.28-.47-3.08a7.07 7.07 0 0 0-1.64-2.56A7.07 7.07 0 0 0 20.03.54c-.8-.23-1.8-.41-3.08-.47C15.668.013 15.264 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.844-11.406a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
              </svg>
            }
            color="hover:text-pink-400 hover:scale-125"
            anim="animate-footer-bounce"
          />
        </div>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes footer-blob1 {
            0%,100% { transform: scale(1) translateY(0);}
            50% { transform: scale(1.15) translateY(20px);}
          }
          .animate-footer-blob1 {
            animation: footer-blob1 7s ease-in-out infinite;
          }
          @keyframes footer-blob2 {
            0%,100% { transform: scale(1) translateX(0);}
            50% { transform: scale(1.1) translateX(-30px);}
          }
          .animate-footer-blob2 {
            animation: footer-blob2 8s ease-in-out infinite;
          }
          @keyframes footer-blob3 {
            0%,100% { transform: scale(1) rotate(0deg);}
            50% { transform: scale(1.2) rotate(20deg);}
          }
          .animate-footer-blob3 {
            animation: footer-blob3 10s ease-in-out infinite;
          }
          @keyframes footer-bounce {
            0%,100% { transform: translateY(0);}
            50% { transform: translateY(-8px);}
          }
          .animate-footer-bounce {
            animation: footer-bounce 1.5s cubic-bezier(.4,0,.2,1) infinite;
          }
          @keyframes footer-fadein {
            from { opacity: 0; transform: translateY(20px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-footer-fadein {
            animation: footer-fadein 1.2s cubic-bezier(.4,0,.2,1) both;
          }
          @keyframes footer-wave {
            0%,100% { transform: rotate(0deg);}
            20% { transform: rotate(-15deg);}
            40% { transform: rotate(10deg);}
            60% { transform: rotate(-5deg);}
            80% { transform: rotate(5deg);}
          }
          .animate-footer-wave {
            display: inline-block;
            animation: footer-wave 2.2s infinite;
          }
          @keyframes footer-heart {
            0%,100% { transform: scale(1);}
            10% { transform: scale(1.3);}
            20% { transform: scale(1);}
          }
          .animate-footer-heart {
            display: inline-block;
            animation: footer-heart 1.5s infinite;
            color: #f472b6;
          }
        `}
      </style>
    </footer>
  );
}

// Social Icon Button Component
function FooterIcon({ href, label, icon, color, anim }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={`transition transform duration-300 ${color} ${anim} hover:drop-shadow-lg`}
      tabIndex={0}
    >
      {icon}
    </a>
  );
}
