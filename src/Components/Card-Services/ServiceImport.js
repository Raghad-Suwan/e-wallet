      
import React from 'react';
import "./services.css";

import { Link } from 'react-router-dom';
import CardsServices from './CardsServices ';
      
const ServiceImport=(props)=>{
    return (
      <div className="container-fluid d-flex justify-content-center">
        <section className="row">
            <div className="col-md-4">
            <CardsServices
                imgsrc={require('../../images/deposit1.jpg')}
                title="Money withdrawal"
                textt="You can withdraw any amount of money from your e-wallet at any time ... "
                link={<Link to="/cashInthoughAgentst"></Link>}
            />
            </div>
            <div className="col-md-4">
            <CardsServices
                imgsrc={require('../../image/Transformation.jpg')}
                title="Money transfer "
                textt="Transferring money to your family and friends is now easier, faster, and ..."
                link={<Link to="/trancfer"></Link>}

            />
            </div>
            <div className="col-md-4">
            <CardsServices
                imgsrc={require('../../image/Withdrawal.jpg')}
                title="Deposite money "
                textt="Feeding your account by depositing money into your e-wallet when visiting one of ..."
                link={<Link to="/mobiltop"></Link>}

            />
            </div>
            <div className="col-md-4">
            <CardsServices
                className="card44"
                imgsrc={require('../../image/pay.jpg')}
                title="Pay for merchants"
                textt="Paying merchants, shops, and even restaurants is now easier and faster!..."
                link={<Link to="/bills"></Link>}

            />
            </div>
            <div className="col-md-4">
            <CardsServices
                imgsrc={require('../../image/biils.png')}
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
    