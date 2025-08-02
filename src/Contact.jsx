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
      className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20 px-6 text-white"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>

        {/* Contact Info */}
        <div className="mb-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="mailto:ys.sharma3705@gmail.com"
            className="bg-purple-600 px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition"
          >
            ✉️ Email Me
          </a>
          <a
            href="tel:+919509710730"
            className="bg-green-600 px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
          >
            📞 Call Me
          </a>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white text-gray-800 rounded-xl shadow-lg p-8 max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="w-full mt-6 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>

          <button
            type="submit"
            className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            🚀 Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
