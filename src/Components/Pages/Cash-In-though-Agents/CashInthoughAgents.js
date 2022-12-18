import HeaderCash from './HeaderCash'
import ShippingBenefits from './ShippingBenefits'
import ShippingSteps from './ShippingSteps'
import ShippingNotes from './ShippingNotes'
import ShippingMethods from './ShippingMethods'
import Navbar from '../../Navbar/Navbar';

import './CashInthoughAgents.css'
function CashInthoughAgents() {
    return (
        <header>
            <Navbar />
            <div>
                <HeaderCash />
                <ShippingBenefits />
                <ShippingSteps />
                <ShippingNotes />
                <ShippingMethods />

            </div>
        </header>

    );

}
export default CashInthoughAgents