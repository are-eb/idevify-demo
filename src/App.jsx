import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import WhoAreWe from "./Components/WhoAreWe";
import OurServices from "./Components/OurServices";
import Team from "./Components/Team";
import OurAchievements from "./Components/OurAchievements";
import BusinessesWeSupport from "./Components/BusinessesWeSupport";
import OurProjects from "./Components/OurProjects";
import Testimonials from "./Components/Testimonials";
import ServiceDetails from "./Components/ServiceDetails";
import TechnologyDetails from "./Components/TechnologyDetails";
import ContactUs from "./Components/ContactUs";
import Career from "./Components/Career";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import Photo from "./Components/Photo";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const appRef = useRef(null);

  useEffect(() => {
    // ✅ Initialize AOS for small animations (not affecting scroll animations)
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true, // Only run animations once
      mirror: false, // Prevent animations from reversing
    });

    // ✅ Apply GSAP Scroll Animations (Avoid conflicts with AOS)
    const sections = gsap.utils.toArray(".gsap-animate");

    sections.forEach((section) => {
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
            start: "top 85%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <div ref={appRef} className="pt-24">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                {/* ✅ GSAP scroll animation applied (No AOS) */}
                <div className="gsap-animate">
                  <Hero />
                </div>
                <div className="gsap-animate">
                  <WhoAreWe />
                </div>
                <div className="gsap-animate">
                  <OurServices />
                </div>
                <div className="gsap-animate">
                  <Team />
                </div>
                <div className="gsap-animate">
                  <OurAchievements />
                </div>
                <div className="gsap-animate">
                  <BusinessesWeSupport />
                </div>
                <div className="gsap-animate">
                  <OurProjects />
                </div>
                <div className="gsap-animate">
                  <Testimonials />
                </div>
                <div className="gsap-animate">
                  <Photo />
                </div>
              </div>
            }
          />
          <Route
            path="/service/:id"
            element={
              <div className="gsap-animate">
                <ServiceDetails />
              </div>
            }
          />
          <Route
            path="/technology/:id"
            element={
              <div className="gsap-animate">
                <TechnologyDetails />
              </div>
            }
          />
          <Route
            path="/career"
            element={
              <div className="gsap-animate">
                <Career />
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div className="gsap-animate">
                <ContactUs />
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div className="gsap-animate">
                <AboutUs />
              </div>
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
