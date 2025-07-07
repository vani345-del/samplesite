import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-teal-50 text-gray-700 pt-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 pb-10">
        {/* Logo & About */}
        <div>
          <h3 className="text-2xl font-bold text-[#1A2F64] mb-4">HealthCare+</h3>
          <p className="text-sm text-gray-600">
            Your trusted partner in wellness. Providing compassionate care with advanced medical technology.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-[#1A2F64] mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-teal-700">Home</a></li>
            <li><a href="#services" className="hover:text-teal-700">Services</a></li>
            <li><a href="#team" className="hover:text-teal-700">Doctors</a></li>
            <li><a href="#testimonials" className="hover:text-teal-700">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-teal-700">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-[#1A2F64] mb-4">Contact</h4>
          <p className="text-sm text-gray-600">123 Wellness Avenue, Healthy City, IN</p>
          <p className="text-sm mt-2 text-gray-600">Phone: +91 98765 43210</p>
          <p className="text-sm text-gray-600">Email: support@healthcare.com</p>
          <div className="flex space-x-4 mt-4 text-teal-700 text-xl">
            <a href="#"><FaFacebook className="hover:text-teal-500" /></a>
            <a href="#"><FaInstagram className="hover:text-teal-500" /></a>
            <a href="#"><FaTwitter className="hover:text-teal-500" /></a>
            <a href="#"><FaLinkedin className="hover:text-teal-500" /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-teal-100 text-center text-sm text-[#1A2F64] py-4">
        &copy; {new Date().getFullYear()} HealthCare+. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
