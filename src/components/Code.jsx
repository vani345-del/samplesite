// src/components/HospitalHighlights.jsx
import {
  ClockIcon,
  CpuChipIcon,
  HeartIcon,
  BeakerIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";   // All of these exist in Heroicons v2+

const features = [
  {
    title: "24/7 Emergency",
    description: "Always available to handle urgent medical needs.",
    icon: ClockIcon,
  },
  {
    title: "Advanced Technology",
    description: "State‑of‑the‑art diagnostics & equipment.",
    icon: CpuChipIcon,
  },
  {
    title: "Specialized Treatments",
    description: "Tailored care across a wide range of specialties.",
    icon: BeakerIcon,
  },
  {
    title: "Compassionate Care",
    description: "We treat every patient like family.",
    icon: HeartIcon,
  },
  {
    title: "Experienced Professionals",
    description: "Highly skilled doctors, nurses, and support staff.",
    icon: UserGroupIcon,
  },
];

const Code = () => (
  <section className="bg-[#E1E9FF] py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-[#1A2F64] mb-12">
        
      </h2>

      {/* Feature cards */}
      <div
        className="
          grid gap-8
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          xl:grid-cols-5
        "
      >
        {features.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="
              bg-white rounded-xl shadow-md p-6 text-center
              hover:shadow-lg transition
            "
          >
            <div
              className="
                flex items-center justify-center
                w-16 h-16 mx-auto mb-4
                bg-[#1A2F64] text-white rounded-full
              "
            >
              {/* Decorative icon */}
              <Icon className="w-8 h-8" aria-hidden="true" />
            </div>

            <h3 className="text-lg font-semibold text-[#1A2F64]">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">{description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Code;
