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

export default function Leaderworkshop() {
  const workshops = [
    {
      title: "EFECTIVE COMMUNICATION",
      description: "This session will help leaders appreciate the nature and complexity of a specific form of communication and persuasion, and provide guidelines for boosting the strength of a persuasive message. This course is for church leaders, departmental heads and workers in leadership positions.",
      image: "/communication.png",
      outcomes: [
        "Understand the complexity of persuasion as a form of communication.",
        "Stimulate listeners to take actions that lead to growth, both personally and for the church.",
        "Convince the audience of a point of view.",
        "Call the audience to action;  To pray more, study in-depth, attend church meetings and build a personal relationship with God.",
        "Connect with people in a distinct and authentic manner using biblical approaches.",
        "Communicate with a sense of self-awareness and transparency whilst depending on the Holy Spirit for utterances.",
        "Use verbal and non-verbal skills to pass and receive information without cultural bias"
      ]
    },
     {
      title: "MULTICULTURAL INCLUSION",
      description: "This session will help leaders from a culture adopt the essence of another culture, such as its attitudes and ceremonies, while still maintaining their own culture.",
      image: "/multicultural.png",
      outcomes: [
        "Knowledgeable about the diverse culture and practices found in the church.",
        "Accept individuals into the fold of Christ without any restriction from cultural differences.",
        "Approach anyone identified as a Christian through the lens of Christ's love.",
        "Build a multicultural Christian society and organization with minimal conflict.",
      ]
    },
     {
      title: "PROBLEM-SOLVING & CRITICAL THINKING",
      description: "This session helps leaders develop their problem-solving skills; to learn how to identify problems as they arise and determine effective solutions.",
      image: "/thinking.png",
      outcomes: [
        "Develop critical thinking skills that are applicable to problem-solving in the church and contemporary world.",
        "Apply insightful thinking to problem-solving.",
        "Carry out a standard problem and root cause analysis of issues in the church.",
        "Adopt the right perception and mindset towards the problem and identify biblical steps in resolving it. ",
        "Proffer innovative solutions to problems using insightful thinking and the Bible. ",
      ]
    },
    {
      title: "MOTIVATING & ENCOURAGING OTHERS",
      description: "This session introduces leaders to different types of motivations and walks them through some tips and strategies on how they can influence their people to have a positive “can-do” attitude at work.",
      image: "/motivation.png",
      outcomes: [
        "Identify types and sources of motivation.",
        "Increase intrinsic motivation in people to carry out various actions in the church and their personal lives.",
        "Develop individual and group approaches to motivation.",
        "Help individuals develop extrinsic motivation and get the best from it."
      ]
    },
     {
      title: "MANAGING CHANGE",
      description: "This session helps leaders know how to cope with change and effectively communicate it with their members. This also includes dealing with new challenges, workflow disruptions, and feedback from members.",
      image: "/change.png",
      outcomes: [
        "Understand change and transition as a process for both leaders and members.",
        "Understand the need for change in the growth process and barriers to change",
        "Identify and understand the different emotions that come with change and how to conquer them through prayer and positive declarations.",
        "Eliminate resistance to change.",
        "Identify ways to thrive using the word of God when change comes.",
      ]
    },
    
     {
      title: "LEADING vs. MANAGING",
      description: "Leading pertains to one’s ability to drive, influence, and motivate others to achieve a certain objective. On the other hand, managing is more about ensuring that work is done and organizational goals are achieved. An individual can be a good manager but not a good leader and vice versa. So, which one is better? This session helps leaders to identify their abilities.",
      image: "/leadership.png",
      outcomes: [
        "Understand the concept of managing and leading.",
        "Distintinguish between a manager and a leader.",
        "Identify specific responsibilities of a manager and that of a leader.",
        "Combine managerial and leadership abilities to achieve the best results.",
        "Know and implement  the psychology of managing and leading people.",
      ]
    },
    {
      title: "UNDERSTANDING LEADERSHIP STYLES",
      description: "This session helps leaders determine different ways they can lead their members, develop their approach, and identify key steps to improve it. It will also create an opportunity for them to discover the qualities and effectiveness of other leadership styles they are not yet aware of and combine them for more effective and impactful leadership. ",
      image: "/leading.png",
      outcomes: [
        "Understand competence levels and how they affect leadership in small and larger groups.",
        "Identify and apply the need for different leadership styles and how to effectively use them to manage members with consideration of cultural diversity",
        "Identify and apply leadership styles and approaches that are suitable or applicable to various situations.",
        "Develop creative explanations for biblical texts.",
        "Analyze strategies to discover leadership styles for upcoming church leaders. "
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-black to-gray-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-serif italic mb-6">
            Leadershio Workshops
          </h1>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
           There are leaders, and there are those who lead. These workshops are for the latter; to make them effective at whatever positions they find themselves
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