
import React from 'react';
//import { Link } from 'react-router-dom';

import './Home.css';
import Navbar from '../../Navbar/Navbar';
import CardImport from '../../Properties/CardImport';
import Footer from '../../Footer/Footer';
import ServiceImport from '../../Card-Services/ServiceImport';
import Card3 from '../../Properties/Card3';
import Pic from '../../Moving-Card/Pic';
import ContactForm from '../../ContactUs/ContactForm';

function Home(){
    return(
      <>
        {/* <Navbar/> */}
        <CardImport/>
        <ServiceImport/>
        <Card3/>
        <Footer/>
        {/* <Pic/> */}
        {/* <ContactForm/> */}
      </>
);
}
export default Home;