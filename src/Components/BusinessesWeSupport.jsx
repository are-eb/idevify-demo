import { useState, useEffect } from "react";

const businesses = [
  { name: "Google", logo: "icons/gangstaa_logo.png" },
  { name: "Amazon", logo: "icons/sundarjag-removebg-preview.png" },
  { name: "Microsoft", logo: "icons/pngkey.com-basuri-png-9863616.png" },
  { name: "Facebook", logo: "icons/ocean_logo-removebg-preview.png" },
  { name: "Tesla", logo: "icons/owlnight-removebg-preview.png" },
  { name: "Apple", logo: "icons/logo_synodic.png" },
  { name: "Netflix", logo: "icons/gravitones-removebg-preview.png" },
  { name: "Adobe", logo: "icons/EXCELLENCE.png" },
  { name: "IBM", logo: "icons/ADNOC_logo.png" },
  { name: "Samsung", logo: "icons/avis-removebg-preview.png" },
  { name: "Intel", logo: "icons/biz_petro.png" },
  { name: "Oracle", logo: "icons/caradvert.png" },
  { name: "Uber", logo: "icons/cpa.png" },
  { name: "Airbnb", logo: "icons/Dhiraj_Jewellers.png" },
  { name: "Spotify", logo: "icons/DJ.png" },
  { name: "Cisco", logo: "icons/growbean.png" },
  { name: "HP", logo: "icons/kids.png" },
  { name: "Dell", logo: "icons/r2d.png" },
  { name: "NVIDIA", logo: "icons/infiniarc.png" },
  { name: "PayPal", logo: "icons/sunderjodi.png" },
  { name: "Salesforce", logo: "icons/sortella.png" },
  { name: "Siemens", logo: "icons/testus.png" },
  { name: "Qualcomm", logo: "icons/infinity.png" },
  { name: "LinkedIn", logo: "icons/digisva.png" },
  { name: "Reddit", logo: "icons/croma.png" },
  { name: "Twitter", logo: "icons/Rabdiwala.png" },
];

const BusinessesWeSupport = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleBusinesses = isMobile && !showAll ? businesses.slice(0, 9) : businesses;

  return (
    <div className="h-auto bg-black text-white px-6 pt-6 pb-5 flex flex-col items-center">

      {/* ✅ Outer Box with Less Height */}
      <div className="w-full max-w-7xl bg-[#121212] rounded-2xl p-6 shadow-xl border border-gray-800">
        
        {/* ✅ Title Inside the Outer Box */}
        <h1 className="text-4xl md:text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
          bg-clip-text text-transparent text-center mb-4">
          Businesses We Support
        </h1>

        {/* ✅ Inner Box with Less Padding */}
        <div className="bg-[#1f1f1f] rounded-xl p-4">
          {/* ✅ Responsive Logo Grid */}
          <div className="grid grid-cols-3 lg:grid-cols-9 gap-4">
            {visibleBusinesses.map((business, index) => (
              <div key={index} className="group relative flex justify-center items-center">
                <img 
                  src={business.logo} 
                  alt={business.name} 
                  className="w-20 h-20 md:w-24 md:h-24 object-contain transition-transform duration-300 group-hover:scale-110 
                    group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ "View More" Button (Only on Mobile) */}
      {isMobile && !showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-4 px-6 py-2 border border-gray-500 text-white rounded-lg 
            transition-all duration-300 hover:border-pink-500 hover:text-pink-400"
        >
          View More
        </button>
      )}
    </div>
  );
};

export default BusinessesWeSupport;
