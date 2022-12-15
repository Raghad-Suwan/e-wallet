import './Footer.css';
import React  from 'react';
import { Link } from 'react-router-dom';
const Footer=()=>{
    return(
      <div className="footer">
          <footer className="margin">
              <div class="container-fluid">
                  <div className='social'>

                      <a href="https://www.facebook.com/"><i class="fab fa-facebook" ></i></a>
                      <a href="https://twitter.com/i/flow/login"><i class="fab fa-twitter"></i></a>
                      <a href="https://support.google.com/"><i class="fab fa-google-plus-g" ></i></a>
                      <a href="https://www.linkedin.com/"><i class="fab fa-linkedin" ></i></a>
                      <a href="https://www.instagram.com"><i class="fab fa-instagram"></i></a>

                  </div>

                  <ul className='list'>
                    < a href='/'>HOME</a>
                    < a href='#'> PRIVCY</a>
                    < a href='/contact'> CONTACT US </a>
                    < a href='/about'> ABOUT US </a>
                  </ul>

                  < p className='copyrught'>
                    E-Wallet, All Rights Reserved © 2022
                  </p>                 
                </div>          
          </footer>
      </div>
    )
  }
    
  export default Footer;
