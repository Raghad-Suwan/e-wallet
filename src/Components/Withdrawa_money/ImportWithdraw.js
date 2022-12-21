import React from 'react';
import AdressWithdraw from "./AdressCardWithdraw";
import './CardWithdraw.css';
import CardWithdraw from "./CardWithdrawa";
import Menue from "../WalletDesign/Menue";

const ImportWithdraw=()=>{
    return(
        <div>
            <Menue />
            {/* <AdressWithdraw /> */}
            <div className='mt-3 p-5'>
                  <CardWithdraw />
            </div>
          
        </div>
    )
}
export default ImportWithdraw