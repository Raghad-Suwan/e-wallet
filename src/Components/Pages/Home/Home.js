
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

function Home(){
    return(
      <>
      {/* <header>
        <Navbar/>
      </header> */}
      <div>
        <img className='img-fluid' src={require('../../../image/head-home.jpeg')} />
      </div>

        <section className=' '>
          <div className='container g-5 p-5'>
            <div className='row g-5'>
              <ServiceImport/>
            </div>
          </div>
          <div className='pb-5'>
             <GetStarted/>

          </div>
      
          <div className='container g-5 p-5'>
            <div className='row g-5 pt-5'>
              <CardImport/>
            </div>
          </div>

        

       
        </section>
        {/* <footer>
                  <Footer/>
        </footer> */}
      </>
);
}
export default Home;