import React from 'react';
import aboutImage from '../assets/hero.jpg'; // update this path if needed

const About = () => {
  return (
    <section className="w-full bg-white text-gray-800">
      {/* About Main Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 px-6 py-20 max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#1A2F64] leading-tight">
            Discover Healing with Compassion & Innovation
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
            Our hospital is a place where cutting-edge technology meets heartfelt care. 
            We prioritize your comfort, safety, and well-being with advanced facilities 
            and a team of compassionate professionals who walk with you every step of your journey.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            From diagnostics to recovery, we provide personalized healthcare services focused on outcomes that matter. 
            Trust us to be your partner in better health.
          </p>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={aboutImage}
            alt="Hospital Overview"
            className="w-full h-full object-cover rounded-2xl shadow-xl"
          />
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-indigo-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-[#1A2F64] mb-3">Our Mission</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              To empower lives through exceptional medical care, innovative treatments,
              and an unwavering commitment to patient well-being.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[#1A2F64] mb-3">Our Vision</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              To be a beacon of hope and healing, delivering world-class healthcare
              guided by compassion, technology, and trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
