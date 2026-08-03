import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { motion, useAnimation } from "framer-motion";
import { FaSearch, FaPencilRuler, FaChartLine, FaSyncAlt } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Research & Analytics",
    description: "Our IT consultants analyze and find the best solution.",
    icon: <FaSearch size={28} className="text-pink-500" />,
  },
  {
    id: 2,
    title: "Design & Development",
    description: "Based on strategies, our experts deliver top-notch results.",
    icon: <FaPencilRuler size={28} className="text-blue-500" />,
  },
  {
    id: 3,
    title: "Performance",
    description: "Ensuring optimal performance through rigorous testing.",
    icon: <FaChartLine size={28} className="text-green-500" />,
  },
  {
    id: 4,
    title: "Feedback & Improvement",
    description: "Post-launch improvements assure your satisfaction.",
    icon: <FaSyncAlt size={28} className="text-yellow-500" />,
  },
];

export default function AboutUs() {
  const [activeBar, setActiveBar] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBar((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({
      scale: [1, 1.05, 1],
      transition: { duration: 1, repeat: Infinity, repeatType: "mirror" },
    });
  }, [controls]);

  return (
    <>
      {/* About Us Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-16 py-16 bg-gradient-to-r from-[#f6f6f3] to-[#e0e0e0]">
        {/* Image Stack */}
        <motion.div
          className="relative w-full md:w-[400px] h-[350px] md:h-[450px]"
          whileHover={{ scale: 1.05 }}
        >
          <div
            className="absolute w-full h-full bg-cover bg-center rounded-lg shadow-lg"
            style={{ backgroundImage: "url('/path-to-image-1.jpg')" }}
          ></div>
          <div
            className="absolute top-6 left-6 w-full h-full bg-cover bg-center rounded-lg shadow-lg -z-10"
            style={{ backgroundImage: "url('/path-to-image-2.jpg')" }}
          ></div>
        </motion.div>

        {/* Text Content */}
        <div className="flex-1 mt-8 md:mt-0">
          <h2 className="text-4xl md:text-4xl font-extrabold bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
            ABOUT US
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed text-sm md:text-base">
            Welcome to Hagia, where visionary design meets innovative architecture.
            We believe that architecture is not just about creating structures,
            but about crafting experiences and spaces that inspire, comfort, and elevate the human spirit.
          </p>

          {/* Animated Progress Bar */}
          <div className="flex items-center gap-2 mt-6">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className={`h-[4px] w-12 rounded-full transition-all duration-500 ${
                  activeBar === index
                    ? "bg-gradient-to-r from-pink-500 to-blue-500"
                    : "bg-gray-300"
                }`}
                animate={controls}
              ></motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-gradient-to-r from-[#f6f6f3] to-[#e0e0e0] py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-16">
          {/* Image Section */}
          <motion.div
            className="relative w-full h-[300px] md:h-[500px] bg-cover bg-center rounded-lg shadow-lg"
            style={{ backgroundImage: "url('/path-to-office-image.jpg')" }}
            whileHover={{ scale: 1.02 }}
          ></motion.div>

          {/* Text Content */}
          <div className="mt-12 text-center">
            <h3 className="text-sm font-semibold text-red-500 uppercase">[OUR VISION]</h3>
            <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              We envision a future where architecture seamlessly integrates with nature and technology,
              creating harmonious spaces that reflect the diversity and dynamism of the world we live in.
              Our goal is to be at the forefront of architectural innovation, setting new standards in
              design and sustainability.
            </p>
          </div>

          {/* Stats Section */}
          <div className="flex flex-col md:flex-row justify-center mt-12 gap-8 md:gap-12 text-center text-gray-900">
            <motion.div whileHover={{ scale: 1.1 }}>
              <h2 className="text-3xl md:text-4xl font-bold">
                <CountUp start={0} end={300} duration={3} />+
              </h2>
              <p className="text-gray-500 text-sm md:text-base">Clients</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <h2 className="text-3xl md:text-4xl font-bold">
                <CountUp start={0} end={400} duration={3} />+
              </h2>
              <p className="text-gray-500 text-sm md:text-base">Projects</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <h2 className="text-3xl md:text-4xl font-bold">
                <CountUp start={0} end={10} duration={3} />+
              </h2>
              <p className="text-gray-500 text-sm md:text-base">Years Experience</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Working Process */}
      <section className="bg-gradient-to-r from-[#f6f6f3] to-[#e0e0e0] py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-16">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
            Our Working Process
          </h2>
          <p className="text-center text-gray-600 mt-2 text-sm md:text-base">
            We follow a streamlined and efficient workflow.
          </p>

          {/* Steps Row */}
          <div className="relative flex flex-col md:flex-row justify-between items-center mt-12">
            {/* Horizontal Line */}
            <div className="absolute w-full h-1 bg-gradient-to-r from-pink-500 to-blue-500 top-10 left-0 right-0 hidden md:block"></div>

            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.1 }}
                className="relative flex flex-col items-center w-full md:w-1/4 px-4 mb-8 md:mb-0"
              >
                {/* Step Number with Icon */}
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-transparent text-white text-lg font-bold shadow-lg z-10">
                  {step.icon}
                </div>

                {/* Numbered Circle */}
                <div className="absolute top-14 w-8 h-8 flex items-center justify-center rounded-full bg-white border-4 border-pink-500 text-blue-500 font-bold">
                  {step.id}
                </div>

                {/* Step Title & Description */}
                <h3 className="text-lg font-semibold mt-6 text-center">{step.title}</h3>
                <p className="text-gray-600 mt-2 text-sm text-center">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}