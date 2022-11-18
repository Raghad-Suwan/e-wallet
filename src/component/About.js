//import React, { Component } from 'react';


function About(){
    return(
     <>
     <section className="about">
         <div className="main">
            <div class="container">
                <div class ="row">
                    <div class="col-md"> 
                        <div className="image">
                            <img src="/image/ewallet-icone.png"  alt="about the website"/>
                                        {/* //<img src="/image/crypto-wallet.png" id="img2" alt="about the website"/> */}
                        </div>
                        <div className="about-us">
                            <h1><b>About us</b></h1>
                        </div>
                    </div>
                </div>
            </div>
            
         <div className="about-text"> 
         <div class="container">
            <div class ="row">
                <div class="col-md"> 
                    <div>
                        {/* <img src="/image/551fffffffff-01.png"  alt="about the website"/> */}
                    </div>
                    <div className="text1">
                        <h4><b>Why Was Established?</b> </h4>
                        <p> Cash financial transactions control the economy in Palestine.
                            The ratio of Palestinians who have bank accounts is about 30% of 
                            the number of citizens eligible for opening bank accounts. 
                            This results in 95% of financial transactions being carried out in 
                            cash resulting in increasing the value and cost of cash itself! 
                            This imposed a heavy burden on the Palestinian economy represented by its banks, traders, and citizens.
                            Hence, Jawwal Pay will fill the vacuum of absent electronic payment services 
                            urgently needed by the Palestinian market, through innovative electronic payment systems 
                            to transfer the national economy into an advanced digital economy.
                        </p>
                    </div>   
                </div>
            </div>
        </div>
                 
        <div class="container">
                <div class ="row">
                    <div class="col-md"> 
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
                <div class ="row">
                    <div class="col-md"> 
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
   </section>
 </>
 );
 }
 export default About;