import HeaderCash from './HeaderCash'
import ShippingBenefits from './ShippingBenefits'
import ShippingSteps from './ShippingSteps'
import ShippingNotes from './ShippingNotes'
import ShippingMethods from './ShippingMethods'
import './CashInthoughAgents.css'
function CashInthoughAgents(){
    return(
        <div>
            <HeaderCash/>
            <ShippingBenefits/>
            <ShippingSteps/>
            <ShippingNotes/>
            <ShippingMethods/>
            
        </div>
    );

}
export default CashInthoughAgents