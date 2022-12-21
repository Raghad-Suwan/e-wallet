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
        
        <div className="container-fluid d-flex justify-content-center bodyPush">
            <section className="row h-200 justify-content-center">
                <div className="col-12 h-200 col-md-6 col-lg-3 ">
                    
                    <Cardpushkind imgsrc={image2} textt="university" />
                </div>
                <div className="col-12 h-200 col-md-6 col-lg-3 ">
                    <Cardpushkind imgsrc={image1} textt="electricity" />
                </div>
                <div className="col-12 h-200 col-md-6 col-lg-3 ">
                    <Cardpushkind imgsrc={image3} textt="telecom" />
                </div>
            </section>
        </div>
        </div>
        
    )
}
export default ImportPushCard