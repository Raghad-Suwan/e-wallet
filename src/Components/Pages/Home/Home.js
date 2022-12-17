
import React from 'react';
//import { Link } from 'react-router-dom';

import './Home.css';
import Navbar from '../../Navbar/Navbar';
import CardImport from '../../Properties/CardImport';
import Footer from '../../Footer/Footer';
import ServiceImport from '../../Card-Services/ServiceImport';
import Pic from '../../Moving-Card/Pic';
import ContactForm from '../../ContactUs/ContactForm';
import GetStarted from '../../Get-Started/GetStarted';
import HowWorks from '../../How-Works/HowWorks';

function Home(){
    return(
      <>
      <header >
        <Navbar/>
      </header>
      {/* <div className=' cover-container d-flex flex-column  h-100 w-100 parentImg '>
        <img className='w-100  homeImage1 img-fluid img-responsive' src={require('../../../images/finaaaaaal.jpeg')} />
        <img className='w-100 homeImage2 img-fluid img-responsive' src={require('../../../images/head-home.jpeg')} />
      </div> */}
      <div className='container p-5 mb-5'>
            <div className='row g-5 pt-5'>
              <HowWorks/>
            </div>
          </div>
        <section className=''>
          <div className='container mt-5'>
            <div className='row mt-5'>
              <ServiceImport/>
            </div>
          </div>
          <div className='pb-5'>
             <GetStarted/>

          </div>
      
          <div className='container p-5'>
            <div className='row g-5 pt-5'>
              <CardImport/>
            </div>
          </div>
        </section>
        <footer className='mt-auto'>
          <Footer/>
        </footer>
      </>
);
}
export default Home;