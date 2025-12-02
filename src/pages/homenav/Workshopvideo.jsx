import React, { useState } from 'react';

export default function Workshopvideo() {
  const [activeNav, setActiveNav] = useState('');

  const videos = [
    { id: 1, title: 'Praise Apampa Workshop' },
    { id: 2, title: 'Praise Apampa Workshop' },
    { id: 3, title: 'Praise Apampa Workshop' },
    { id: 4, title: 'Praise Apampa Workshop' },
    { id: 5, title: 'Praise Apampa Workshop' },
    { id: 6, title: 'Praise Apampa Workshop' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      {/* <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-bold text-indigo-900">PA</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-indigo-900 px-3 py-2 text-sm font-medium">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-indigo-900 px-3 py-2 text-sm font-medium">
                About
              </a>
              <a href="#workshop" className="text-gray-700 hover:text-indigo-900 px-3 py-2 text-sm font-medium">
                In-Person Workshop
              </a>
              <a href="#podcasts" className="text-gray-700 hover:text-indigo-900 px-3 py-2 text-sm font-medium">
                Podcasts
              </a>
              <a href="#contact" className="bg-indigo-900 text-white px-4 py-2 rounded text-sm font-medium hover:bg-indigo-800">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <div 
        className="relative h-64 bg-cover bg-center flex items-center justify-center mt-"
        style={{
          backgroundImage: 'url(/hero2.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 "></div>
        <h2 className="relative text-5xl md:text-6xl text-white font-serif italic z-10">
          Workshops Videos
        </h2>
      </div>

      {/* Video Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="relative group">
              <div 
                className="relative h-64 bg-cover bg-center rounded-lg overflow-hidden shadow-lg"
                style={{
                  backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(/learn.png)',
                }}
              >
                {/* Dark overlay with palm pattern effect */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-teal-900/80 to-teal-800/80"></div> */}
                
                {/* Video title */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <p className="text-white text-sm font-medium">{video.title}</p>
                </div>

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl transform transition-transform group-hover:scale-110">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-gray-800 border-b-8 border-b-transparent ml-1"></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-linear-to-r from-black to-indigo-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-white text-lg mb-2">
            I look forward to helping you achieve your goals,
          </p>
          <p className="text-white text-lg mb-8">
            strive for greater heights, and elevate your leadership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-800 text-white px-8 py-3 rounded font-medium hover:bg-indigo-700 transition-colors">
              Free 30-Min Consultation
            </button>
            <button className="bg-indigo-800 text-white px-8 py-3 rounded font-medium hover:bg-indigo-700 transition-colors">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}