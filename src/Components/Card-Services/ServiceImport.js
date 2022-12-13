      
import React from 'react';
import "./services.css";

import { Link } from 'react-router-dom';
import CardsServices from './CardsServices ';
      
const ServiceImport=(props)=>{
    return (
      <div className="container-fluid d-flex justify-content-center bodyServices">
        <section className="row h-200 justify-content-center">
            <div className="col-12 h-200 col-md-6 col-lg-3 ">
            <CardsServices
                imgsrc={require('../../images/withdraw-card-services.png')}
                title="Money withdrawa"
                textt="You can withdraw any amount of money from your e-wallet at any time ... "
                link={<Link to="/cashInthoughAgentst"></Link>}
            />
            </div>
            <div className="col-12 h-200 col-md-6 col-lg-3 ">
            <CardsServices
                imgsrc={require('../../images/transactions_card-services.png')}
                title="Money transfer "
                textt="Transferring money to your family and friends is now easier, faster, and ..."
                link={<Link to="/trancfer"></Link>}

            />
            </div>
            <div className="col-12 col-md-6 col-lg-3 ">
            <CardsServices
                imgsrc={require('../../images/Savings_card-services.png')}
                title="Deposite money "
                textt="Feeding your account by depositing money into your e-wallet when visiting..."
                link={<Link to="/mobiltop"></Link>}

            />
            </div>
            <div className="col-12 col-md-6 col-lg-3 ">
            <CardsServices
                imgsrc={require('../../images/Payments_card-services.png')}
                title="Pay bills"
                textt="Now, through your e-wallet, you can pay your bills and save them directly and.."
                link={<Link to="/bills"></Link>}

            />
            </div>            
        </section>
        </div>
        );
    }
    export default ServiceImport;
    