import HeaderMobile from "./HeaderMobile";
import BuyPackages from './BuyPackages'
import ShippingSteps from "./ShippingSteps";
import ShippingNotes from "./ShippingNotes";
import './MobileTopUp.css'
function MobileTopUpPage(){
    return(
        <div>
            <HeaderMobile/>
            <BuyPackages/>
            <ShippingSteps/>
            <ShippingNotes/>
        </div>
    );

}
export default MobileTopUpPage