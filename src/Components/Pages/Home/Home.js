
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
import ImageHome from '../../Image-Home/ImageHome';
import HowWorksImport from '../../How-Works/HowWorksImport';

function Home() {
  return (
    <>
      <header >
        <Navbar />
        <ImageHome/>
      </header>
      <section className='p-5 ' >
            <HowWorksImport />
      </section>
      <section className='seconedPartOfHome '>
        <div className='container '>
          <div className='row '>
            <ServiceImport />
          </div>
        </div>
      </section>
      <section>
        <div className='pb-0'>
          <GetStarted />
        </div>
      </section>
      <section>
        <div className='container p-5'>
          <div className='row g-5 pt-5'>
            <CardImport />
          </div>
        </div>
      </section>

      <footer className='mt-auto '>
        <Footer />
      </footer>
    </>
  );
}
export default Home;