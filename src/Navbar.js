import  React from "react"
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
    <>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="/">
  IshagTechnical
    </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto bm-2 mb-lg-0">
        <li className="nav-item"></li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/Home">
        Home 
        </NavLink>
      </li>
      <li className="nav-item">
          <NavLink className="nav-link" to="/About">
        About  
          </NavLink>
      </li>
      <li className="nav-item">
          <NavLink className="nav-link" to="/Services">
        Services  
          </NavLink>
      </li>
      <li className="nav-item">
          <NavLink className="nav-link" to="Contact">
        Contact  
          </NavLink>
      </li>
    </ul>
    
  </div>
</nav>
    </>
 ); 
};

export default Navbar;