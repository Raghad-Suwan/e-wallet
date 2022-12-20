import React from "react";
import './About.css';
import AboutContent from "./AboutContent";
const AboutText = () => {
    return (
        
        <div className="container d-flex pt-5 ">
            <div className="aboutText">
                <div className="row text-center">
                    <div class="col-12 col-lg-4 ">
                        <AboutContent
                            subtitle="Why Was Established?"
                            content="Cash financial transactions control the economy in Palestine.
             We will fill the vacuum of absent electronic payment services
             urgently needed by the Palestinian market, through innovative electronic payment systems
             to transfer the national economy into an advanced digital economy."
                        />
                    </div>
                    <div class="col-12 col-lg-4 ">
                        <AboutContent
                            subtitle="Who Benefits from Services?"
                            content="Palestenian individuals will benefit .
             Electronic payment and wallet services will contribute to a large extent to
             reducing cost for all sectors of society in addition to providing comfort, convenience, a
             nd time for users."
                        />
                    </div>
                    <div class="col-12 col-lg-4 ">
                        <AboutContent
                            subtitle="Our Vision and Mission"
                            content="aims at leading the Palestinian society and transferring it into a non-cash
             society by providing easy and comfortable electronic access and channels to
             electronic payment systems that are innovative, developed, safe, and secure at an affordable cost."
                        />
                    </div>
                </div>
            </div>
        </div>


    );
}
export default AboutText;