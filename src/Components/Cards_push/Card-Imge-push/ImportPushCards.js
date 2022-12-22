import React from 'react';
import Cardpushkind from './CardPush';
import './CardPush.css';
import image1 from '../../../images/university_new.jpg';
import image2 from '../../../images/electricity1.jpg';
import image3 from '../../../images/Telecom.jpg';
import Menue from '../../WalletDesign/Menue';

const ImportPushCard = () => {
    return (
        <div>
            <Menue />

        <div className="container d-flex justify-content-center align-items-center bodyPush">
            <section className="row h-200 justify-content-center align-items-center">
                <div className="col-4  col-md-5 col-lg-3 ">
                    <Cardpushkind imgsrc={image2} textt="University"
                    continue="/wallet-pay-bills-university" />
                </div>
                <div className="col-4  col-md-5 col-lg-3 ">
                    <Cardpushkind imgsrc={image1} textt="Electricity" 
                     continue="/wallet-pay-bills-electricity" />
                </div>
                <div className="col-4  col-md-5 col-lg-3 ">
                    <Cardpushkind imgsrc={image3} textt="Telecom" 
                     continue="/wallet-pay-bills-telecom" />
                </div>
            </section>
        </div>
        </div>
        
    )
}
export default ImportPushCard