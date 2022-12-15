import HeaderTransfer from './HeaderTransfer'
import SendMoney from './SendMoney';
import ConversionSteps from './ConversionSteps';
import ConversionNotes from './ConversionNotes';
import './MonyTransfer.css'
function MonyTransferPage(){
    return(
        <div>
            <HeaderTransfer></HeaderTransfer>
            <SendMoney/>
            <ConversionSteps/>
            <ConversionNotes/>
           
        </div>
    );
}
export default MonyTransferPage;