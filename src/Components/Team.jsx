import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Devesh Umredkar",
    position: "Chairman & Director",
    description:
      "Providing visionary leadership and strategic guidance, ensuring alignment with its long-term mission.",
    img: "/Devesh.jpg",
    linkedin: "#",
  },
  {
    name: "Ishika Thakre",
    position: "Director & Co-founder",
    description:
      "Focused on operational excellence, driving impactful strategies, and fostering a culture of innovation.",
    img: "/Ishika.jpg",
    linkedin: "#",
  },
];

export default function Team() {
  return (
    <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
      {/* Decorative Background Circles */}
      <div className="absolute top-[-50px] left-[-50px] w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-96 h-96 bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-4 tracking-wide"
        >
          <span className="text-white">Meet </span> 
          <span className="bg-gradient-to-r from-[#D16BA5] via-[#86A8E7] to-[#5FFBF1] text-transparent bg-clip-text">Our Team</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 max-w-lg mx-auto text-center mb-10 text-lg"
        >
          A team of passionate leaders driving innovation and excellence.
        </motion.p>

        {/* Team Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="relative flex flex-col items-center text-center bg-gray-800 shadow-lg rounded-2xl p-6 w-80 hover:shadow-xl transition"
            >
              {/* Image without Blue Background */}
              <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg bg-gray-800 p-1">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Content */}
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-purple-400 text-sm font-medium">{member.position}</p>
                <p className="text-gray-400 text-sm mt-2">{member.description}</p>

                {/* LinkedIn Button */}
                <div className="mt-4">
                  <motion.a
                    href={member.linkedin}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 250 }}
                    className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-md hover:scale-110 transition-all duration-300"
                  >
                    <FaLinkedin className="text-lg" />
                  </motion.a>
                </div>
              </div>

              {/* Decorative Floating Glow */}
              <div className="absolute top-[-10px] right-[-10px] w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-400 rounded-full opacity-20 blur-lg"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
