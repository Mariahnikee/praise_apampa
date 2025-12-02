import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-[#cae2e4]">
        <div className="flex justify-between items-center h-20 px-4 md:px-[180px]">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-indigo-900 hover:text-indigo-800">
           Praise Apampa
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10 text-gray-700 font-semibold">
            <Link to="/" className="hover:text-indigo-900 transition">
              Home
            </Link>
             <Link to="/about" className="hover:text-indigo-900 transition">
              About
            </Link>
            <Link to="/workshop" className="hover:text-indigo-900 transition">
              In-Person Workshop
            </Link>
             <Link to="/podcasts" className="hover:text-indigo-900 transition">
              Podcasts
            </Link>
          </nav>

          {/* CTA (desktop only) */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-indigo-900  text-white font-medium px-5 py-2 rounded-md hover:bg-indigo-800 transition"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 text-2xl"
            onClick={toggleMenu}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
            <Link
              to="/"
              className="block text-gray-700 hover:text-purple-600"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/"
              className="block text-gray-700 hover:text-purple-600"
              onClick={toggleMenu}
            >
              About
            </Link>
             <Link
              to="/about"
              className="block text-gray-700 hover:text-purple-600"
              onClick={toggleMenu}
            >
              In-Person Workshop
            </Link>
            <Link
              to="/workshop"
              className="block text-gray-700 hover:text-purple-600"
              onClick={toggleMenu}
            >
              Podcast
            </Link>
            <Link
              to="/podcast"
              className="block bg-purple-600 text-white px-4 py-2 rounded-lg text-center hover:bg-purple-700"
              onClick={toggleMenu}
            >
              Invite Dola
            </Link>
          </div>
        )}
      </header>

      {/* Spacer matching exact navbar height */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;