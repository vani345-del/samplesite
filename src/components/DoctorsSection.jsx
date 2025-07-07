// src/components/DoctorsSection.jsx
import React from "react";
import doc1 from "../assets/doc1.jpg";
import doc2 from "../assets/doc2.jpg";
import doc3 from "../assets/doc.3.jpg"; // (fixed typo in filename)

const DOCTORS = [
  {
    name: "Dr. Alice Smith",
    specialty: "Cardiologist",
    img: doc1,
    bio: "Passionate about heart health with 10+ years of experience in cardiology.",
  },
  {
    name: "Dr. John Doe",
    specialty: "Pediatrician",
    img: doc2,
    bio: "Caring pediatrician dedicated to children’s well‑being.",
  },
  {
    name: "Dr. Emily Brown",
    specialty: "Dentist",
    img: doc3,
    bio: "Expert in cosmetic and preventive dental care.",
  },
];

export default function DoctorsSection() {
  return (
    <section
      id="doctorsection"
      className="py-20 bg-white text-gray-800 animate-fade-up"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#1A2F64] mb-12">
          Meet&nbsp;Our&nbsp;Doctors
        </h2>

        {/* Card grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {DOCTORS.map((doc) => (
            <article
              key={doc.name}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition
                         transform hover:-translate-y-1 p-6 flex flex-col items-center"
            >
              {/* Photo */}
              <div className="w-full h-60 bg-gray-200 rounded-xl overflow-hidden mb-5">
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Details */}
              <h3 className="text-lg font-semibold text-gray-900 text-center">
                {doc.name}
              </h3>
              <p className="text-sm text-indigo-600">{doc.specialty}</p>
              <p className="mt-3 text-sm text-gray-600 text-center leading-relaxed">
                {doc.bio}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Simple keyframe fade‑up */}
      <style>{`
        @keyframes fadeUp {
          0%   { opacity:0; transform:translateY(40px); }
          100% { opacity:1; transform:translateY(0); }
        }
        .animate-fade-up { animation: fadeUp 0.9s ease-out both; }
      `}</style>
    </section>
  );
}
