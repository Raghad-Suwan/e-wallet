import React from "react";
import '../Services.css';
import CardElectricity from './CardElectricityPush';
import Menue from "../../WalletDesign/Menue";

const ImportElectricity = () => {
    return (
        <header>
            <Menue />
            <div className="container-fluid d-flex justify-content-center ">
                <section className="row  ">
                    <div className="col-12 col-md-12 p-5" data-aos="fade-right">
                        <CardElectricity />
                    </div>
                </section>
            </div>
        </header>
    )
}
export default ImportElectricity