import React from "react";
import { Link } from "react-router-dom";
import { Play, Facebook, Instagram, Linkedin, Youtube, Target } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] md:h-[60vh] lg:h-[80vh] bg-fixed bg-center text-white flex items-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        {/* Overlay for better text readability */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center md:justify-end">
            <div className="max-w-2xl text-center md:text-right py-12 md:py-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif italic mb-4 md:mb-6 leading-tight">
                Praise Apampa / Praise depot
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-2">
                Business and life coach;
              </h2>
              <h3 className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8">
                Dr. of Transformational Leadership
              </h3>
              <p className="text-sm sm:text-base mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto md:mx-0 md:ml-auto">
                I believe in the power of your potential to inspire a change in
                bigger picture. I believe we are all unique, and we all have a
                role to play to impact the world in our unique ways. Together we
                can learn to leverage our unique gifts to maximize our
                potentials and transform our realities, I am available to
                partner with you on your transformational leadership journey to
                increase personal productivity and collective impact.
              </p>
              <button className="bg-indigo-900 hover:bg-indigo-800 text-white px-6 sm:px-8 py-3 rounded transition-colors duration-300 text-sm sm:text-base">
                Free 30-Min Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full md:w-1/3">
              <div
                className="h-64 md:h-80 rounded-lg bg-cover bg-center"
                style={{ backgroundImage: "url('hero_overlay.png')" }}
              ></div>
            </div>

            <div className="w-full md:w-2/3">
              <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                At Grace & Mercy, we boldly plot emotional, mentally, broken and
                shattered individuals journey to a blessed and successful life.
                Our team of Life Coaches and Business Consultants are experts in
                creating tailor-made programs and strategies. After spending
                over 50 years collectively in clinical trainings and developing
                individuals and companies to be resilient. We have observed that
                most people do not need their minds fixed, they just need
                someone to walk their journey with them and together create a
                strategy map to success.
              </p>
              <Link to="/about">
              <button className="border border-gray-400 text-gray-700 px-6 py-2 rounded hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base">
                Read more
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-center mb-8 md:mb-12">
            Learn About My Workshops
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-8">
            <div className="relative bg-teal-900 h-56 md:h-64 lg:h-72 rounded-lg flex items-center justify-center">
              <button className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Play
                  className="text-indigo-900 ml-1"
                  size={24}
                  fill="currentColor"
                />
              </button>
            </div>
            <div className="relative bg-teal-900 h-56 md:h-64 lg:h-72 rounded-lg flex items-center justify-center">
              <button className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Play
                  className="text-indigo-900 ml-1"
                  size={24}
                  fill="currentColor"
                />
              </button>
            </div>
          </div>
          <div className="text-center">
            <Link to="/generalworkshop">
            <button className="bg-indigo-900 text-white px-6 md:px-8 py-2 md:py-3 rounded hover:bg-indigo-800 transition-colors duration-300 text-sm sm:text-base">
              Watch More
            </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Choose Your Path Section */}
     <section className="py-12 md:py-16 lg:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-center mb-8 md:mb-12">
      Choose Your Path
    </h2>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
  {[
    { title: "General Workshops", icon: "/workshop_icon.png", path: "/generalworkshop" },
    { title: "Leadership Workshops", icon: "/leadership_icon.png", path: "/leaderworkshop" },
    { title: "Financial Consulting", icon: "/financial_icon.png", path: "https://www.wealthpcp.com/services" },
    { title: "Executive Coaching", icon: "/executive_icon.png", path: "/contact" },
  ].map((item, idx) => (
    <Link to={item.path} key={idx}>
      <div
        className="bg-indigo-900 text-white p-6 md:p-8 rounded-lg text-center hover:bg-indigo-800 transition-colors duration-300 cursor-pointer"
      >
        <img
          src={item.icon}
          alt={item.title}
          className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 object-contain"
        />
        <h3 className="font-serif italic text-sm sm:text-base">{item.title}</h3>
      </div>
    </Link>
  ))}
</div>

  </div>
</section>


      {/* Audio Catalog Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-center mb-8 md:mb-12">
            — Audio Catalog —
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-linear-to-br from-orange-400 to-pink-500 h-40 sm:h-48"></div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/podcasts">
            <button className="border border-gray-400 text-gray-700 px-6 md:px-8 py-2 md:py-3 rounded hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base">
              See All Podcast
            </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-center mb-8 md:mb-12">
            What People Say
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="bg-linear-to-br from-orange-300 to-pink-400 h-40 sm:h-48"></div>
                <div className="p-4 md:p-6">
                  <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                    Praise Apampa's Coaching is light and very good research so
                    well done and so easy to understand and is a must for anyone
                    in recovery from childhood trauma. It's very emotional to
                    watch.
                  </p>
                  <p className="text-xs text-indigo-900 font-semibold">
                    — Someone Special
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="border border-gray-400 text-gray-700 px-6 md:px-8 py-2 md:py-3 rounded hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base">
              Read more reviews
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 leading-tight">
            DARE TO BE
            <br />
            DIFFERENT?
            <br />
            Let's Talk
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="contact">
            <button className="bg-indigo-900 hover:bg-indigo-800 text-white px-6 md:px-8 py-3 rounded transition-colors duration-300 text-sm sm:text-base">
              Free 30-Min Consultation
            </button>
            </Link>
            <Link to="contact">
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-6 md:px-8 py-3 rounded transition-all duration-300 text-sm sm:text-base">
              Contact me
            </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
