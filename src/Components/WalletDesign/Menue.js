import React from 'react'
import './Menue.css';
export default function Menue() {
  return (
   <div>
        <nav className="navbar navbar-dark  fixed-top">
          
            <div className="offcanvas-end container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="flexbox-container">
    <span className='name'>karma astro</span>
    <span className='notification'><i className='bi-bell'></i></span>
    <div className='avatar'>
    </div>
    </div>
    <div className="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel"></h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="index.html"><i className='bi-person-bounding-box'></i>My account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="index.html"><i className='bi-wallet2'></i>My wallet</a>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="index.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className='bi-bag-plus-fill'></i>Serves</a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="index.html">withdraw money</a></li>
              <li><a className="dropdown-item" href="index.html">deposit money</a></li>
              <li><a className="dropdown-item" href="index.html">mobile top-up</a></li>
              <li><a className="dropdown-item" href="index.html">money transfer</a></li>
            </ul>
            </li><li className="nav-item">
            <a className="nav-link active" aria-current="page" href="index.html"><i className='bi-box-arrow-in-right'></i>log out</a>
          </li>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}