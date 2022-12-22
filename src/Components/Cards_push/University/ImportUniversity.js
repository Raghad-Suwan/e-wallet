import AdressPush from '../AdressCardpush';
import './CardUniversityPush.css';
import CardPushUniversity from './CardUniversityPush';

const ImportUniversity=()=>{
    return(
        <div className="container-fluid d-flex justify-content-center ">
            <section className="row  ">
                <div className="col-12 col-md-12 " data-aos="fade-right">
                <AdressPush />
                <CardPushUniversity />
                
                </div>
                </section>
        </div>
    )
}
export default ImportUniversity