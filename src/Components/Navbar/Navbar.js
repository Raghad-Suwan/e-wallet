import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const walletButton = useNavigate();
    return (

        <nav className="navbar navbar-expand-lg navbarBasic ">
            <div className="container-fluid">
                <li className='logoo'>
                    <Link to="/" className=" nav-link nav-logo">E-Wallet</Link>
                </li>
                <button className=" btn navbar-toggler text-light" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>

                <div className="collapse navbar-collapse text-light" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link ">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link " >About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link  dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                services
                            </a>
                            <ul className="dropdown-menu dropBasic">
                                <li><Link to="/CashInthoughAgents" className="dropdown-item" >Money withdraw</Link></li>
                                <li><Link to="/transfermoney" className="dropdown-item" >Money transfer</Link></li>
                                <li><Link to="/mobiltop" className="dropdown-item" >Deposite money</Link></li>
                                <li><Link to="/payment" className="dropdown-item" >Pay bills </Link></li>
                            </ul>
                        </li>
                    </ul>
                    <button className="btn btn-outline-light"
                        onClick={() => walletButton('/login')} >
                        <i className="bi bi-wallet2"></i>
                    </button>
                </div>
            </div>
        </nav>
    )
}
export default Navbar



