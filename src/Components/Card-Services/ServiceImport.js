      
import React from 'react';
import "./services.css";
import img1 from "../../image/deposit1.jpg";
import img2 from "../../image/Trasformation.jpg";
import img3 from "../../image/Withdrawal.jpg";
import img4 from "../../image/pay.jpg";
import img5 from "../../image/bills.png";

      
      
const ServiceImport=(props)=>{
    return (
      <div className="container-fluid d-flex justify-content-center">
        <section className="row">
            <div className="col-md-4">
            <CardsServices
                imgsrc={img1}
                title="Money withdrawal"
                textt="You can withdraw any amount of money from your e-wallet at any time ... "
            />
            </div>
            <div className="col-md-4">
            <CardsServices
                imgsrc={img2}
                title="Money transfer "
                textt="Transferring money to your family and friends is now easier, faster, and ..."
            />
            </div>
            <div className="col-md-4">
            <CardsServices
                imgsrc={img3}
                title="Deposite money "
                textt="Feeding your account by depositing money into your e-wallet when visiting one of ..."
            />
            </div>
            <div className="col-md-4">
            <CardsServices
                className="card44"
                imgsrc={img4}
                title="Pay for merchants"
                textt="Paying merchants, shops, and even restaurants is now easier and faster!..."
            />
            </div>
            <div className="col-md-4">
            <CardsServices
                imgsrc={img5}
                title="Pay bills"
                textt="Now, through your e-wallet, you can pay your bills and save them directly and.."
            />
            </div>
        </section>
        </div>
        );
    }
    export default ServiceImport;
    