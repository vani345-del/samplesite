import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import heroImage from '../assets/hh.jpg'; // update if needed

const HeroSection = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.set(textRef.current, { autoAlpha: 0, y: 40 });
    gsap.timeline({ delay: 0.5 }).to(textRef.current, {
      autoAlpha: 1,
      y: 0,
      duration: 1.2,
      ease: 'power3.out',
    });
  }, []);

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Psychotherapy Hospital"
        className="
          absolute inset-0 w-full h-full
          object-cover
          object-[50%_20%]
          sm:object-[50%_30%]
          md:object-[50%_40%]
          lg:object-[50%_50%]
        "
      />

      {/* Optional overlay for contrast */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Text Block - Now centered and larger on mobile */}
      <div
        ref={textRef}
        className="
          absolute inset-0 z-10 flex flex-col justify-center items-center
          text-center px-6 sm:px-8
          text-white
          
        "
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight drop-shadow-md">
          Your Health, Our Priority
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-100 max-w-2xl drop-shadow-sm">
          Providing expert care and compassion every step of the way — for you and your family.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
