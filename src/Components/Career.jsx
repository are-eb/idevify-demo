import React, { useState } from 'react';
import { FaSearch, FaLocationArrow, FaBriefcase, FaStar, FaQuoteLeft, FaQuoteRight, FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const CareerPage = () => {
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Frontend Developer', location: 'Remote', type: 'Full-Time' },
    { id: 2, title: 'Backend Developer', location: 'New York', type: 'Full-Time' },
    { id: 3, title: 'UI/UX Designer', location: 'San Francisco', type: 'Part-Time' },
    { id: 4, title: 'DevOps Engineer', location: 'Remote', type: 'Contract' },
  ]);

  const [filters, setFilters] = useState({ location: '', type: '' });

  const filteredJobs = jobs.filter(job => {
    return (
      job.location.toLowerCase().includes(filters.location.toLowerCase()) &&
      job.type.toLowerCase().includes(filters.type.toLowerCase())
    );
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-700 text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">Join Our Team</h1>
          <p className="text-lg mb-8">
            We’re looking for passionate individuals to help us build the future. Explore our open positions and apply today!
          </p>
          <Link
            to="job-listings"
            smooth={true}
            duration={500}
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all"
          >
            View Openings
          </Link>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full"
        ></motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full"
        ></motion.div>
      </section>

      {/* Job Listings Section */}
      <section id="job-listings" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Job Openings
          </motion.h2>
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <div className="flex items-center bg-white p-3 rounded-lg shadow-sm flex-1">
              <FaSearch className="text-gray-400 mr-2" />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={filters.location}
                onChange={handleFilterChange}
                className="outline-none flex-1"
              />
            </div>
            <div className="flex items-center bg-white p-3 rounded-lg shadow-sm flex-1">
              <FaBriefcase className="text-gray-400 mr-2" />
              <input
                type="text"
                name="type"
                placeholder="Job Type"
                value={filters.type}
                onChange={handleFilterChange}
                className="outline-none flex-1"
              />
            </div>
          </motion.div>
          {/* Job Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <FaLocationArrow className="mr-2" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaBriefcase className="mr-2" />
                  <span>{job.type}</span>
                </div>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Why Work With Us?
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Competitive Salary', icon: <FaStar className="text-4xl mb-4 text-blue-600" /> },
              { title: 'Flexible Hours', icon: <FaStar className="text-4xl mb-4 text-blue-600" /> },
              { title: 'Remote Work', icon: <FaStar className="text-4xl mb-4 text-blue-600" /> },
              { title: 'Career Growth', icon: <FaStar className="text-4xl mb-4 text-blue-600" /> },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                {benefit.icon}
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-12"
          >
            What Our Employees Say
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote: "Working here has been an incredible experience. The team is supportive, and the projects are challenging.",
                author: "John Doe",
              },
              {
                quote: "I love the flexibility and the opportunities for growth. It's a great place to build a career.",
                author: "Jane Smith",
              },
              {
                quote: "The culture here is amazing. Everyone is passionate about what they do.",
                author: "Mike Johnson",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <FaQuoteLeft className="text-gray-400 mb-4" />
                <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                <FaQuoteRight className="text-gray-400 mb-4" />
                <p className="text-gray-800 font-semibold">{testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6"
          >
            Have Questions?
          </motion.h2>
          <p className="text-lg mb-8">Reach out to us for any inquiries or to learn more about our opportunities.</p>
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-white/20 placeholder-white/70 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-white/20 placeholder-white/70 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="p-3 rounded-lg bg-white/20 placeholder-white/70 outline-none"
            ></textarea>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;