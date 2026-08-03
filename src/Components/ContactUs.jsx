const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gray-50 motion-safe:animate-fadeIn">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
        Contact our team
      </h1>
      <p className="text-center text-gray-600 max-w-lg mb-8">
        Got any questions about the product or scaling on our platform? We’re here to help.
        Chat to our friendly team 24/7 and get onboard in less than 5 minutes.
      </p>

      {/* Contact Form & Info */}
      <div className="grid md:grid-cols-2 gap-12 bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl motion-safe:animate-fadeIn">
        {/* Left - Form */}
        <div>
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First name" className="p-3 border rounded-md" />
            <input type="text" placeholder="Last name" className="p-3 border rounded-md" />
          </div>
          <input type="email" placeholder="Email" className="w-full mt-4 p-3 border rounded-md" />
          <input type="tel" placeholder="Phone number" className="w-full mt-4 p-3 border rounded-md" />
          <textarea placeholder="Message" className="w-full mt-4 p-3 border rounded-md h-32"></textarea>
          
          {/* Services */}
          <div className="grid grid-cols-2 gap-2 mt-4">
            {['Website design', 'UX design', 'User research', 'Content creation', 'Strategy & consulting', 'Other'].map(service => (
              <label key={service} className="flex items-center gap-2">
                <input type="checkbox" className="accent-black" /> {service}
              </label>
            ))}
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full mt-6 py-3 text-black rounded-md border border-gray-500 relative overflow-hidden transition-all duration-300 group">
  
  {/* Gradient Text & Glow on Hover */}
  <span className="relative z-10 transition-all duration-300 
    group-hover:bg-gradient-to-r group-hover:from-pink-500 
    group-hover:to-blue-500 group-hover:bg-clip-text 
    group-hover:text-transparent group-hover:drop-shadow-[0_0_6px_rgba(255,0,255,0.8)]">
    Send message
  </span>

  {/* Gradient Border Outline on Hover */}
  <span className="absolute inset-0 border border-transparent 
    rounded-md transition-all duration-300 
    group-hover:border-pink-500 group-hover:border-r-blue-500 
    group-hover:shadow-[0_0_8px_rgba(255,0,255,0.8)]">
  </span>

</button>






        </div>

        {/* Right - Contact Info */}
        <div className="text-gray-700 space-y-6">
          <div>
            <h3 className="font-semibold">Chat with us</h3>
            <p className="text-sm">Speak to our friendly team via live chat.</p>
            <ul className="mt-2 space-y-2">
              <li className="text-blue-600 cursor-pointer">Start a live chat</li>
              <li className="text-blue-600 cursor-pointer">Shoot us an email</li>
              <li className="text-blue-600 cursor-pointer">Message us on X</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Call us</h3>
            <p className="text-sm">Call our team Mon-Fri from 8am to 5pm.</p>
            <p className="font-semibold">+91 92261 79062</p>
          </div>
          <div>
            <h3 className="font-semibold">Visit us</h3>
            <p className="text-sm">Chat to us in person at our office.</p>
            <p className="font-semibold">C BUILDING SAI RES BESA VELAHARI,
            Nagpur - Maharashtra (India)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
