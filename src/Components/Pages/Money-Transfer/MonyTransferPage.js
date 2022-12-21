import HeaderTransfer from './HeaderTransfer'
import SendMoney from './SendMoney';
import ConversionSteps from './ConversionSteps';
import ConversionNotes from './ConversionNotes';
import './MonyTransfer.css'
import Navbar from '../../Navbar/Navbar';
function MonyTransferPage(){
    return(
        <header>
        <Navbar />
        <div>
            <HeaderTransfer></HeaderTransfer>
            <SendMoney/>
             <ConversionSteps/>
            <ConversionNotes/>
           
        </div>
        </header>

    );
}
export default MonyTransferPage;