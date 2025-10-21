import React from 'react';

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[420px] bg-white">
      
      {/* Heading */}
      <h2 className="text-5xl sm:text-6xl font-black text-center leading-tight mb-2">
        We Build <br />
        <span className="text-violet-600">Productive</span> Apps
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto text-center mt-4 mb-8">
        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. 
        Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>

      {/* Store Buttons */}
      <div className="flex gap-4 mb-2">
        
        {/* Google Play */}
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between border border-gray-300 bg-white rounded-lg px-4 py-2 shadow hover:border-gray-400 transition w-[180px]"
        >
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48">
              <path fill="#43A047" d="M9.7 6.33C8.79 6.76 8 7.77 8 9v30c0 1.23.79 2.24 1.7 2.67l16.2-16.2z"/>
              <path fill="#1E88E5" d="M34.1 32.89L27.14 28.05 9.7 45.67c.6.27 1.25.33 1.91-.14z"/>
              <path fill="#FFB300" d="M37.56 22.34l-5.69-3.61-22.38 22.35c.47.74 1.15 1.03 1.91.14z"/>
              <path fill="#FF3D00" d="M38.25 23.13l-4.62-2.93 4.58-2.81c.55-.33.55-.99 0-1.32z"/>
            </svg>
            <span className="font-semibold text-gray-800 text-sm">Google Play</span>
          </div>

          {/* Right-side icon */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Play_2016_icon.svg"
            alt="Google Play Icon"
            className="w-5 h-5"
          />
        </a>

        {/* App Store */}
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between border border-gray-300 bg-white rounded-lg px-4 py-2 shadow hover:border-gray-400 transition w-[180px]"
        >
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.564 12.099c-.016-2.264 1.812-3.343 ...Z" />
            </svg>
            <span className="font-semibold text-gray-800 text-sm">App Store</span>
          </div>

          {/* Right-side icon */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="App Store Icon"
            className="w-5 h-5"
          />
        </a>
      </div>
    </div>
  );
};

export default Banner;