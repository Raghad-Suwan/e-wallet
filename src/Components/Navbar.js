
import { ClassNames } from '@emotion/react';
import './Navbar.css';
const  navbar= () => {
    return (
 
<nav class="navbar navbar-expand-lg ">




  <div class="container">
 
 
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
     
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle p-2 p-lg-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
     Services
          </a>
          <ul class="dropdown-menu ">
            <li><a class="dropdown-item" href="#">Money withdrawal</a></li>
            <li><a class="dropdown-item" href="#">Money transfer</a></li>
            <li><a class="dropdown-item" href="#">Deposite money</a></li>
            <li><a class="dropdown-item" href="#">Pay for merchants</a></li>
            <li><a class="dropdown-item" href="#">Pay bills </a></li>
          </ul>
        </li>
      <li class="nav-item">
             <a class="nav-link p-lg-3" href="#">Contuct </a>
        </li>
        
      <li class="nav-item">
             <a class="nav-link p-lg-3" href="#">About </a>
        </li>

      <li class="nav-item">
          <a class="nav-link p-lg-3" href="#">Link</a>
        </li>
        
       
      </ul>
      <div class="container h-100">
      <div class="d-flex justify-content-end h-50s"> 
        <div class="searchbar">
          <input class="search_input" type="text" name="" placeholder="Search..."/>
          <a href="#" class="search_icon"><i class="fas fa-search"></i></a>
        </div>
      </div>
    </div>

    

        </div>
  </div>
 
      
    
  
</nav>



)
}
export default navbar