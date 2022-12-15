import Card_push_kind from "./Component/Cards_Push/Cards_push";
import './Component/Cards_Push/Card_push.css';
import image1 from './Component/electricity1.jpg';
import image2 from './Component/university_new.jpg';
import image3 from './Component/Telecom.jpg';

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