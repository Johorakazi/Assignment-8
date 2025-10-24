import React from 'react'
import Banner from '../../components/Banner/Banner';
import StatesSection from '../../components/StatesSection/StatesSection';
import TopAppsSection from '../../components/TopAppsSection/TopAppsSection';
import Homecard from '../Homecard/Homecard';


const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <StatesSection></StatesSection>
        <TopAppsSection></TopAppsSection>
        <div className='max-w-screen-xl w-full max-auto px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 flex-1 '>
          <Homecard></Homecard>
        </div>
      

    </div>
  );
};

export default Home;