import "/Users/sahutsky22/Documents/GitHub/AI-Analysis-Web/src/assets/Componentdesign/Slogan.css"
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="relative w-full h-screen">
      {/* Fullscreen Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/Vidio/12245077-hd_1920_1080_30fps.mp4" // Ensure this path is relative to the public directory
        autoPlay
        loop
        muted
      ></video>

      {/* Black Filter Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black" style={{ opacity: 0.5 }}>
        {/* Adjust opacity as needed */}
      </div>

      {/* Centered Text and Buttons */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="custom-heading text-center text-2xl sm:text-3xl md:text-6xl lg:text-6xl font-bold">
          <span>EXPLORATION</span>
          <span>FINANCIAL</span>
          <span>WORLD</span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl md:text-2xl mt-4">
          Some additional description or slogan (optional).
        </p>

        {/* Buttons */}
        <div className="mt-8 space-x-4">
          <Link to="/analysis">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Analysis
            </button>
          </Link>
          <Link to="/research">
            <button className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
              Research
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;