import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import servicesData from "../services.json";

import { FaReact, FaNodeJs, FaJava, FaAmilia, FaAws, FaBook, } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiKotlin,
  SiGoogleanalytics,
  SiPython,
  SiFlutter,
  SiFirebase,
  SiSqlite,
  SiSemrush,
  SiYoast,
  SiGooglesearchconsole,
  SiGoogleads,
  SiFacebook,
  SiGooglebigquery,
  SiBlogger,
  SiMailchimp,
  SiMysql,
  SiFigma,SiAdobe,SiSketch,SiFramer,SiInvision,SiAdobephotoshop,SiAdobeillustrator,SiCoreldraw,SiCanva,SiJavascript,SiDatabricks,
  SiBlender,SiAutodesk,SiAdobeaftereffects,SiCinema4D,
} from "react-icons/si";

const getIconComponent = (iconName) => {
  const icons = {
    FaReact: FaReact,
    FaNodeJs: FaNodeJs,
    FaJava: FaJava,
    FaBook: FaBook,
    SiNextdotjs: SiNextdotjs,
    SiTailwindcss: SiTailwindcss,
    SiMongodb: SiMongodb,
    SiKotlin: SiKotlin,
    SiGoogleanalytics: SiGoogleanalytics,
    SiPython: SiPython,
    SiFlutter: SiFlutter,
    SiFirebase: SiFirebase,
    SiSqlite: SiSqlite,
    SiSemrush: SiSemrush,
    FaAmilia: FaAmilia,
    SiYoast: SiYoast,
    SiGooglesearchconsole: SiGooglesearchconsole,
    SiGoogleads: SiGoogleads,
    SiFacebook: SiFacebook,
    SiGooglebigquery: SiGooglebigquery,
    SiBlogger: SiBlogger,
    SiMailchimp: SiMailchimp,
    SiMysql: SiMysql,
    FaAws: FaAws,
    SiFigma: SiFigma,
    SiAdobe: SiAdobe,
    SiSketch: SiSketch,
    SiFramer: SiFramer,
    SiInvision: SiInvision,
    SiAdobephotoshop: SiAdobephotoshop,
    SiAdobeillustrator: SiAdobeillustrator,
    SiCoreldraw: SiCoreldraw,
    SiCanva: SiCanva,
    SiJavascript: SiJavascript,
    SiDatabricks: SiDatabricks,
    SiBlender: SiBlender,
    SiAutodesk: SiAutodesk,
    SiAdobeaftereffects: SiAdobeaftereffects,
    SiCinema4D: SiCinema4D,

  };
  return icons[iconName] || FaReact;
};

const ServiceDetails = () => {
  const { id } = useParams();
  console.log("Received ID from URL:", id);
  const service = servicesData.find((s) => s.id.toString() === id);
  console.log("Matched Service:", service);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <h2 className="text-center text-red-500 mt-24 text-3xl font-bold">
        Service Not Found 😔
      </h2>
    );
  }

  return (
    <div className="pb-16 flex flex-col items-center min-h-screen bg-[#0a0a0a] text-white">
      {/* Header Section */}
      <div className="w-full">
        <div className="relative w-full h-96">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-8 left-8 max-w-6xl mx-auto w-full px-6">
            <h1 className="text-5xl font-extrabold text-white">{service.title}</h1>
            <p className="mt-2 text-lg text-gray-200 max-w-2xl">{service.description}</p>
          </div>
        </div>
      </div>

      {/* Technology Stack Section */}
      <div className="mt-12 max-w-6xl w-full px-6">
      <div className="flex justify-center">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent text-center">
            Technology Stack
          </h1>
        </div>


        <div className="flex flex-wrap justify-center gap-8">
  {service.technologies.map((tech, index) => {
    const isImage = tech.icon.startsWith("/");
    const IconComponent = isImage ? null : getIconComponent(tech.icon);

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.4 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center space-y-2 cursor-pointer"
      >
        {isImage ? (
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-16 h-16 object-contain transition-all duration-300 hover:scale-110"
          />
        ) : (
          <IconComponent className="text-5xl text-blue-500 hover:text-blue-600 transition-all duration-300" />
        )}
        <span className="text-xl font-semibold hover:text-blue-500 transition-all duration-300">
          {tech.name}
        </span>
      </motion.div>
    );
  })}
</div>

      </div>

      {/* Key Features Section */}
      <div className="mt-16 max-w-6xl w-full px-6">
      <div className="flex justify-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent text-center">
            Key Features
          </h1>
        </div>

        <motion.div className="relative h-1 bg-gray-300 w-24 mx-auto mb-8 overflow-hidden">
          <motion.div
            className="absolute h-1 w-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full"
            animate={{
              x: ["-100%", "100%", "-100%"], 
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="bg-white/10 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-md"
            >
              {/* Feature Icon */}
              <div className="flex justify-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-16 h-16 object-cover rounded-full"
                />
              </div>

              {/* Feature Title */}
              <h3 className="mt-6 text-2xl font-bold text-center text-blue-500">
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p className="mt-4 text-gray-300 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;