import React from 'react'
import { Link } from 'react-router-dom';
import './Menue.css';
export default function Menue() {
  return (
    <div>

  <header className='sidebar'>
      <nav className="navbar ">
  <div className="container-fluid">
    <button className="navbar-toggler"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" >
    <span ><i className='bi-list'></i></span>
    </button>
    <div className="flexbox-container">
    <span className='name'>{localStorage.getItem("firstName")}</span> 
    <li className="notification dropdown">
<a className="header-manu dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
<i className='bi-bell'></i>
</a>
<ul className="dropdown-menu dropBasic inside">
    <li><a>An amount has been successfully </a></li>
    <li><a>deposited into your account</a></li>
    <li><a>(Take a look at your account)</a></li>
    <li><a>7:30am</a></li>
    <li><a>12/11/2022</a></li>
</ul>
</li>
    <div className='avatar'></div>
    </div>
    <div className="offcanvas offcanvas-start" id="offcanvasDarkNavbar" >
      <div className="offcanvas-top">
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" ></button>
      </div>
      <div className="offcanvas-body">
        <div className='sidebar-side'>
        <ul className="navbar-nav">
          <li className="main-menu">
          <Link to="/Myaccount" className="nav-link"><i className='bi-person-bounding-box'></i>My account</Link>
           </li>

          <li className="main-menu">
          <Link to='/wallet'className="nav-link"><i className='bi-wallet2'></i>My wallet</Link></li>
          <li className="main-menu dropdown">
            <a className="nav-link dropdown-toggle" href="index.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className='bi-bag-plus-fill'></i>Services</a>
            <ul className="dropdown-menu">
              <div className='in-dropdown '>
            <li><Link to="/wallet-withdraw-money" className="dropdown-item" >Withdraw money</Link></li>
             <li><Link to="/wallet-deposit-money" className="dropdown-item">Deposite money</Link></li>
             <li><Link to="/Tranfer" className="dropdown-item">Money transfer</Link></li>
             <li><Link to="/pushcards" className="dropdown-item">pay bills</Link></li>
             </div>
             </ul>
          </li>
             <li className="main-menu">
             <Link to ="/" className="nav-link "><i className='bi-box-arrow-in-right'></i>log out</Link>
             </li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</nav>
</header>
    </div>
  )
}