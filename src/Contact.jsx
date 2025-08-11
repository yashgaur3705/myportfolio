import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  // Form submit handler
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",   // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID",  // Replace with your EmailJS Template ID
        form.current,
        "YOUR_PUBLIC_KEY"    // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("✅ Message Sent Successfully!");
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          alert("❌ Something went wrong, try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 py-24 px-6 text-white overflow-hidden"
    >
      {/* Animated Gradient Blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-400 opacity-20 rounded-full blur-3xl animate-contact-blob1 z-0"></div>
      <div className="absolute -bottom-32 right-0 w-96 h-96 bg-yellow-300 opacity-20 rounded-full blur-3xl animate-contact-blob2 z-0"></div>
      <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-indigo-400 opacity-10 rounded-full blur-2xl animate-contact-blob3 z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-10 bg-gradient-to-r from-yellow-300 via-pink-400 to-indigo-400 bg-clip-text text-transparent animate-contact-title drop-shadow-lg">
          <span className="inline-block animate-bounce">💌</span> Contact Me
        </h2>

        {/* Contact Info */}
        <div className="mb-12 flex flex-col sm:flex-row justify-center items-center gap-6 animate-contact-fadein">
          <a
            href="mailto:ys.sharma3705@gmail.com"
            className="flex items-center gap-2 bg-gradient-to-r from-pink-500 via-yellow-400 to-indigo-400 px-8 py-4 rounded-full shadow-xl font-semibold text-lg text-white hover:scale-110 hover:shadow-pink-400/40 transition-all duration-300 animate-contact-btn"
          >
            <span className="text-2xl animate-bounce">✉️</span> Email Me
          </a>
          <a
            href="tel:+919509710730"
            className="flex items-center gap-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-8 py-4 rounded-full shadow-xl font-semibold text-lg text-white hover:scale-110 hover:shadow-green-400/40 transition-all duration-300 animate-contact-btn"
          >
            <span className="text-2xl animate-bounce">📞</span> Call Me
          </a>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="relative bg-white/90 text-gray-800 rounded-3xl shadow-2xl p-10 max-w-2xl mx-auto border border-indigo-100 animate-contact-form"
        >
          {/* Card Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-br from-pink-200 via-yellow-100 to-indigo-200 opacity-0 hover:opacity-40 blur-2xl transition duration-500 pointer-events-none z-0"></div>
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2 animate-contact-input">
                <label htmlFor="user_name" className="font-semibold text-indigo-700">Name</label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  placeholder="Your Name"
                  required
                  className="border border-indigo-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white/80 shadow transition-all duration-300 hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2 animate-contact-input" style={{ animationDelay: "0.1s" }}>
                <label htmlFor="user_email" className="font-semibold text-indigo-700">Email</label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  placeholder="Your Email"
                  required
                  className="border border-indigo-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white/80 shadow transition-all duration-300 hover:scale-105"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-8 animate-contact-input" style={{ animationDelay: "0.2s" }}>
              <label htmlFor="message" className="font-semibold text-indigo-700">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                rows="5"
                required
                className="w-full border border-indigo-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white/80 shadow transition-all duration-300 hover:scale-105 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-8 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 text-white px-10 py-3 rounded-full font-bold shadow-xl hover:scale-110 hover:shadow-pink-400/40 transition-all duration-300 animate-contact-btn"
            >
              <span className="inline-block animate-bounce">🚀</span> Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes contact-blob1 {
            0%,100% { transform: scale(1) translateY(0);}
            50% { transform: scale(1.12) translateY(20px);}
          }
          .animate-contact-blob1 {
            animation: contact-blob1 8s ease-in-out infinite;
          }
          @keyframes contact-blob2 {
            0%,100% { transform: scale(1) translateY(0);}
            50% { transform: scale(1.08) translateY(-20px);}
          }
          .animate-contact-blob2 {
            animation: contact-blob2 9s ease-in-out infinite;
          }
          @keyframes contact-blob3 {
            0%,100% { transform: scale(1);}
            50% { transform: scale(1.18);}
          }
          .animate-contact-blob3 {
            animation: contact-blob3 7s ease-in-out infinite;
          }
          @keyframes contact-title {
            0% { opacity: 0; transform: translateY(-40px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-contact-title {
            animation: contact-title 1.2s cubic-bezier(.4,0,.2,1);
          }
          @keyframes contact-fadein {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-contact-fadein {
            animation: contact-fadein 1.2s cubic-bezier(.4,0,.2,1);
          }
          @keyframes contact-btn {
            0% { opacity: 0; transform: scale(0.8);}
            100% { opacity: 1; transform: scale(1);}
          }
          .animate-contact-btn {
            animation: contact-btn 1.1s cubic-bezier(.4,0,.2,1);
          }
          @keyframes contact-form {
            0% { opacity: 0; transform: scale(0.95);}
            100% { opacity: 1; transform: scale(1);}
          }
          .animate-contact-form {
            animation: contact-form 1.2s cubic-bezier(.4,0,.2,1);
          }
          @keyframes contact-input {
            0% { opacity: 0; transform: translateY(20px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-contact-input {
            animation: contact-input 1.1s cubic-bezier(.4,0,.2,1);
          }
        `}
      </style>
    </section>
  );
}
