import React from "react";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";

export default function Workshop() {
  const generalWorkshops = [
    {
      title: "Conflict Management",
      description:
        "Gain skills in conflict resolution by examining the causes of team conflict, learning to tackle them face-to-face, and using mediation techniques to ease disputes.",
      image: "conflict.png",
    },
    {
      title: "Time Management",
      description:
        "We teach individuals how to beat procrastination, manage distractions, prioritize tasks, and improve focus from our multitasking world.",
      image: "time.png",
    },
    {
      title: "Bibble knowledge and interpretation",
      description:
        "This module helps introduce project management for new entrepreneurs with confidence to grow their business.",
        image: "bible.png"
    },
    {
      title: "Personal Financial Management",
      description:
        "This is a great session for people who want to take control of money from paycheck to paycheck.",
        image: "finance.png"
    },
    {
      title: "Building Trust and respect",
      description:
        "Navigate your voice and relationships. Have the vision, skill and the unity to grow your brand.",
        image: "trust.png"
    },
  ];

  const leadershipWorkshops = [
    {
      title: "Effective Communication",
      description:
        "This session will help leaders build core communication skills, learn active listening, deliver clear messages, and provide feedback.",
      image: "leadership.png",
    },
    {
      title: "Multicultural Inclusion",
      description:
        "This session will help explore how a team becomes truly diverse, recognizing biases, creating an inclusive culture.",
      image: "multicultural.png",
    },
    {
      title: "Problem Solving & Critical Thinking",
      description:
        "We teach leaders strategic thinking, problem-solving techniques and decision-making frameworks that drive decisions.",
      image: "thinking.png",
    },
    {
      title: "Motivating & Encouraging Others",
      description:
        "This session targets leaders in every sector, and executives who want to learn how to mentor and grow their team.",
      image: "motivation.png",
    },
    {
      title: "Managing Change",
      description:
        "This module focuses on helping leaders understand and navigate organizational change, overcome team resistance to change.",
      image: "change.png",
    },
    {
      title: "Leading in Adversity",
      description:
        "This session is dedicated for leaders to learn how to navigate in difficult situations with grace and resilience.",
      image: "leadership.png",
    },
    {
      title: "Understanding Leadership Styles",
      description:
        "We teach different leadership models and help leaders identify their leadership styles and how to adapt.",
      image: "leading.png",
    },
  ];

  const testimonials = [
    {
      name: "Osinigwe Addison",
      title: "Program Director",
      text: "Working with him has made me focus more on the financial health of my business. He brings ideas to improve and sustain cash flow plans on every new Financial goals. He demonstrated how to harness an AI to align with the bigger picture of how I should use AI in the evolving leadership and business landscape.",
    },
    {
      name: "Chris Mak",
      title: "Professor",
      text: "Mr. Apampa created a positive trajectory in my academic success and career. His guidance, over 10 years, set me on a path for career advancement and personal development with confidence and poise.",
    },
    {
      name: "Phillip Loziot",
      title: "Client Success Associate",
      text: "Praise's expertise and insight came to me like a light in a tunnel. Help me work through big, overwhelming challenges and guided me through the need of a positive attitude. I learned to never let my guard down, work hard, and his Bible study's work on my confidence was the key to me.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      {/* <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-indigo-900">PA</div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-indigo-900">Home</a>
              <a href="#" className="text-gray-700 hover:text-indigo-900">About</a>
              <a href="#" className="text-indigo-900 font-semibold">In-Person Workshop</a>
              <a href="#" className="text-gray-700 hover:text-indigo-900">Podcasts</a>
              <a href="#" className="bg-indigo-900 text-white px-4 py-2 rounded">Contact</a>
            </div>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold italic mb-4">
            WORKSHOP
          </h1>
          <p className="text-sm mb-2">In This New World, There Will Be Those</p>
          <p className="text-sm mb-2">
            <span className="font-bold">Who Adopt It Tools</span> To Get Ahead
            And
          </p>
          <p className="text-sm">
            Those <span className="font-bold">Who Get Left Behind.</span>
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="relative bg-teal-900 h-64 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition">
                  <Play
                    className="text-indigo-900 ml-1"
                    size={24}
                    fill="currentColor"
                  />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 text-white text-sm">
                Workshop
              </div>
            </div>
            <div className="relative bg-teal-900 h-64 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition">
                  <Play
                    className="text-indigo-900 ml-1"
                    size={24}
                    fill="currentColor"
                  />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 text-white text-sm">
                Workshop
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-indigo-900 text-white px-6 py-2 rounded hover:bg-indigo-800">
              Watch More
            </button>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-2xl md:text-3xl text-gray-800 mb-4">
            "We are helping to build the 'help others' industry... And it starts
            with optimism."
          </p>
          <p className="text-sm text-gray-600">— Simon Sinek</p>
        </div>
      </section>

      {/* General Workshops */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif italic text-center mb-4">
            General Workshops
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Give your employees skills important enough to have their
            performance to the next level for on personal, business and
            leadership development.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {generalWorkshops.slice(0, 5).map((workshop, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {workshop.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {workshop.description}
                  </p>
                </div>
              </div>
              
            ))}
            
          </div>
           <div className="text-center">
            <Link to="/generalworkshop">
            <button className="bg-indigo-900 text-white px-6 py-2 rounded hover:bg-indigo-800">
              Learn More
            </button>
            </Link>
          </div>

          {/* <div className="grid md:grid-cols-2 gap-8">
            {generalWorkshops.slice(3).map((workshop, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="bg-gradient-to-br from-yellow-200 to-orange-300 h-48"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {workshop.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {workshop.description}
                  </p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Leadership Workshops */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif italic text-center mb-4">
            Leadership Workshops
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            There are leaders, and there are those who lead. These workshops are
            for you both to make them effective at whatever positions they find
            themselves.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {leadershipWorkshops.slice(0, 7).map((workshop, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {workshop.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {workshop.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
 <div className="text-center">
            <Link to="/leaderworkshop">
            <button className="bg-indigo-900 text-white px-6 py-2 rounded hover:bg-indigo-800">
              Learn More
            </button>
            </Link>
          </div>
          {/* <div className="grid md:grid-cols-3 gap-6">
            {leadershipWorkshops.slice(4).map((workshop, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="bg-gradient-to-br from-gray-300 to-gray-400 h-40"></div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {workshop.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {workshop.description}
                  </p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Hear what my clients have
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-center mb-12">
            said about my programs
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gray-200 rounded-lg p-8 relative">
                <div className="mb-4">
                  <h3 className="font-bold text-gray-900">
                    {testimonial.name},
                  </h3>
                  <p className="text-sm text-gray-700">{testimonial.title}</p>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-6">
                  {testimonial.text}
                </p>
                <div className="text-4xl font-serif">"</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-linear-to-r from-black to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
               <img
          src="/workshopimg.png"  
          alt="Workshop Presentation"
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
            </div>
            <div>
              <p className="text-sm leading-relaxed mb-6">
                Through my 20+ years of experience managing private business
                sectors and training services, I have committed my practice to
                helping people and establishments from diverse backgrounds, I've
                crafted{" "}
                <span className="font-bold">
                  leadership development workshops
                </span>{" "}
                to help them grow with confidence and reach their
                transformational potential.
              </p>
              <p className="text-sm leading-relaxed mb-6">
                My services produce{" "}
                <span className="font-bold">ground-breaking results</span> in
                B2B sales organizations, small start-ups, non-profits, and
                individuals looking to elevate their inner potential.
              </p>
              <p className="text-sm italic mb-6">
                If any of the above interest you,
                <br />I look forward to hearing from you soon
              </p>
            <button className="bg-white text-indigo-900 px-8 py-3 rounded font-semibold hover:bg-gray-100">
              Watch More
            </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
