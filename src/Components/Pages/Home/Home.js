
import React from 'react';

import './Home.css';
//import { Link } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import CardImport from '../../Properties/CardImport';
import Footer from '../../Footer/Footer';
import ServiceImport from '../../Card-Services/ServiceImport';
import Card3 from '../../Properties/Card3';
import Pic from '../../Moving-Card/Pic';

function Home(){
    return(
      <>
        <Navbar/>
        <CardImport/>
        <ServiceImport/>
        <Card3/>
        <Footer/>
        <Pic/>
      </>
);
}
export default Home;