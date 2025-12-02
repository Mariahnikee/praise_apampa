import React from "react";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";

export default function Podcasts() {
  const podcasts = [
    {
      title: "Find middle ground amidst the turbulence of life",
      image: "/leadership.png",
    },
    {
      title: "Willing to Say More",
      image: "/multicultural.png",
    },
    {
      title: "Is it said but not enough",
      image: "/thinking.png",
    },
    {
      title: "Your beginnings and how it has grown",
      image: "/motivation.png",
    },
    {
      title: "It takes a moment to notice it, a season and we'll see its effect",
      image: "/change.png",
    },
    {
      title: "The comfort and the concern",
      image: "/leadership.png",
    },
    {
      title: "It can't always be and so prove",
      image: "/leading.png",
    },
    {
      title: "For folks of equal rank and place",
      image: "/leadership.png",
    },
    {
      title: "For lack of equal the kind path is all we possess of future results",
      image: "/multicultural.png",
    },
    {
      title: "I cannot ever blessings, money cannot buy",
      image: "/thinking.png",
    },
    {
      title: "For wrathful, just in one pot glorified",
      image: "/motivation.png",
    },
    {
      title: "Remember: the story behind the glory",
      image: "/change.png",
    },
    {
      title: "The thinking of rich and weary",
      image: "/leadership.png",
    },
    {
      title: "From power best to wisdom best",
      image: "/leading.png",
    },
    {
      title: "The constant and the conscious",
      image: "/leadership.png",
    },
    {
      title: "Remember: the story behind the glory",
      image: "/multicultural.png",
    },
    {
      title: "Remember: the young behind the glory",
      image: "/thinking.png",
    },
    {
      title: "Remember: the young behind the glory",
      image: "/motivation.png",
    },
    {
      title: "Remember: the young behind the glory",
      image: "/change.png",
    },
    {
      title: "Remember: the young behind the glory",
      image: "/leadership.png",
    },
    {
      title: "Remember: the story behind the glory",
      image: "/leading.png",
    },
    {
      title: "Remember: the story behind the glory",
      image: "/leadership.png",
    },
    {
      title: "Remember: the young behind the glory",
      image: "/multicultural.png",
    },
    {
      title: "Remember: the young behind the glory",
      image: "/thinking.png",
    },
    {
      title: "Remember: the story behind the glory",
      image: "/motivation.png",
    },
    {
      title: "Remember: the story behind the glory",
      image: "/change.png",
    },
    {
      title: "Remember: the story behind the glory",
      image: "/leadership.png",
    },
    {
      title: "Remember: the young behind the glory",
      image: "/leading.png",
    },
    {
      title: "Remember: the story behind the glory",
      image: "/leadership.png",
    },
    {
      title: "Remember: the story behind the glory",
      image: "/multicultural.png",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-indigo-950 to-indigo-900">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-bold italic mb-4">
            PODCASTS
          </h1>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-indigo-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="text-white">
            <span className="text-sm">Select by Theme •</span>
          </div>
          <button className="text-white text-sm underline hover:text-indigo-300 transition-colors">
            See All
          </button>
        </div>
      </section>

      {/* Podcasts Grid */}
      <section className="py-12 bg-linear-to-b from-indigo-950 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {podcasts.map((podcast, idx) => (
              <div
                key={idx}
                className="group relative bg-linear-to-br from-gray-300 to-gray-400 rounded-lg overflow-hidden aspect-square cursor-pointer transition-transform hover:scale-105"
              >
                {/* Overlay with play button */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-16 h-16 text-white fill-white" />
                  </div>
                </div>
                
                {/* Title at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-black to-transparent">
                  <p className="text-white text-xs italic font-light leading-tight">
                    {podcast.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            DARE TO BE DIFFERENT?
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            Let's Talk
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded hover:bg-white hover:text-black transition-colors font-semibold">
              Free 30-Min Consultation
            </button>
            <button className="bg-indigo-700 text-white px-8 py-3 rounded hover:bg-indigo-800 transition-colors font-semibold">
              Contact me
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}