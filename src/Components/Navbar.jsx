import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import servicesData from "../services.json";
import technologiesData from "../technologies.json";

const dropdownVariants = {
  hidden: { opacity: 0, scale: 0.95, y: -10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.2 } },
  exit: { opacity: 0, scale: 0.95, y: -10, transition: { duration: 0.1 } },
};


const linkVariants = {
  hover: { scale: 1.05, y: -2, transition: { type: "spring", stiffness: 300 } },
  tap: { scale: 0.95 },
};

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [services, setServices] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const mobileMenuRef = useRef(null); 

  useEffect(() => {
    setServices(servicesData); 
    setTechnologies(technologiesData); 
  }, []);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null); 
      }
    };

 
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
  
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null); 
  };

  const handleDropdownClick = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null); 
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-black via-gray-900 to-gray-900 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
   
          <img src="Idevify_logo_.png" alt="Idevify Logo" className="h-14" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className="text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 hover:text-transparent hover:bg-clip-text transition-all duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 hover:text-transparent hover:bg-clip-text transition-all duration-300"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("services")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 hover:text-transparent hover:bg-clip-text transition-all duration-300 flex items-center">
                Services
                <span className="ml-1">&#9660;</span> 
              </button>
              <AnimatePresence>
                {openDropdown === "services" && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute mt-2 w-48 bg-white/90 backdrop-blur-md rounded-lg shadow-lg"
                  >
                    {services.map((service) => (
                      <motion.div
                        key={service.id}
                        variants={linkVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <Link
                          to={`/service/${service.id}`}
                          className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 hover:text-transparent hover:bg-clip-text transition-all duration-300"
                        >
                          {service.title}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Technology Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("technology")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 hover:text-transparent hover:bg-clip-text transition-all duration-300 flex items-center">
                Technology
                <span className="ml-1">&#9660;</span> 
              </button>
              <AnimatePresence>
                {openDropdown === "technology" && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute mt-2 w-48 bg-white/90 backdrop-blur-md rounded-lg shadow-lg"
                  >
                    {technologies.map((tech) => (
                      <motion.div
                        key={tech.id}
                        variants={linkVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <Link
                          to={`/technology/${tech.id}`}
                          className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 hover:text-transparent hover:bg-clip-text transition-all duration-300"
                        >
                          {tech.title}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/career"
              className="text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 hover:text-transparent hover:bg-clip-text transition-all duration-300"
            >
              Career
            </Link>
            <Link
              to="/contact"
              className="text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 hover:text-transparent hover:bg-clip-text transition-all duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 hover:text-transparent hover:bg-clip-text transition-all duration-300"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef} 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white/90 backdrop-blur-md"
          >
            <Link
              to="/"
              onClick={handleLinkClick}
              className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 hover:text-transparent hover:bg-clip-text transition-all duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={handleLinkClick}
              className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 hover:text-transparent hover:bg-clip-text transition-all duration-300"
            >
              About
            </Link>

            {/* Mobile Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownClick("services")}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 hover:text-transparent hover:bg-clip-text transition-all duration-300"
              >
                Services <span className="float-right">&#9660;</span>
              </button>
              <AnimatePresence>
                {openDropdown === "services" && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="pl-4"
                  >
                    {services.map((service) => (
                      <motion.div
                        key={service.id}
                        variants={linkVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <Link
                          to={`/service/${service.id}`}
                          onClick={handleLinkClick}
                          className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 hover:text-transparent hover:bg-clip-text transition-all duration-300"
                        >
                          {service.title}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Technology Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownClick("technology")}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 hover:text-transparent hover:bg-clip-text transition-all duration-300"
              >
                Technology <span className="float-right">&#9660;</span>
              </button>
              <AnimatePresence>
                {openDropdown === "technology" && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="pl-4"
                  >
                    {technologies.map((tech) => (
                      <motion.div
                        key={tech.id}
                        variants={linkVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <Link
                          to={`/technology/${tech.id}`}
                          onClick={handleLinkClick}
                          className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 hover:text-transparent hover:bg-clip-text transition-all duration-300"
                        >
                          {tech.title}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/career"
              onClick={handleLinkClick}
              className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 hover:text-transparent hover:bg-clip-text transition-all duration-300"
            >
              Career
            </Link>
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 hover:text-transparent hover:bg-clip-text transition-all duration-300"
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;