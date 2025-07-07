// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // ─── Detect scroll ────────────────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ─── Utility for link classes ────────────────────────────────────────────────
  const linkBase =
    "font-medium transition-colors duration-200";
  const linkScrolled =
    "text-[#1A2F64] hover:text-blue-600";
  const linkTop =
    "text-white hover:text-blue-200";

  // ─── Nav links config ────────────────────────────────────────────────────────
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Doctors", href: "#doctorsection" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* ─── Logo ─────────────────────────────────────────────────────────── */}
        <a
          href="#home"
          className={`text-2xl font-bold ${
            scrolled ? "text-[#1A2F64]" : "text-white"
          }`}
        >
          🏥 HealthCare+
        </a>

        {/* ─── Desktop nav ─────────────────────────────────────────────────── */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`${linkBase} ${
                scrolled ? linkScrolled : linkTop
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* ─── Mobile hamburger / close icon ───────────────────────────────── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden text-2xl focus:outline-none ${
            scrolled ? "text-blue-700" : "text-white"
          }`}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* ─── Mobile dropdown ─────────────────────────────────────────────── */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
