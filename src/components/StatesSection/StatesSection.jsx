import React from 'react';
import mobileImg from '../../assets/hero.png'

const StatesSection = () => {
  return (
    <section className="flex flex-col items-center justify-center  bg-white">
      <img
        src={mobileImg}
        alt="App Preview"
        className="max-w-xs sm:max-w-md w-full rounded-2xl  "
      />
    </section>
  );
};

export default StatesSection;
