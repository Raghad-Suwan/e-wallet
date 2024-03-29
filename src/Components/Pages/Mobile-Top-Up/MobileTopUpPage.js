import HeaderMobile from "./HeaderMobile";
import BuyPackages from './BuyPackages'
import ShippingSteps from "./ShippingSteps";
import ShippingNotes from "./ShippingNotes";
import './MobileTopUp.css'
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
function MobileTopUpPage(){
    return(
        <header>
        <Navbar/>
        <div>
            <HeaderMobile/>
            <BuyPackages/>
            <ShippingSteps/>
            <ShippingNotes/>
        </div>
    <Footer />

        </header>
    );

}
export default MobileTopUpPage