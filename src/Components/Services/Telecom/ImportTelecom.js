import React from 'react';
import './CardTelecomPush.css';
import AdressPush from '../AdressCardpush';
import CardTelecomPush from './CardTelecomPush';
import Menue from '../../WalletDesign/Menue';

const ImportTelecom=()=>{
return(
    <header>
    <Menue/>
    <div>
        <AdressPush />
        <CardTelecomPush />
    </div>
    </header>

)

}
export default ImportTelecom