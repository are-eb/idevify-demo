import { Link } from "react-router-dom";
import servicesData from "../services.json"; // Import services.json

const ServicesPage = () => {
  // Services defined in the code
  const localServices = [
    { id: "web-development", name: "Web Development", img: "/images/web-dev.jpg", desc: "Build responsive and high-performance websites tailored to your needs." },
    { id: "android-development", name: "Android Development", img: "/images/AlbedoBase_XL_Android_Development_image_for_putting_on_my_card_1.jpg", desc: "Create feature-rich mobile apps with a smooth and user-friendly experience." },
    { id: "digital-marketing", name: "Digital Marketing", img: "/images/A dynamic hand-drawn Color sketchnote style illustration of digital marketing, employing vibrant complementary and contrasting colors. Balanced tones create a harmonious aesthetic. The .jpg", desc: "Boost your brand with SEO, social media, and targeted advertising strategies." },
    { id: "custom-software", name: "Custom Software Development", img: "/images/customSD.png", desc: "Develop scalable and secure software solutions for your business." },
    { id: "ui-ux-design", name: "UI-UX Designing", img: "/images/ui-ux.jpg", desc: "Design intuitive and engaging user interfaces for better digital experiences." },
    { id: "graphics-design", name: "Graphics Design", img: "/images/graphic-design.jpg", desc: "Craft eye-catching visuals, logos, and branding for a unique identity." },
    { id: "student-training-development", name: "Student Training and Development", img: "/images/training.jpg", desc: "Empower students with the latest industry skills and insights." },
    { id: "2d-3d-animation", name: "2D-3D Animation", img: "/images/2D-3D.jpg", desc: "Create stunning animations for advertisements, films, and presentations." },
    { id: "seo", name: "SEO", img: "/images/SEO card.png", desc: "Improve your website’s ranking and visibility with expert search engine optimization." },
  ];

  // Combine localServices with servicesData from services.json
  const combinedServices = [...localServices, ...servicesData];

  // Remove duplicates (if any) based on the `id` property
  const uniqueServices = combinedServices.filter((service, index, self) =>
    index === self.findIndex((s) => s.id === service.id)
  );

  return (
    <div className="min-h-screen bg-black text-white p-10 flex justify-center">
      <div className="w-full max-w-6xl">
        {/* ✅ Perfectly Centered Title */}
        <div className="flex justify-center">
          <h1 className="text-4xl font-extrabold tracking-wide bg-gradient-to-r from-[#D16BA5] via-[#86A8E7] to-[#5FFBF1] bg-clip-text text-transparent text-center">
            Our Services
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {uniqueServices.map((service, index) => (
            <div
              key={index}
              className="relative bg-[#141414] rounded-2xl text-center border border-gray-600 transition-all duration-300 group overflow-hidden hover:border-purple-500 hover:shadow-[0_0_4px_rgba(138,43,226,0.6)]"
            >
              {/* ✅ Thin Neon Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl border-[1px] border-gray-600 transition-all duration-300 pointer-events-none group-hover:border-purple-500 group-hover:shadow-[0_0_6px_rgba(138,43,226,0.8)]"></div>

              {/* 📌 Card Content */}
              <div className="relative z-10 bg-[#141414] rounded-2xl flex flex-col h-full">
                {/* 📷 Full-Width Image */}
                <div className="relative w-full h-60">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#141414] to-transparent"></div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-lg font-semibold">{service.name}</h2>
                  <p className="text-gray-400 text-sm mt-2">{service.desc}</p>
                </div>
                
              {/* ✅ Better Button Glow & Gradient */}
              <Link to={`/service/${service.id}`} className="mt-auto w-fit px-3 py-1 text-sm border border-gray-500 text-white rounded-lg 
                    transition-all duration-300 relative overflow-hidden group/button">
                    
                    {/* Gradient Text & Glow on Hover */}
                    <span className="relative z-10 transition-all duration-300 
                      group-hover/button:bg-gradient-to-r group-hover/button:from-pink-500 
                      group-hover/button:to-blue-500 group-hover/button:bg-clip-text 
                      group-hover/button:text-transparent group-hover/button:drop-shadow-[0_0_6px_rgba(255,0,255,0.8)]">
                      Read More →
                    </span>

                    {/* Gradient Border Outline on Hover */}
                    <span className="absolute inset-0 border border-transparent 
                      rounded-lg transition-all duration-300 
                      group-hover/button:border-pink-500 group-hover/button:border-r-blue-500
                      group-hover/button:shadow-[0_0_8px_rgba(255,0,255,0.8)]">
                    </span>
                  </Link>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;