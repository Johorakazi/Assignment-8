import React from 'react'
import Banner from '../../components/Banner/Banner';
import StatesSection from '../../components/StatesSection/StatesSection';
import TopAppsSection from '../../components/TopAppsSection/TopAppsSection';

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <StatesSection></StatesSection>
        <TopAppsSection></TopAppsSection>
    </div>
  );
};

export default Home;