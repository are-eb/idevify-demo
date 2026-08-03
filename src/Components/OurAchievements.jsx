import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Achievements Data
const achievements = [
  { title: "Clients Served", value: 45, suffix: "+", icon: "🌍" },
  { title: "Projects Delivered", value: 40, suffix: "+", icon: "🚀" },
  { title: "Countries", value: 2, suffix: "+", icon: "🌎" },
  { title: "Employees", value: 50, suffix: "+", icon: "👨‍💻" },
];

const OurAchievements = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div className="relative w-full min-h-[60vh] flex flex-col items-center justify-center bg-gray-900 text-white overflow-hidden px-6">
      {/* Subtle Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-80"></div>

      {/* Content Wrapper */}
      <div className="relative flex flex-col items-center justify-center text-center max-w-6xl w-full z-10">
        {/* Title */}
        <motion.h1
        className="text-4xl font-extrabold text-center mb-4 tracking-wide bg-gradient-to-r from-[#D16BA5] via-[#86A8E7] to-[#5FFBF1] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -40 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Achievements 🚀
        </motion.h1>

        {/* Achievements Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-20 w-full max-w-5xl place-items-center"
        >
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              className="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px] flex flex-col items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Icon */}
              <div className="text-4xl md:text-5xl">{item.icon}</div>

              {/* Animated Counter */}
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-white mt-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <CountUp start={0} end={inView ? item.value : 0} duration={3} />
                {item.suffix}
              </motion.h2>

              {/* Label */}
              <p className="text-sm md:text-md text-gray-400 mt-1">{item.title}</p>

              {/* Animated Circle Border with Gradient */}
              <motion.svg
                className="absolute w-[130px] h-[130px] md:w-[160px] md:h-[160px]"
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF7EB3" /> {/* Pinkish */}
                    <stop offset="50%" stopColor="#7F7FFF" /> {/* Bluish */}
                    <stop offset="100%" stopColor="#7AF9FF" /> {/* Light Bluish */}
                  </linearGradient>
                </defs>
                <motion.circle
                  cx="250"
                  cy="250"
                  r="245"
                  stroke="url(#circleGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ strokeDasharray: "24 10 0 0" }}
                  animate={{
                    strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                    rotate: [120, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </motion.svg>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurAchievements;