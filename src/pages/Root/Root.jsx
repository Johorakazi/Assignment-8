import React from 'react'
import Navbar from '../../components/Header/Navbar'
import { Outlet } from 'react-router'
import Footer from '../../components/Footer/Footer'

const Root = () => {
  return (
      <div >
          
       <Navbar></Navbar> 
       <div >
        <Outlet></Outlet>
       </div>
       <Footer></Footer>
      </div>
  );
};

export default Root;