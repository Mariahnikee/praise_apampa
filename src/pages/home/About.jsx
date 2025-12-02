import React from 'react';
import { Play } from 'lucide-react';
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      {/* <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-bold text-indigo-900">PA</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-indigo-900 px-3 py-2 text-sm">
                Home
              </a>
              <a href="#about" className="text-gray-600 hover:text-indigo-900 px-3 py-2 text-sm">
                About
              </a>
              <a href="#workshop" className="text-gray-600 hover:text-indigo-900 px-3 py-2 text-sm">
                In-Person Workshop
              </a>
              <a href="#podcasts" className="text-gray-600 hover:text-indigo-900 px-3 py-2 text-sm">
                Podcasts
              </a>
              <a href="#contact" className="bg-indigo-900 text-white px-4 py-2 rounded text-sm hover:bg-indigo-800">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav> */}

     {/* Hero Section with Background Image */}
<div
  className="relative bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/about_hero.png')" }}
>
  <div className="bg-black/40 w-full h-full absolute inset-0"></div> {/* Dark overlay */}

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* Text */}
      <div className="text-white">
        <h2 className="text-5xl font-serif italic mb-8">My Story</h2>
      </div>

      {/* Empty right side (you can put content later) */}
      <div></div>

    </div>
  </div>
</div>


      {/* Introduction Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-gray-600 text-sm mb-4">
              One question that I'm often asked is - how did I become a pastor?<br />
              And how did my practice in the Christian faith transition into a career<br />
              of coaching and public speaking?
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
              Hi, I'm Dr.<br />
              <span className="font-serif italic">Praise<br />Apampa</span>
            </h3>
          </div>

          <div className="space-y-4 text-gray-700 text-sm leading-relaxed mb-8">
            <p>
              A caring husband and a proud father of three beautiful children. I love people and I'm naturally drawn to discover that divine them from their goals and keep them stuck. It is this passion for helping people discover their life's purpose through empowerment, guidance, encouragement, prayer and teachings inspired by the Word of God.
            </p>
            <p>
              Over my 20 years of experience ministering in church organizations and helping Christians make sense of life's purpose, I came to understand how to empower the people that I work with to embrace their strengths and uncover their hidden potential.
            </p>
            <p className="text-right italic">
              For me, that is why I decided to answer the call.
            </p>
          </div>

          <div className="flex justify-center">
            <button className="bg-indigo-900 text-white px-8 py-3 rounded flex items-center gap-2 hover:bg-indigo-800 transition-colors">
              <Play size={20} fill="white" />
              PLAY VIDEO
            </button>
          </div>
        </div>
      </div>

      {/* Transcendence Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/aboutimg.png" 
                alt="Person working at desk"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-5xl font-serif italic mb-4">Transcendence</h3>
              <h4 className="text-xl font-bold mb-6">I believe in the power of you.</h4>
              <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                <p>
                  The courage to believe in ourselves especially in times of hardship or harsh criticism is often lost in a void of self-doubt.
                </p>
                <p>
                  Yet, I believe we all have the potential to transcend beyond the walls we build around our goals that prevent us from becoming tenacious versions of ourselves.
                </p>
                <p>
                  It is why I aspire to enrich peoples' lives with empowerment and introspectiveness through leadership facilitation and coaching.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inclusion Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-5xl font-serif italic mb-4">Inclusion</h3>
              <h4 className="text-xl font-bold mb-6">I believe in empowering all.</h4>
              <div className="space-y-4 text-gray-700 text-sm leading-relaxed mb-8">
                <p>
                  I believe that God's graces, mercy, and love are stronger than hate. The values of Christianity can be spread through respect and appreciation for all whom He has created.
                </p>
                <p>
                  It is why God has empowered me to deliver training that resonates with people of all ages and backgrounds.
                </p>
                <p>
                  I minister to unite people on a common thread that weaves a world beautiful in love and service to others.
                </p>
              </div>
              <div className="text-center border-t border-b border-gray-300 py-4">
                <p className="text-sm italic text-gray-700">
                  "Encourage one another and build one another up..."<br />
                  <span className="font-semibold">Thessalonians 5:11</span>
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="/aboutimg2.png" 
                alt="Sunset with silhouette"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Devotion Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/aboutimg3.png" 
                alt="Two people reading together"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-5xl font-serif italic mb-4">Devotion</h3>
              <h4 className="text-xl font-bold mb-6">I believe in the grace of God.</h4>
              <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                <p>
                  Christianity isn't just a religion, it is a practice that lives, beats in our souls, and love in our hearts—and I believe it is all worth celebrating.
                </p>
                <p>
                  I feel inspired to channel God's love beyond the walls of sanctity and out into organizations and communities that need to feel his love, his energy, and his endless well of hope.
                </p>
                <p>
                  He gave me a voice, and it is why I devote my energy to helping vulnerable people with his message and feel that he has given us all a gift worth gratifying.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Donation Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-700 mb-8">
            I am raising donations for St. Children Research Hospital, to give back to<br />
            the community. If you are so led, click the button or image below
          </p>
          <div className="bg-gray-200 h-64 rounded-lg mb-8 flex items-center justify-center">
            <span className="text-gray-400">Donation Image/Banner</span>
          </div>
          <button className="border-2 border-gray-800 text-gray-800 px-8 py-2 rounded hover:bg-gray-800 hover:text-white transition-colors">
            GIVE
          </button>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-white text-lg mb-8">
            I look forward to helping you achieve your goals,<br />
            strive for greater heights, and elevate your leadership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-700 text-white px-8 py-3 rounded hover:bg-indigo-600 transition-colors">
              Free 30-Min Consultation
            </button>
            <button className="bg-indigo-700 text-white px-8 py-3 rounded hover:bg-indigo-600 transition-colors">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}