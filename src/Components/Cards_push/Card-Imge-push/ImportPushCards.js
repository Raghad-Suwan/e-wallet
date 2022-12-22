import React from 'react';
import Cardpushkind from './CardPush';
import './CardPush.css';
import image1 from '../../../images/university_new.jpg';
import image2 from '../../../images/electricity1.jpg';
import image3 from '../../../images/Telecom.jpg';
import Menue from '../../WalletDesign/Menue';

const ImportPushCard=()=>{
return(
    <>
        <Menue />
<div className="container-fluid d-flex justify-content-center bodyPush">
    <section className="row justify-content-center ">
        <div className="col-10 col-md-5 col-lg-4 p-4" data-aos="fade-right" >
                <Cardpushkind 
                imagsrc={image1} 
                text="university" 
                linke="/wallet-pay-bills-university"
                />
            </div>
                <div className="col-10 col-md-5 col-lg-4  p-4"data-aos="fade-right" >
                    <Cardpushkind
                    imagsrc={image2} 
                    text="electricity"
                    linke="/wallet-pay-bills-electricity"
                    />
                </div>
                    <div className="col-10 col-md-5 col-lg-4 p-4" data-aos="fade-right">
                        <Cardpushkind 
                        imagsrc={image3} 
                        text="telecom" 
                        linke="/wallet-pay-bills-telecom"
                        />
                    </div>
    
        </section>
    </div>
    </>
)
}
export default ImportPushCard