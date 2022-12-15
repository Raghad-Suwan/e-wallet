import React  from 'react';
import './About.css';
import Navbar from '../../Navbar/Navbar';


function AboutPage(){
    return(
        <header >
        <Navbar/>
     <section className="cd about">
         <div className="main">
            <div className="grid container">
                <div className="header">
                    <div  className=" row">
                        <div className=" col col-md  text-col offset-md about-title">
                                <h1><b>This is</b></h1>
                                <h1><b>E-Wallet</b></h1>
                        </div> 
                        <div className="about-beside col col-md offset-md text-col" >
                            <p >
                                Never heard of a “digital wallet”? No biggie.<br></br>
                                Also called an e-wallet, digital wallets  can be used <br></br>                                          
                                to make payments right on your phone without stopping <br></br>
                                to dig around in your purse,futz with your wallet<br></br>
                                and then race to get your cash or card out. <br></br>
                                Plus, it’s a great way to make payments with your phone safely.<br></br>
                                An e-wallet is a secure money management app or online platform that <br></br>
                                allows you to make purchases with retailers on-site, transfer or send money<br></br>
                            </p>
                        </div>
                    </div>
               </div>
               <br/>
                <div className="mid">
                    <div className="row">
                        <div className="col"> 
                          <img className='img1 img-fluid' src={require('../../../images/person.jpg')}  alt="person "/>
                        </div> 
                    </div>
                </div>  
                        
                <div className="about-text"> 
                    <div className="container">
                        <div className ="row text-center"> 
                                <div className ="col col-sm-5 offset-sm-1 ">
                                    <div className="text1">
                                        <h4><b>Why Was Established?</b></h4>
                                        <p> Cash financial transactions control the economy in Palestine.
                                            We will fill the vacuum of absent electronic payment services 
                                            urgently needed by the Palestinian market, through innovative electronic payment systems 
                                            to transfer the national economy into an advanced digital economy.
                                        </p>
                                    </div>   
                                </div>
                        </div>
                    </div>
                
                    <div className="container">
                        <div className ="row text-center">
                            <div className=" col col-sm-5 offset-sm-1"> 
                            </div>
                            <div className="col col-sm-5 offset-sm-1"> 
                                <div className="text1 ">
                                    <h4 > <b>Who Benefits from Services? </b></h4>
                                    <p>
                                        Palestenian individuals will benefit . 
                                        Electronic payment and wallet services will contribute to a large extent to 
                                        reducing cost for all sectors of society in addition to providing comfort, convenience, a
                                        nd time for users.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className=" container">
                            <div className ="row text-center">
                                <div className="col col-sm-5 offset-sm-1"> 
                                    <div className="text1">
                                        <h4 > <b>Our Vision and Mission</b></h4>
                                        <p>
                                            aims at leading the Palestinian society and transferring it into a non-cash 
                                            society by providing easy and comfortable electronic access and channels to
                                            electronic payment systems that are innovative, developed, safe, and secure at an affordable cost.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                </div>
            </div>
        </div>
   </section>
   </header>

 );
 }
 export default AboutPage;