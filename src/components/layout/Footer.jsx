import React from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Brand */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-bold text-indigo-900">Praise Apampa</h3>
            <p className="text-sm text-gray-600">Dr. of Transformational Leadership</p>
          </div>

          {/* Address & Copyright */}
          <div className="text-center mb-4 md:mb-0">
            <p className="text-sm text-gray-600">© Praise Apampa 2025. All rights ©</p>
            <p className="text-xs text-gray-500">Praise Apampa, 102 Magic Ct, Austin, Tx, Austin,</p>
            <p className="text-xs text-gray-500">Texas 78734, United States</p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-indigo-900">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-900">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-900">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-900">
              <Youtube size={20} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
