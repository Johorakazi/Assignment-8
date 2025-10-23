import React from 'react';

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[420px] bg-white">
      
      <h2 className="text-5xl sm:text-6xl font-black text-center leading-tight mb-2">
        We Build <br />
        <span className="text-violet-600">Productive</span> Apps
      </h2>

      <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto text-center mt-4 mb-8">
        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. 
        Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>

     <div className="flex gap-4 mb-2 flex-wrap justify-center">
  
  {/* Google Play Button */}
  <a
    href="https://play.google.com/store"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center border border-gray-300 bg-white rounded-lg px-4 py-2 shadow hover:border-gray-400 transition w-[180px] gap-3"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Play_2016_icon.svg"
      alt="Google Play"
      className="w-6 h-6"
    />
    <span className="font-semibold text-gray-800 text-sm">Google Play</span>
  </a>

  {/* App Store Button */}
  <a
    href="https://www.apple.com/app-store/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center border border-gray-300 bg-white rounded-lg px-4 py-2 shadow hover:border-gray-400 transition w-[180px] gap-3"
  >
    <img
      src="https://www.google.com/search?q=apple+app+store+logo&oq=apple+&gs_lcrp=EgZjaHJvbWUqDQgCEAAYkQIYgAQYigUyBwgAEAAYjwIyGAgBEC4YQxjHARixAxjJAxjRAxiABBiKBTINCAIQABiRAhiABBiKBTINCAMQABiRAhiABBiKBTIMCAQQABhDGIAEGIoFMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEJMTQxODRqMGo3qAIIsAIB8QWm5l3iS25Eh_EFpuZd4ktuRIc&sourceid=chrome&ie=UTF-8"
      alt="App Store"
      className="w-6 h-6"
    />
    <span className="font-semibold text-gray-800 text-sm">App Store</span>
  </a>
</div>

    </div>
  );
};

export default Banner;
