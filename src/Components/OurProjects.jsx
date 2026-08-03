import { Link } from "react-router-dom";

const ProjectsPage = () => {
  // Define projects data
  const projects = [
    {
      id: "project-1",
      name: "Gangstaa",
      img: "icons/gangstaa_logo.png", // Small logo image
      desc: "Gangstaa is a trendy eCommerce clothing brand offering stylish streetwear, including t-shirts, hoodies, and accessories. Built with React and Node.js, the website provides a seamless, responsive shopping experience with secure payments and real-time order tracking.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      link: "https://example-gangstaa.com",
    },
    {
      id: "project-2",
      name: "Synodics",
      img: "icons/logo_synodic.png", // Small logo image
      desc: "Synodics is a cutting-edge SaaS platform for project management and team collaboration. Built with Angular and Firebase, it offers real-time updates, task tracking, and seamless integrations.",
      technologies: ["Angular", "Firebase", "TypeScript", "Material UI"],
      link: "https://example-synodics.com",
    },
    {
      id: "project-3",
      name: "Grobean",
      img: "icons/growbean.png", // Small logo image
      desc: "Grobean is a subscription-based meal delivery service offering healthy, organic meals. Built with Vue.js and Laravel, it provides a user-friendly interface for meal selection and delivery tracking.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Bootstrap"],
      link: "https://example-grobean.com",
    },
    {
      id: "project-4",
      name: "SundarJag",
      img: "icons/sundarjag-removebg-preview.png", // Small logo image
      desc: "SundarJag is a real estate platform connecting buyers and sellers. Built with Next.js and Django, it offers advanced search filters, property listings, and secure transactions.",
      technologies: ["Next.js", "Django", "PostgreSQL", "Tailwind CSS"],
      link: "https://example-sundarjag.com",
    },
    {
      id: "project-5",
      name: "Biz Petro",
      img: "icons/biz_petro.png", // Small logo image
      desc: "Biz Petro is a B2B platform for the petroleum industry, enabling seamless transactions and supply chain management. Built with React and Spring Boot, it ensures scalability and security.",
      technologies: ["React", "Tailwind CSS"],
      link: "https://example-bizpetro.com",
    },
  ];

  // Technology icons mapping (SVG paths)
  const technologyIcons = {
    React: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-5 h-5 fill-current text-blue-500"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
    "Node.js": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-5 h-5 fill-current text-green-500"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
    MongoDB: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-5 h-5 fill-current text-green-700"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
    "Tailwind CSS": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-5 h-5 fill-current text-blue-400"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
    Angular: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-5 h-5 fill-current text-red-500"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
    Firebase: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-5 h-5 fill-current text-orange-500"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
    TypeScript: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-5 h-5 fill-current text-blue-600"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
    "Material UI": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-5 h-5 fill-current text-blue-800"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
    "Vue.js": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-5 h-5 fill-current text-green-400"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
    Laravel: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-5 h-5 fill-current text-red-600"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
    MySQL: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-5 h-5 fill-current text-blue-700"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
    Bootstrap: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-5 h-5 fill-current text-purple-500"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
    "Next.js": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-5 h-5 fill-current text-black"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
    Django: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-5 h-5 fill-current text-green-800"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
    PostgreSQL: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-5 h-5 fill-current text-blue-900"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
    "Spring Boot": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-5 h-5 fill-current text-green-600"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
    "Ant Design": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-5 h-5 fill-current text-red-700"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
  };

  return (
    <div className="min-h-screen bg-black text-white p-10 flex justify-center">
      <div className="w-full max-w-6xl">
        {/* ✅ Perfectly Centered Title */}
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent text-center">
            Our Projects
          </h1>
        </div>

        {/* Grid Layout for Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-[#0e0e0e] rounded-2xl text-center border border-gray-600 transition-all duration-300 group overflow-hidden hover:border-purple-500 hover:shadow-[0_0_4px_rgba(138,43,226,0.6)] hover:scale-105 transform-gpu flex flex-col"
            >
              {/* ✅ Thin Neon Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl border-[1px] border-gray-600 transition-all duration-300 pointer-events-none group-hover:border-purple-500 group-hover:shadow-[0_0_6px_rgba(138,43,226,0.8)]"></div>

              {/* 📌 Card Content */}
              <div className="relative z-10 bg-[#0b0b0b] rounded-2xl flex flex-col h-full p-4">
                {/* Logo and Project Name */}
                <div className="flex items-center gap-4">
                  {/* Small Logo Image */}
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img
                      src={project.img}
                      alt={project.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Project Name */}
                  <h2 className="text-lg font-semibold">{project.name}</h2>
                </div>

                {/* Project Description */}
                <p className="text-gray-400 text-sm mt-4 text-left">
                  {project.desc}
                </p>

                {/* Technologies Used */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded-lg"
                    >
                      {technologyIcons[tech]}
                      <span className="text-xs text-gray-400">{tech}</span>
                    </div>
                  ))}
                </div>

                {/* Sticky "View Project" Button */}
                <div className="mt-auto pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-full px-3 py-2 text-sm border border-gray-500 text-white rounded-lg transition-all duration-300 relative overflow-hidden group/button">
                      {/* Gradient Text & Glow on Hover */}
                      <span className="relative z-10 transition-all duration-300 group-hover/button:bg-gradient-to-r group-hover/button:from-pink-500 group-hover/button:to-blue-500 group-hover/button:bg-clip-text group-hover/button:text-transparent group-hover/button:drop-shadow-[0_0_6px_rgba(255,0,255,0.8)]">
                        View Project →
                      </span>

                      {/* Gradient Border Outline on Hover */}
                      <span className="absolute inset-0 border border-transparent rounded-lg transition-all duration-300 group-hover/button:border-pink-500 group-hover/button:border-r-blue-500 group-hover/button:shadow-[0_0_8px_rgba(255,0,255,0.8)]"></span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;