import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

// Testimonials Data
const testimonials = [
  {
    name: "John Doe",
    position: "CEO, TechWave",
    review: "Amazing service! They delivered exactly what we needed and beyond expectations.",
    rating: 5,
    image: "/images/client1.jpg",
  },
  {
    name: "Sarah Khan",
    position: "Founder, DigitalBoost",
    review: "Our website saw a 300% increase in traffic after their SEO work!",
    rating: 4.5,
    image: "/images/client2.jpg",
  },
  {
    name: "Michael Lee",
    position: "CTO, SoftSolutions",
    review: "Reliable, professional, and great communication. I highly recommend them.",
    rating: 5,
    image: "/images/client3.jpg",
  },
  {
    name: "Emily Watson",
    position: "Marketing Manager, CloudSphere",
    review: "Their UI/UX design transformed our product! It looks stunning and converts better.",
    rating: 4.5,
    image: "/images/client4.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center px-4 sm:px-6 py-16 bg-gradient-to-b from-gray-900 to-black text-white">
      
      {/* Section Title - Now Always Visible */}
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        What Our Clients Say 💬
      </motion.h1>

      {/* Testimonials Carousel */}
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Autoplay, Pagination]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full max-w-7xl mx-auto pb-10"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <motion.div
              className="relative w-full max-w-[350px] mx-auto bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-lg border border-gray-800 flex flex-col items-center text-center transition-all duration-300 hover:border-blue-400 hover:shadow-xl hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Floating Quote Icons with Gentle Animation */}
              <motion.div
                className="absolute text-gray-500 text-3xl left-4 top-4"
                animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaQuoteLeft />
              </motion.div>
              <motion.div
                className="absolute text-gray-500 text-3xl right-4 bottom-4"
                animate={{ rotate: [0, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaQuoteRight />
              </motion.div>

              {/* Client Image */}
              <motion.img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-lg"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />

              {/* Name & Position */}
              <h3 className="text-lg text-white font-semibold mt-4">{testimonial.name}</h3>
              <p className="text-gray-400 text-sm">{testimonial.position}</p>

              {/* Review Text */}
              <p className="text-gray-300 italic mt-4">{testimonial.review}</p>

              {/* Star Rating with Staggered Appearance */}
              <div className="flex mt-4 text-yellow-400">
                {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.15 }}
                  >
                    <FaStar />
                  </motion.div>
                ))}
                {testimonial.rating % 1 !== 0 && <FaStarHalfAlt />}
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
