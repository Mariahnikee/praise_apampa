import React from 'react';
import { Play, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      {/* <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-indigo-900">PA</div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-indigo-900">Home</a>
              <a href="#" className="text-gray-700 hover:text-indigo-900">About</a>
              <a href="#" className="text-gray-700 hover:text-indigo-900">In-Person Workshop</a>
              <a href="#" className="text-gray-700 hover:text-indigo-900">Podcasts</a>
              <a href="#" className="bg-indigo-900 text-white px-4 py-2 rounded">Contact</a>
            </div>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="relative h-96 bg-linear-to-r from-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-serif italic mb-4">
                Praise Apampa / Praise depot
              </h1>
              <h2 className="text-2xl md:text-3xl font-light mb-2">
                Business and life coach;
              </h2>
              <h3 className="text-xl md:text-2xl mb-4">
                Dr. of Transformational Leadership
              </h3>
              <p className="text-sm mb-6 max-w-xl leading-relaxed">
                I believe in the power of your potential to inspire a change in bigger picture. I believe we are all unique, and we all have a role to play to impact the world in our unique ways. Together we can learn to leverage our unique gifts to maximize our potentials and transform our realities, I am available to partner with you on your transformational leadership journey to increase personal productivity and collective impact.
              </p>
              <button className="bg-indigo-900 hover:bg-indigo-800 text-white px-6 py-3 rounded">
                Free 30-Min Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <div className="bg-gray-200 h-64 rounded"></div>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-gray-700 leading-relaxed mb-4">
                At Grace & Mercy, we boldly plot emotional, mentally, broken and shattered individuals journey to a blessed and successful life. Our team of Life Coaches and Business Consultants are experts in creating tailor-made programs and strategies. After spending over 50 years collectively in clinical trainings and developing individuals and companies to be resilient. We have observed that most people do not need their minds fixed, they just need someone to walk their journey with them and together create a strategy map to success.
              </p>
              <button className="border border-gray-400 text-gray-700 px-6 py-2 rounded hover:bg-gray-100">
                Read more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif italic text-center mb-12">Learn About My Workshops</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="relative bg-teal-900 h-64 rounded-lg flex items-center justify-center">
              <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition">
                <Play className="text-indigo-900 ml-1" size={24} fill="currentColor" />
              </button>
            </div>
            <div className="relative bg-teal-900 h-64 rounded-lg flex items-center justify-center">
              <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition">
                <Play className="text-indigo-900 ml-1" size={24} fill="currentColor" />
              </button>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-indigo-900 text-white px-6 py-2 rounded hover:bg-indigo-800">
              Watch More
            </button>
          </div>
        </div>
      </section>

      {/* Choose Your Path Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif italic text-center mb-12">Choose Your Path</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: 'General Workshops', icon: '✱' },
              { title: 'Leadership Workshops', icon: '👥' },
              { title: 'Financial Consulting', icon: '👨‍💼' },
              { title: 'Executive Coaching', icon: '👤' }
            ].map((item, idx) => (
              <div key={idx} className="bg-indigo-900 text-white p-8 rounded-lg text-center hover:bg-indigo-800 transition cursor-pointer">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-serif italic">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audio Catalog Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif italic text-center mb-12">— Audio Catalog —</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-linear-to-br from-orange-400 to-pink-500 h-48"></div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="border border-gray-400 text-gray-700 px-6 py-2 rounded hover:bg-gray-100">
              See All Podcast
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif italic text-center mb-12">What People Say</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <div className="bg-linear-to-br from-orange-300 to-pink-400 h-48"></div>
                <div className="p-6">
                  <p className="text-sm text-gray-600 mb-4">
                    Praise Apampa's Coaching is light and very good research so well done and so easy to understand and is a must for anyone in recovery from childhood trauma. It's very emotional to watch.
                  </p>
                  <p className="text-xs text-indigo-900 font-semibold">— Someone Special</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="border border-gray-400 text-gray-700 px-6 py-2 rounded hover:bg-gray-100">
              Read more reviews
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            DARE TO BE<br />DIFFERENT?<br />Let's Talk
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-900 hover:bg-indigo-800 text-white px-8 py-3 rounded">
              Free 30-Min Consultation
            </button>
            <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded transition">
              Contact me
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-indigo-900">Praise Apampa</h3>
              <p className="text-sm text-gray-600">Dr. of Transformational Leadership</p>
            </div>
            <div className="text-center mb-4 md:mb-0">
              <p className="text-sm text-gray-600">© Praise Apampa 2025. All rights ©</p>
              <p className="text-xs text-gray-500">Praise Apampa, 102 Magic Ct, Austin, Tx, Austin,</p>
              <p className="text-xs text-gray-500">Texas 78734, United States</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-indigo-900"><Facebook size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-indigo-900"><Instagram size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-indigo-900"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-indigo-900"><Youtube size={20} /></a>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}