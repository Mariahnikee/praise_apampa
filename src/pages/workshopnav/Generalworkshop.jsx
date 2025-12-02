import React from "react";
import { Link } from "react-router-dom";

// Reusable Workshop Section Component
const WorkshopSection = ({ title, description, image, outcomes, reverseLayout = false }) => (
  <section className="py-16 bg-linear-to-b from-gray-50 to-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title and Description */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-lg text-gray-600 max-w-4xl">{description}</p>
      </div>

      {/* Image and Outcomes Grid */}
      <div className={`grid md:grid-cols-2 gap-12 items-center ${reverseLayout ? 'md:flex-row-reverse' : ''}`}>
        {/* Image */}
        <div className={`flex justify-center ${reverseLayout ? 'md:order-2' : ''}`}>
          <img
            src={image}
            alt={title}
            className="w-full max-w-md h-auto rounded-lg shadow-xl object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className={reverseLayout ? 'md:order-1' : ''}>
          <h2 className="text-4xl font-serif italic mb-6 text-gray-900">
            COURSE OUTCOMES
          </h2>
          <p className="text-gray-700 mb-6 font-medium">
            At the end of this program, participants will:
          </p>
          <ul className="space-y-4 text-gray-700">
            {outcomes.map((outcome, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 text-indigo-600 font-bold">•</span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default function Generalworkshop() {
  const workshops = [
    {
      title: "CONFLICT RESOLUTION",
      description: "This session will help you examine the nature of crises and develop a deeper understanding of where they come from, how they evolve, and what you can do about them.",
      image: "/conflict.png",
      outcomes: [
        "Use conflict resolution strategies to remain unbiased when resolving issues in the church.",
        "Analyze conflicts and apply suitable resolution methods through the word of God.",
        "Apply steps used in clarifying conflict while depending on the Holy Spirit.",
        "Understand the psychology of human behaviors and what the word of God says about it.",
        "Use communication as a tool to resolve conflict in Christian organizations.",
        "Understand the basic elements of conflicts and how to scripturally avoid them.",
        "The impact of perception and assumptions in conflict."
      ]
    },
    {
      title: "TIME MANAGEMENT",
      description: "This session will encourage church leaders, workers, and members to work smarter, and not harder. The idea is to help them work on their management skills to produce more sustainable and high-quality work in less time for maximum effectiveness.",
      image: "/time.png",
      outcomes: [
        "Use priority listing methods to effectively manage time.",
        "Identify and apply time management and productivity strategies, techniques, and hacks.",
        "Build a personalized productivity system.",
        "Plan daily, weekly and long-term work and goals to save time and reduce stress.",
        "Take control of their mindset and energy to increase productivity."
      ]
    },
    {
      title: "BIBLICAL KNOWLEDGE & INTERPRETATION",
      description: "This session helps students to learn Bible study strategies, principles of interpretation, and principles of application, careful observation of the text leading to sound interpretation and appropriate application.",
      image: "/time.png",
      outcomes: [
        "Understand the two testaments in the Bible.",
        "Identify and apply time management and productivity strategies, techniques, and hacks.",
        "Understand beyond the surface of biblical texts and passages.",
        "Develop creative explanations for biblical texts.",
        "Understand and apply the principles of interpretation and application."
      ]
    },
    {
      title: "BUILDING TRUST & RESPECT",
      description: "Respect and trust are reciprocal. Once gone, respect and trust are very difficult to regain. In order to effectively communicate with others, engage with them, and achieve our goals, we need to have their trust and respect. It is the cornerstone of success in life and a necessary component for creating long-lasting bonds and partnerships.",
      image: "/trust.png",
      outcomes: [
        "Implementing communication techniques to increase respect and trust.",
        "Restoring lost respect and broken trust.",
        "Methods for fostering respect and fostering trust.",
        "Setting boundaries while fostering respect and trust.",
      ]
    },
     {
      title: "PERSONAL FINANCIAL MANAGEMENT",
      description: "This is a great session for people who want to learn how to manage their personal finances. Students will learn about analyzing spending habits, setting clear financial goals, learning different budgeting options, discussing debt repayment choices, and background on investing options.",
      image: "/finance.png",
      outcomes: [
        "Differentiate between corporate finance and personal finance as a believer.",
        "Set personal finance goals through personalized money plans.",
        "Understand money managing skills..",
        "Create a budget and stick to it.",
        "Master personal finance.",
        "Reduce loans and credit card debt.",
        "Develop a biblical financial freedom plan.",
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-black to-gray-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-serif italic mb-6">
            General Workshops
          </h1>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Give your members/team the inspiration they need to take their performance to the next level with our in-person Seminars and Workshops.
          </p>
        </div>
      </section>

      {/* Main Content with Floating Sidebar */}
      <div className="relative">
        {/* Workshop Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pr-96">
          {workshops.map((workshop, index) => (
            <WorkshopSection
              key={index}
              title={workshop.title}
              description={workshop.description}
              image={workshop.image}
              outcomes={workshop.outcomes}
              reverseLayout={index % 2 !== 0}
            />
          ))}
        </div>

        {/* Floating More Info Sidebar */}
        <div className="hidden lg:block fixed top-24 right-8 w-80">
          <div className="bg-white rounded-lg shadow-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-serif italic mb-6 text-gray-900">MORE INFO</h2>
            <p className="text-gray-700 mb-6 font-medium">The training program includes:</p>
            <ul className="space-y-4 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="mr-3 text-indigo-600 text-xl">✓</span>
                <span>A pre-engagement call with the speaker</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-indigo-600 text-xl">✓</span>
                <span>60 - 90 minute interactive, live session</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-indigo-600 text-xl">✓</span>
                <span>Optional 15 - 30 minute presentation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-indigo-600 text-xl">✓</span>
                <span>Q&A</span>
              </li>
            </ul>
            <button className="w-full bg-indigo-950 text-white px-8 py-3 rounded-lg hover:bg-indigo-900 transition-colors font-semibold shadow-md hover:shadow-lg">
              Free 30-Min Consultation
            </button>
          </div>
        </div>

        {/* Mobile More Info Section */}
        <div className="lg:hidden bg-white rounded-lg shadow-xl p-8 mx-4 mb-8 border border-gray-200">
          <h2 className="text-2xl font-serif italic mb-6 text-gray-900">MORE INFO</h2>
          <p className="text-gray-700 mb-6 font-medium">The training program includes:</p>
          <ul className="space-y-4 text-gray-700 mb-8">
            <li className="flex items-start">
              <span className="mr-3 text-indigo-600 text-xl">✓</span>
              <span>A pre-engagement call with the speaker</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-indigo-600 text-xl">✓</span>
              <span>60 - 90 minute interactive, live session</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-indigo-600 text-xl">✓</span>
              <span>Optional 15 - 30 minute presentation</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-indigo-600 text-xl">✓</span>
              <span>Q&A</span>
            </li>
          </ul>
          <button className="w-full bg-indigo-950 text-white px-8 py-3 rounded-lg hover:bg-indigo-900 transition-colors font-semibold shadow-md hover:shadow-lg">
            Free 30-Min Consultation
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-linear-to-r from-transparent via-gray-300 to-transparent"></div>
    </div>
  );
}