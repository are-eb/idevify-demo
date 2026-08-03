import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import technologies from "../technologies.json";

gsap.registerPlugin(ScrollTrigger);

const TechnologyDetails = () => {
  const { id } = useParams();
  const technology = technologies.find(tech => tech.id === id);
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".animate-section");

    sections.forEach(section => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            end: "top 50%",
            scrub: true
          }
        }
      );
    });
  }, []);

  if (!technology) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-800">
        <h1 className="text-3xl font-bold text-red-500">Technology not found</h1>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      
      {/* Hero Section */}
      <div className="animate-section relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 to-indigo-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            {technology.title}
          </h1>
          <p className="text-lg text-purple-200">{technology.description}</p>
        </div>
      </div>

      <div className="animate-section max-w-7xl mx-auto -mt-24 px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
          <img src={technology.image} alt={technology.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="animate-section max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-600">
          Our Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {technology.stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 p-8 rounded-3xl backdrop-blur-md border border-white/10 hover:border-pink-400 transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">{stat.title}</h3>
              <p className="text-purple-200">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="animate-section bg-gradient-to-br from-gray-800 to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {technology.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 p-8 rounded-3xl backdrop-blur-md border border-white/10 hover:border-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-blue-200">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="animate-section max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-sky-600">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {technology.whyChooseUs.map((reason, index) => (
            <div
              key={index}
              className="bg-white/10 p-8 rounded-3xl backdrop-blur-md border border-white/10 hover:border-sky-400 transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">{reason.title}</h3>
              <p className="text-sky-200">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default TechnologyDetails;
