import React from 'react'
import'./Menue.css';

export default function Menue() {
  return (
    <div>
      <header className='sidebar'>
        <nav className="navbar">
            <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span ><i className='bi-list'></i></span>
    </button>
    <div className="flexbox">
    <span className='name'>Jennie kim</span>
    <span className='notification'><i className='bi-bell'></i></span>
    <div className='avatar'>
    </div>
    </div>
    <div className="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel"></h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="body">
        <ul className="navbar-nav ">
          <li className="item">
            <a className="nav-link " aria-current="page" href="index.html"><i className='bi-person-bounding-box'></i>My account</a>
          </li>
          <li className="item">
               <a className="nav-link " aria-current="page" href="index.html"><i className='bi-wallet2'></i>My wallet</a>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="index.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className='bi-bag-plus-fill'></i>Services</a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="index.html">Withdraw money</a></li>
              <li><a className="dropdown-item" href="index.html">Deposite Money</a></li>
              <li><a className="dropdown-item" href="index.html">Money transfer</a></li>
              <li><a className="dropdown-item" href="index.html">MobileTopUp</a></li>
            </ul>
            </li>
              <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="index.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="bi-credit-card"></i>Pay bills</a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="index.html">ImportElectricity </a></li>
              <li><a className="dropdown-item" href="index.html">ImportTelecom </a></li>
              <li><a className="dropdown-item" href="index.html">ImportUniversity</a></li>
            </ul>
            </li>
            <li className="item">
            <a className="nav-link " aria-current="page" href="index.html"><i className='bi-box-arrow-in-right'></i>log out</a>
          </li>
          </li>
        </ul>
       
      </div>
    </div>
  </div>
</nav>
</header>
    </div>
  )
}