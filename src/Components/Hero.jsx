import { motion } from "framer-motion";

// Image URLs
const icons = [
  "icons/uiux.png", "icons/logo (2).png", "icons/logo (3).png",
  "icons/logo (4).png", "icons/logo (5).png", "icons/logo (6).png",
  "icons/logo (7).png", "icons/logo (8).png", "icons/logo (9).png",
  "icons/logo (10).png", "icons/logo (11).png", "icons/logo (12).png",
  "icons/logo (13).png", "icons/express.png", "icons/FD.png",
  "icons/logo (16).png", "icons/nodeJs.png", "icons/MongoDB.png",
  "icons/React.png", "icons/JavaScript.png", "icons/HTML.png",
];

// Positions (Spread out, No Overlaps)
const positions = [
  { top: "5%", left: "3%" }, { top: "20%", left: "10%" }, { top: "35%", left: "5%" },
  { top: "50%", left: "12%" }, { top: "65%", left: "7%" }, { top: "80%", left: "3%" },
  { top: "5%", right: "3%" }, { top: "20%", right: "10%" }, { top: "35%", right: "5%" },
  { top: "50%", right: "12%" }, { top: "65%", right: "7%" }, { top: "80%", right: "3%" },
  { top: "10%", left: "18%" }, { top: "30%", left: "22%" }, { top: "55%", left: "20%" },
  { top: "75%", left: "15%" }, { top: "10%", right: "18%" }, { top: "30%", right: "22%" },
  { top: "55%", right: "20%" }, { top: "75%", right: "15%" }, { top: "85%", right: "8%" },
];

// Show fewer icons on mobile
const getFilteredIcons = () => {
  if (window.innerWidth < 768) return icons.slice(0, 8); // Show 8 icons on mobile
  return icons; // Show all on large screens
};

const HeroSection = () => {
  return (
    <div className="relative w-full max-w-screen-2xl mx-auto h-[300px] md:h-[350px] lg:h-[400px] flex flex-col items-center justify-center bg-gray-50 rounded-lg shadow-lg overflow-hidden px-4 pt-20 md:pt-24 lg:pt-28">
      
      {/* Floating Icons (NO OVERLAP) */}
      {getFilteredIcons().map((icon, i) => (
        <motion.img
          key={i}
          src={icon}
          alt={`icon-${i}`}
          className="absolute w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
          style={{
            ...positions[i % positions.length], // Spread out
            opacity: i < 5 || i > 15 ? 0.3 : Math.random() * 0.5 + 0.5,
            transform: `rotate(${Math.random() * 20 - 10}deg)`,
          }}
          animate={{
            y: [0, -5, 0], // Floating effect
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: Math.random() * 2 + 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Center Content */}
      <div className="text-center z-10 max-w-4xl px-6">
        <motion.h1
          className="text-2xl md:text-3xl lg:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        >
          Excellent IT Services 
          <br /> for Your Success
        </motion.h1>
        <p className="text-sm md:text-lg text-gray-600 mt-3 max-w-xl mx-auto">
          At IDEVIFY SOLUTIONS, we create innovative software solutions that empower businesses in a digital-first world.
        </p>

        {/* Certification Badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <img
            src="icons/MSME1-removebg-preview.png"
            alt="Certificate 1"
            className="w-20 md:w-24 lg:w-28 h-auto transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(0,172,255,0.9)] hover:scale-105"
          />
          <img
            src="icons/DPIIT2.png"
            alt="Certificate 2"
            className="w-20 md:w-24 lg:w-28 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
