import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#E9D9F2] text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Newsletter Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h3>
            <form className="flex mb-6 max-w-[24px]">
              <input
                type="email"
                placeholder="Your email address"
                required
                className="flex-1 px-3 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              />
              <button
                type="submit"
                className="bg-purple-600 text-white px-4 py-2 rounded-r-md hover:bg-purple-700 transition flex items-center justify-center"
              >
                <span className="sr-only">Subscribe</span>
                <Mail className="h-4 w-4" />
              </button>
            </form>

            <div className="flex space-x-4">
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/events" className="text-black hover:text-purple-600 transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="/bookings" className="text-black hover:text-purple-600 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/events" className="text-black hover:text-purple-600 transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="/resources" className="text-black hover:text-purple-600 transition-colors">
                  Books & Articles
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-[#F97D1C]" />
                <span className="text-black">+1 (713) 391-6468</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-[#F97D1C]" />
                <span className="text-black">info@dolacounseling.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-[#F97D1C]" />
                <span className="text-black">Your City, State</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 text-center">
          <div className="w-86 mx-auto border-t border-purple-700 mb-4"></div>
          <p className="text-gray-500">© 2025 Dola Nancy Bankole. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
