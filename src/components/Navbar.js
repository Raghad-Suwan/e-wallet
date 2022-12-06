
import './Navbar.css';
const  navbar= () => {
    return (


<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">

  <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    

<div>
    <input type="checkbox" id="active"/>
    <label for="active" class="menu-btn"><span></span></label>
    <label for="active" class="close"></label>
    <div class="wrapper">
      <ul>
<li><a href="#">Home</a></li><br></br>
<li><a href="#">About</a></li><br></br>
<li><a href="#">Services</a></li><br></br>
<li><a href="#">Gallery</a></li><br></br>
<li><a href="#">Feedback</a></li><br></br>
</ul>
</div>
<div class="content">
     
</div>
</div>

    
     
        
        <li class="nav-item">

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
          <a class="nav-link" href="#">Log in</a>
          
        </li>
        
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li class="nav-item">

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
          <a class="nav-link" href="#">About Us</a>
          
        </li>
        

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Services
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> 
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Contact us
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Contact us</a></li>
            <li><a class="dropdown-item" href="#">Address</a></li>
           
          </ul>
        </li>
        </ul>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    )
}
export default navbar