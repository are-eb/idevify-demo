import React, { useState } from "react";

const WhoAreWe = () => {
  const [hoveredWord, setHoveredWord] = useState(null);

  const handleMouseEnter = (word) => setHoveredWord(word);
  const handleMouseLeave = () => setHoveredWord(null);

  const text = `At Idevify Solutions, we are a forward-thinking technology company dedicated to delivering 
  innovative solutions that empower businesses to thrive in a competitive market. Our team of passionate 
  professionals is driven by a shared mission: to leverage cutting-edge technology to help our partners 
  achieve their goals. At Idevify Solutions, we believe in fostering long-term partnerships by understanding 
  the unique challenges and aspirations of each client. Our approach combines technical expertise, creativity, 
  and a commitment to excellence, ensuring tailored solutions that drive meaningful results. By embracing emerging 
  technologies and staying ahead of industry trends, we aim to transform businesses, streamline operations, and 
  unlock new opportunities for growth in an ever-evolving digital landscape.`;

  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center p-10">
      {/* SVG Background Image (Now on the right) */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[40%] opacity-40">
        <img
          src="/images/girl-shopping-list.svg"
          alt="Background Art"
          className="w-full h-auto mix-blend-soft-light"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-10 relative z-10">
        {/* Left Text Content */}
        <div className="lg:w-1/2 text-left leading-relaxed text-lg">
          <h2 className="text-4xl font-extrabold text-center mb-4 tracking-wide bg-gradient-to-r from-[#D16BA5] via-[#86A8E7] to-[#5FFBF1] text-transparent bg-clip-text">
            Who Are We?
          </h2>

          <p className="text-gray-300">
            {text.split(" ").map((word, index) => (
              <span
                key={index}
                className={`transition-all duration-300 ${
                  hoveredWord === word
                    ? "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
                    : ""
                }`}
                onMouseEnter={() => handleMouseEnter(word)}
                onMouseLeave={handleMouseLeave}
              >
                {word}{" "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
