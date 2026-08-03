import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowUp, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const socialVariants = {
  hover: { scale: 1.2, transition: { duration: 0.3 } },
};

const hoverGradientEffect = "hover:bg-gradient-to-r hover:from-pink-400 hover:to-blue-500 hover:bg-clip-text hover:text-transparent transition-all duration-300";

const Footer = () => {
  return (
    <motion.footer
      className="relative bg-gradient-to-r from-black via-gray-900 to-gray-900 text-white py-10 shadow-lg"
      variants={footerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Logo & About */}
          <div>
            <img src="Idevify_logo_.png" alt="Idevify Logo" className="h-12 mb-3" />
            <p className="text-gray-300 text-sm">
              Empowering digital innovation through cutting-edge solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="/" className={hoverGradientEffect}>Home</Link></li>
              <li><Link to="/about" className={hoverGradientEffect}>About</Link></li>
              <li><Link to="/services" className={hoverGradientEffect}>Services</Link></li>
              <li><Link to="/career" className={hoverGradientEffect}>Career</Link></li>
              <li><Link to="/contact" className={hoverGradientEffect}>Contact</Link></li>
            </ul>
          </div>

{/* Popular Services (2-Column Grid) */}
<div>
  <h3 className="text-lg font-semibold mb-3">Popular Services</h3>
  <div className="grid grid-cols-2 gap-x-6 text-sm">
    <Link to="/service/seo" className={hoverGradientEffect}>SEO</Link>
    <Link to="/service/web-development" className={hoverGradientEffect}>Web Development</Link>
    <Link to="/service/android-development" className={hoverGradientEffect}>Android Development</Link>
    <Link to="/service/digital-marketing" className={hoverGradientEffect}>Digital Marketing</Link>
    <Link to="/service/ui-ux-designing" className={hoverGradientEffect}>UI/UX Designing</Link>
    <Link to="/service/graphics-designing" className={hoverGradientEffect}>Graphics Designing</Link>
    <Link to="/service/2d-3d-animation" className={hoverGradientEffect}>2D/3D Animation</Link>
    <Link to="/service/custom-software-" className={hoverGradientEffect}>Custom Software Dev</Link>
    <Link to="/service/student-training-development" className={hoverGradientEffect}>Student Training</Link>
  </div>
</div>


         {/* Contact Info */}
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <p className="flex items-center space-x-2 text-gray-300 text-sm">
              <FaMapMarkerAlt className="text-pink-400" /> <span>123 Innovation St, Tech City</span>
            </p>
            <p className="flex items-center space-x-2 text-gray-300 text-sm">
              <FaEnvelope className="text-pink-400" /> <span>support@idevify.com</span>
            </p>
            <p className="flex items-center space-x-2 text-gray-300 text-sm">
              <FaPhone className="text-pink-400" /> <span>+1 (800) 123-4567</span>
            </p>
          </div>
        </div>


        {/* Social Icons & Scroll to Top */}
        <div className="mt-6 flex items-center justify-between text-sm">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Idevify. All rights reserved.</p>
          <div className="flex space-x-4">
            <motion.a href="#" className="text-xl" variants={socialVariants} whileHover="hover"><FaFacebook /></motion.a>
            <motion.a href="#" className="text-xl" variants={socialVariants} whileHover="hover"><FaTwitter /></motion.a>
            <motion.a href="#" className="text-xl" variants={socialVariants} whileHover="hover"><FaInstagram /></motion.a>
            <motion.a href="#" className="text-xl" variants={socialVariants} whileHover="hover"><FaLinkedin /></motion.a>
          </div>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-2 rounded-full bg-purple-500 text-white hover:bg-purple-700 transition"
            whileHover={{ scale: 1.1 }}
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
