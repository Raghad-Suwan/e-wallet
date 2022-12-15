import React from 'react'

export default function Menue() {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.html"><i className='bi-person-circle'>Karma astro</i></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">menu</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html"><i className='bi bi-wallet2'></i>My wallet</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html"><i className='bi-person-bounding-box'></i>My account</a>
          </li><li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html"><i className='bi-box-arrow-in-right'></i>log out</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="index.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className='bi-bag-plus-fill'></i>Serves
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="index.html">withdraw money</a></li>
              <li><a class="dropdown-item" href="index.html">deposit money</a></li>
              <li><a class="dropdown-item" href="index.html">mobile top-up</a></li>
              <li><a class="dropdown-item" href="index.html">money transfer</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}