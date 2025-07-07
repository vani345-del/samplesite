import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-[#1A2f64] mb-12">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info + Map */}
          <div className="space-y-6 bg-blue-50 p-6 rounded-2xl shadow-md">
            <div>
              <h3 className="text-[#1A2F64] font-semibold">Phone</h3>
              <p className="text-gray-700">+91 123456</p>
            </div>
            <div>
              <h3 className="text-[#1A2F64] font-semibold">Email</h3>
              <p className="text-gray-700">youEmail@gmail.com.com</p>
            </div>
            <div>
              <h3 className="text-[#1A2F64] font-semibold">Address</h3>
              <p className="text-gray-700">
                123 Wellness Avenue, Healthy City, IN
              </p>
            </div>
            <div className="overflow-hidden rounded-lg">
              <iframe
                title="Hospital Location"
                src="https://maps.google.com/maps?q=hospital&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-48 border-0 rounded-md"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 bg-blue-50 p-6 rounded-2xl shadow-md">
            <div>
              <label className="block text-sm font-medium text-blue-800">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 w-full border border-blue-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-blue-800">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full border border-blue-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-blue-800">
                Appointment Type
              </label>
              <select
                name="appointment"
                required
                className="mt-1 w-full border border-blue-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-white"
              >
                <option value="">Select an option</option>
                <option value="general">General Check-up</option>
                <option value="dental">Dental</option>
                <option value="pediatric">Pediatric</option>
                <option value="cardiology">Cardiology</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-blue-800">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className="mt-1 w-full border border-blue-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
