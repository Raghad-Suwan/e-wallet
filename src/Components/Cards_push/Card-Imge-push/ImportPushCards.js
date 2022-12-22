import Cardpushkind from './CardPush';
import './CardPush.css';

import image1 from '../../../images/university_new.jpg';
import image2 from '../../../images/electricity1.jpg';
import image3 from '../../../images/Telecom.jpg';

const ImportPushCard=()=>{
return(
    
<div className="container-fluid d-flex justify-content-center bodyPush">
    <section className="row justify-content-center">
        <div className="col-10 col-md-5 col-lg-4 " data-aos="fade-right" >
                <Cardpushkind 
                imagsrc={image1} 
                text="university" 
                linke="/wallet-paybills-university"
                />
            </div>
                <div className="col-10 col-md-5 col-lg-4 "data-aos="fade-right" >
                    <Cardpushkind
                    imagsrc={image2} 
                    text="electricity"
                    linke="/wallet-paybill-selectricity"
                    />
                </div>
                    <div className="col-10 col-md-5 col-lg-4 " data-aos="fade-right">
                        <Cardpushkind 
                        imagsrc={image3} 
                        text="telecom" 
                        linke="/wallet-paybills-telecom"
                        />
                    </div>
    
        </section>
    </div>
)
}
export default ImportPushCard