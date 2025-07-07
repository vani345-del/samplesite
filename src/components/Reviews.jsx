import React from "react";

const TESTIMONIALS = [
  {
    name: "Sarah Williams",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    quote:
      "The doctors and staff were incredibly supportive and made me feel at ease during my treatment.",
  },
  {
    name: "Michael Brown",
    img: "https://randomuser.me/api/portraits/men/34.jpg",
    rating: 4,
    quote:
      "Clean facility, prompt appointments, and caring professionals. Highly recommend this hospital.",
  },
  {
    name: "Priya Patel",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    quote:
      "From diagnosis to recovery, everything was smooth and professional. Thank you!",
  },
];

export default function Reviews() {
  return (
    <section
      id="testimonials"            /*  <-- add id */
      className="bg-blue-50 py-20 px-6 animate-fade-in scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          What Our Patients Say
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-300 flex flex-col items-center text-center hover:shadow-2xl transition"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-white shadow mb-4"
              />
              <h4 className="text-lg font-semibold text-blue-700">{t.name}</h4>
              <div className="flex justify-center mt-1 mb-3">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <span key={idx} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 text-sm italic">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>

      {/* simple fade‑in keyframe */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.8s ease-out both; }
      `}</style>
    </section>
  );
}

