import React from 'react';
import '../Services.css';
import CardWithdraw from "./CardWithdrawa";
import Menue from "../../WalletDesign/Menue";

const ImportWithdraw=()=>{
    return(
        <header>
            <Menue />
            <div className="container-fluid d-flex justify-content-center ">
                <section className="row  ">
                    <div className="col-12 col-md-12 " data-aos="fade-right">
                        <CardWithdraw />
                    </div>
                </section>
            </div>
        </header>
    )
}
export default ImportWithdraw