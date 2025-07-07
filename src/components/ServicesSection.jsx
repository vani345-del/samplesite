import React, { useEffect, useRef } from "react";

import checkupImg      from "../assets/chc.jpg";
import dentalImg       from "../assets/den.jpg";
import pediatricsImg   from "../assets/per.jpg";
import cardiologyImg   from "../assets/heart.jpg";
import neuroImg        from "../assets/neu.jpg";
import diagnosticsImg  from "../assets/dia.jpg";

const services = [
  { image: checkupImg,    icon: "🩺", title: "General Check‑up",
    desc: "Comprehensive physical evaluations, routine screenings, and preventive care tailored to all age groups." },
  { image: dentalImg,     icon: "🦷", title: "Dental Care",
    desc: "From cleanings and fillings to advanced cosmetic dentistry, we care for your complete dental health." },
  { image: pediatricsImg, icon: "👶", title: "Pediatrics",
    desc: "Specialized care for infants and children, with a gentle and compassionate approach to every little one." },
  { image: cardiologyImg, icon: "❤️", title: "Cardiology",
    desc: "Diagnosis, treatment, and management of heart conditions using modern tools and proven techniques." },
  { image: neuroImg,      icon: "🧠", title: "Neurology",
    desc: "Advanced neurology care for disorders affecting the brain, spine, and nervous system." },
  { image: diagnosticsImg,icon: "🧬", title: "Diagnostics",
    desc: "Accurate lab tests, pathology, and imaging (X‑ray, MRI, CT) to help diagnose faster and better." },
];

export default function ServicesSection() {
  const trackRef = useRef(null);

  /* ─────────── automated horizontal scroll ─────────── */
  useEffect(() => {
    const track = trackRef.current;
    const cards = Array.from(track.children);
    let index = 0;

    const scrollToCard = (i) => {
      const el = cards[i];
      if (el) track.scrollTo({ left: el.offsetLeft, behavior: "smooth" });
    };

    const id = setInterval(() => {
      index = (index + 1) % cards.length;
      scrollToCard(index);
    }, 3000);

    return () => clearInterval(id);
  }, []);

  return (
    <section id="services" className="py-20 bg-[#E1E9FF]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Expertise in Multiple Specialties
          <br className="hidden sm:inline" />
          <span className="block sm:inline">
            &nbsp;— Mastering Every Aspect of Health
          </span>
        </h2>

        <p className="text-gray-800 mb-12">
          We offer a wide range of expert services with compassion, professionalism,
          and cutting‑edge technology.
        </p>

        {/* ─────────── scroll‑snap track ─────────── */}
        <div
          ref={trackRef}
          className="
            flex gap-6 overflow-x-auto pb-4
            snap-x snap-mandatory scroll-smooth
            focus:outline-none
          "
          style={{ scrollbarWidth: "none" }}
        >
          {services.map(({ image, icon, title, desc }) => (
            <article
              key={title}
              tabIndex={0} /* makes cards keyboard‑focusable */
              className="
                flex-shrink-0
                w-[85%] xxs:w-[70%] sm:w-1/2 lg:w-1/3
                snap-center bg-white rounded-xl shadow-md
                transition hover:shadow-xl outline-none
              "
            >
              <img
                src={image}
                alt={title}
                className="h-48 w-full object-cover rounded-t-xl"
              />
              <div className="p-6 text-left">
                <div className="text-3xl mb-2">{icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-indigo-700 mb-2">
                  {title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* hide WebKit scroll‑bar only */}
      <style>{`
        #services::-webkit-scrollbar { display: none; }
        @media (min-width:480px)  { .xxs\\:w-\\[70%\\] { width:70%; } }
      `}</style>
    </section>
  );
}
