<<<<<<< HEAD:src/Components/Navbar/Navbar.js
import { Link } from 'react-router-dom';
import './Navbar.css';
import ContactForm from './components/ContactForm';

const  Navbar= () => {
    return (
 
<nav class="navbar navbar-expand-lg ">
  <div class="container">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle p-2 p-lg-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul class="dropdown-menu ">
            <li><a class="dropdown-item" ><Link to="/trancfer"></Link>transfer</a></li>
            <li><a class="dropdown-item" ><Link to="/bills"></Link>pay bills</a></li>
            <li><a class="dropdown-item" ><Link to="/cashInthoughAgentst"></Link>Deposite</a></li>
            <li><a class="dropdown-item" ><Link to="/mobiltop"></Link> withdrawal</a></li>
            <li><hr class="dropdown-divider"/></li>
            
          </ul>
        </li>
      <li class="nav-item">
      <a class="nav-link p-lg-3" ><Link to="/Contact"></Link>Contact</a>
        </li>
        
        <li class="nav-item">
          

          <a class="nav-link p-lg-3" ><Link to="/"></Link>Home</a>
        </li>
        
        <li class="nav-item">
          
          <a class="nav-link p-lg-3"><Link to="/about"></Link>About</a>
        </li>
       
      
      </ul>
      <div className='search'></div>
      <span className='icon'>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
        </span>
      
        </div>
  </div>
</nav>



);
}
export default Navbar
=======
>>>>>>> 6d7295a664f179e9b7598ff8e232d89d502cc8a9:src/Components/Navbar.js
