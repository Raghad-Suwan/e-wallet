
import React from 'react';
import "./services.css";
import CardsServices from './CardsServices ';
const ServiceImport = () => {
    return (
<<<<<<< HEAD
      <div className="container-fluid d-flex justify-content-center bodyServices">
        <section className="row  justify-content-center">
            <div className="col-12 col-md-6 col-lg-3 ">
            <CardsServices
                imgsrc={require('../../images/withdraw-card-services.png')}
                title="Money withdrawa"
                textt="You can withdraw any amount of money from your e-wallet at any time and any ... "
                link={<Link to="/cashInthoughAgentst"></Link>}
            />
            </div>
            <div className="col-12  col-md-6 col-lg-3 ">
            <CardsServices
                imgsrc={require('../../images/transactions_card-services.png')}
                title="Money transfer "
                textt="Transferring money to your family and friends is now easier, faster,and easy work ..."
                link={<Link to="/trancfer"></Link>}

            />
            </div>
            <div className="col-12 col-md-6 col-lg-3 ">
            <CardsServices
                imgsrc={require('../../images/Savings_card-services.png')}
                title="Deposite money "
                textt="Feeding your account by depositing money into your e-wallet when visiting page..."
                link={<Link to="/mobiltop"></Link>}

            />
            </div>
            <div className="col-12 col-md-6 col-lg-3 ">
            <CardsServices
                imgsrc={require('../../images/Payments_card-services.png')}
                title="Pay bills"
                textt="Now, through your e-wallet, you can pay your bills and save them directly and how..."
                link={<Link to="/bills"></Link>}

            />
            </div>            
        </section>
=======
        <div className="container-fluid d-flex justify-content-center  bodyServices">
            <section className="row  ">
                <div className="col-10 col-md-5 col-lg-3 ">
                    <CardsServices
                        imgsrc={require('../../images/withdraw-card-services.png')}
                        title="Money withdrawa"
                        textt="You can withdraw any amount of money from your e-wallet at any time ... "
                        link="/cashInthoughAgents"
                    />
                </div>
                <div className="col-10  col-md-5 col-lg-3 ">
                    <CardsServices
                        imgsrc={require('../../images/transactions_card-services.png')}
                        title="Money transfer "
                        textt="Transferring money to your family and friends is now easier, faster, and easy ..."
                        link="/transfermoney"

                    />
                </div>
                <div className="col-10 col-md-5 col-lg-3 ">
                    <CardsServices
                        imgsrc={require('../../images/Savings_card-services.png')}
                        title="Deposite money "
                        textt="Feeding your account by depositing money into your e-wallet when visiting..."
                        link="/mobiltop"

                    />
                </div>
                <div className="col-10 col-md-5 col-lg-3 ">
                    <CardsServices
                        imgsrc={require('../../images/Payments_card-services.png')}
                        title="Pay bills"
                        textt="Now, through your e-wallet, you can pay your bills and save them directly and.."
                        link="/billsmarchent"
                    />
                </div>
            </section>
>>>>>>> 46fe7fc2585b0436725c86d8ed74cadec64e25e1
        </div>
    );
}
export default ServiceImport;
