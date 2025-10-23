import React from 'react';

const stats = [
  {
    title: 'Total Downloads',
    value: '29.6M',
    desc: '21% More Than Last Month'
  },
  {
    title: 'Total Reviews',
    value: '906K',
    desc: '46% More Than Last Month'
  },
  {
    title: 'Active Apps',
    value: '132+',
    desc: '31 More Will Launch'
  }
];

const TopAppsSection = () => {
  return (
    <div className="w-full py-14 px-6 text-center flex flex-col items-center justify-center bg-[#1976e5]">
      <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-10">
        Trusted By Millions, Built For You
      </h2>
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {stats.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="text-lg text-[#bddaff] font-medium mb-2">{item.title}</span>
            <span className="text-5xl sm:text-6xl font-extrabold text-white mb-2">{item.value}</span>
            <span className="text-sm text-[#bddaff]">{item.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopAppsSection;