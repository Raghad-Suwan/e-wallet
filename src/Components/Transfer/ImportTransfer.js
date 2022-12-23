import AdressTransfer from "./Adress"
import './Transfer.css';

import Transfer from "./Transfer";
import Menue from "../WalletDesign/Menue";
const ImportTransfer = () => {
    return (
        <div>
            <Menue />
            <AdressTransfer />
            <Transfer />
        </div>
    )
}
export default ImportTransfer;