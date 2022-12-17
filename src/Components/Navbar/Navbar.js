import React from 'react';
import './Navbar.css';

const  Navbar= () => {
  
  const walletButton= useNavigate();

    return (
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <li className='logoo'>
                        <a className=" nav-link nav-logo" href="#">E-Wallet</a>
                    </li>
                    <button className=" btn navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className= "nav-link " href="#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    services
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Money withdraw</a></li>
                                    <li><a className="dropdown-item" href="#">Money transfer</a></li>
                                    <li><a className="dropdown-item" href="#">Deposite money</a></li>
                                    <li><a className="dropdown-item" href="#">Pay bills </a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" >
                                <i class="fa-solid fa-arrow-right-to-bracket"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
    )
}
export default Navbar



