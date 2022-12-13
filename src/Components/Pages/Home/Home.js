
import React from 'react';
//import { Link } from 'react-router-dom';

import './Home.css';
import Navbar from '../../Navbar/Navbar';
import CardImport from '../../Properties/CardImport';
import Footer from '../../Footer/Footer';
import ServiceImport from '../../Card-Services/ServiceImport';
import Pic from '../../Moving-Card/Pic';
import ContactForm from '../../ContactUs/ContactForm';

function Home(){
    return(
      <>
      {/* <header>
        <Navbar/>
      </header> */}
        
        <section className='container'>
        <div className='row g-5'>
        <ServiceImport/>
        </div>  
        <div className='container'>

        </div>
        <div className='row specialColToLog'>
          <div className='col'>
            <p>
             
            </p>

          </div>
          <div className='col'>

          </div>


        </div>
        <div className='row '>
         
          <CardImport/>

        </div>

       
        </section>
        {/* <footer>
                  <Footer/>
        </footer> */}
      </>
);
}
export default Home;