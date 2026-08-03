import { motion } from "framer-motion";

const boxData = [
  { id: 1, text: "Research & Analytics" },
  { id: 2, text: "Design & Development" },
  { id: 3, text: "Performance" },
  { id: 4, text: "Feedback & Improvement" },
];

const ConnectedBoxes = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 w-full p-8">
      {boxData.map((box, index) => (
        <div key={box.id} className="relative flex flex-col items-center">
          {/* Animated Rectangle with Glow Effect */}
          <motion.div
            className="relative w-[200px] h-[120px] md:w-[250px] md:h-[140px] flex items-center justify-center text-white text-lg font-semibold border border-transparent rounded-lg shadow-lg bg-[#0D0D0D] hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(173, 216, 230, 0.8)" }}
          >
            {box.text}

            {/* Moving Animated Border */}
            <motion.svg
              className="absolute top-0 left-0 w-full h-full"
              viewBox="0 0 250 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ strokeDasharray: "10 10", strokeDashoffset: 20 }}
              animate={{ strokeDashoffset: [20, 0, 20] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.rect
                 x="5"
                 y="5"
                 width="240"
                 height="130"
                 rx="10"
                 stroke="url(#gradient)"
                 strokeWidth="3"
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 initial={{ strokeDasharray: "20 40", strokeDashoffset: 0 }}
                 animate={{
                   strokeDasharray: ["15 50", "10 30", "5 25"],
                   strokeDashoffset: [0, -100, -200],
                 }}
                 transition={{
                   duration: 6,
                   repeat: Infinity,
                   repeatType: "reverse",
                 }}
 
              />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FF6FD8" />
                  <stop offset="100%" stopColor="#5B86E5" />
                </linearGradient>
              </defs>
            </motion.svg>
          </motion.div>

          {/* Horizontal Connecting Lines (Desktop View) */}
          {index < boxData.length - 1 && (
            <motion.div
              className="absolute top-1/2 left-full w-16 h-0.5 bg-gradient-to-r from-pink-400 to-blue-400 md:block hidden"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 1, delay: index * 0.3 }}
            />
          )}

          {/* Vertical Connecting Lines (Mobile View) */}
          {index < boxData.length - 1 && (
            <motion.div
              className="w-0.5 h-6 bg-gradient-to-b from-pink-400 to-blue-400 md:hidden"
              initial={{ height: 0 }}
              animate={{ height: 24 }}
              transition={{ duration: 1, delay: index * 0.3 }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ConnectedBoxes;