
import './Navbar.css';
const  navbar= () => {
    return (
 

<nav className="navbar navbar-expand-lg bg">
  <div className="container">


   <div className="col-xs col-md-1 logo1"  >
      <img id="Logo"   src="/Image/ewallet.png" alt="Logo"/>                  
  </div>
                  
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  ">
        
        
   
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            services
          </a>
          <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Money withdrawal</a></li>
            <li><a className="dropdown-item" href="#">Money transfer</a></li>
            <li><a className="dropdown-item" href="#">Deposite money</a></li>
            <li><a className="dropdown-item" href="#">Pay for merchants</a></li>
            <li><a className="dropdown-item" href="#">Pay bills </a></li>

          </ul>
        </li>
        
      </ul>
      <div className="container h-100">
      <div className="d-flex justify-content-end h-50s"> 
        <div className="searchbar">
          <input className="search_input" type="text" name="" placeholder="Search..."/>
          <a href="#" className="search_icon"><i className="fas fa-search"></i></a>
        </div>
      </div>
                   </div>
                    </div>
                      </div>
                         </nav>


)
}
export default navbar


