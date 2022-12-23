import React from "react";

import './CardElectricity.css';
import AdressPush from '../AdressCardpush';
import CardElectricity from './CardElectricityPush';
import Menue from "../../WalletDesign/Menue";

const ImportElectricity = () => {
    return (
        <header>
            <Menue/>
        <div>
            <AdressPush />
            <CardElectricity />
        </div>
        </header>
    )
}
export default ImportElectricity