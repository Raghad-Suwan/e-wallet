import Card_push_kind from "./Card_push";
import './Card_push.css';
import image1 from '../../../images/electricity1.jpg';
import image2 from '../../../images/university_new.jpg';
import image3 from '../../../images/Telecom.jpg';

const PushImport_Cards=()=>{
return(
<div className="container-fluid d-flex justify-content-center bodyPush">
    <section className="row h-200 justify-content-center">
        <div className="col-12 h-200 col-md-6 col-lg-3 ">
                <Card_push_kind imgsrc={image2} textt="university" />
            </div>
                <div className="col-12 h-200 col-md-6 col-lg-3 ">
                    <Card_push_kind imgsrc={image1} textt="electricity"/>
                </div>
                    <div className="col-12 h-200 col-md-6 col-lg-3 ">
                        <Card_push_kind imgsrc={image3} textt="telecom" />
                    </div>
    
        </section>
    </div>
)
}
export default PushImport_Cards