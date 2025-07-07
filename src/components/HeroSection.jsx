import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import heroImage from '../assets/hh.jpg'; // update if needed

const HeroSection = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.set(textRef.current, { autoAlpha: 0, x: -40 });
    gsap.timeline({ delay: 1 }).to(textRef.current, {
      autoAlpha: 1,
      x: 0,
      duration: 1.0,
      ease: 'power3.out',
    });
  }, []);

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* Responsive full‑bleed image */}
    <img
  src={heroImage}
  alt="Psychotherapy Hospital"
  className="
    absolute inset-0 w-full h-full
    object-cover
    object-[50%_20%]      /* Show more top on small */
    sm:object-[50%_30%]
    md:object-[50%_40%]
    lg:object-[50%_50%]
  "
/>


      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Animated text block */}
       <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Animated text block */}
      <div
        ref={textRef}
        className="
          absolute inset-0 z-10 flex flex-col justify-center items-start
          max-w-xl px-4 sm:px-6 md:px-8
          text-white
        "
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
          Your Health, Our Priority
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-50">
          Providing expert care and compassion every step of the way — for you and your family.
        </p>
      </div>

    </section>
  );
};

export default HeroSection;
