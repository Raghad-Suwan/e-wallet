import React, { Component } from 'react';
// import {  } from "./image";
import './About.css';

function About(){
    return(
     
     <section className="about">
         <div className="main">
            <div className="grid container">
                <div className="header">
                    <div  className="row " >
                        <div className="col col-md  text-col offset-md about-title">
                                <h1><b>This is</b></h1>
                                <h1><b>E-Wallet</b></h1>
                        </div> 
                        <div className=" col col-md  offset-md text-col" >
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
                          <img id="img1" src={require('../image/person.jpg')}  alt="person image"/>
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
                                            {/* The ratio of Palestinians who have bank accounts is about 30% of 
                                            the number of citizens eligible for opening bank accounts. 
                                            This results in 95% of financial transactions being carried out in 
                                            cash resulting in increasing the value and cost of cash itself! 
                                            This imposed a heavy burden on the Palestinian economy represented by its banks, traders, 
                                            and citizens. */}
                                            We will fill the vacuum of absent electronic payment services 
                                            urgently needed by the Palestinian market, through innovative electronic payment systems 
                                            to transfer the national economy into an advanced digital economy.
                                        </p>
                                    </div>   
                                </div>
                                {/* <div class="col-sm-5 offset-sm-1"> 
                                    <img src={require('../image/1-about.png')} alt="phone"></img>
                                </div> */}
                        </div>
                    </div>
                
                    <div class="container">
                        <div class ="row text-center">
                            <div class=" col col-sm-5 offset-sm-1"> 
                            {/* <img src='../image/1-about.png'></img>  */}
                            </div>
                            <div class="col col-sm-5 offset-sm-1"> 
                                <div className="text1">
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
                        <div class="container">
                            <div class ="row text-center">
                                <div class=" col col-sm-5 offset-sm-1"> 
                                    <div className="text1">
                                        <h4 > <b>Our Vision and Mission</b></h4>
                                        <p>
                                            aims at leading the Palestinian society and transferring it into a non-cash 
                                            society by providing easy and comfortable electronic access and channels to
                                            electronic payment systems that are innovative, developed, safe, and secure at an affordable cost.
                                        </p>
                                    </div>
                                </div>
                                {/* <div class=" col col-sm-5 offset-sm-1"> 
                                <img src='./image/1-about.png'></img>
                                </div>  */}
                            </div>
                        </div> 
                </div>
            </div>
        </div>
   </section>
 
 );
 }
 export default About;