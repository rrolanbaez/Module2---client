import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">


      <Link to="/">
        <img src="../src/images/coquiLogo2.png" alt="logo" style={{height: '115px'}}></img>
      </Link>
      
      <ul className="navbar-links">
          <li><a1><Link className="btn btn-2" to="/"><strong>Home</strong></Link></a1></li>
          <li><a1><Link className="btn btn-2"to="/locations"><strong>Locations</strong></Link></a1></li>
          <li><a1><Link className="btn btn-2"to="/my-itineraries"><strong>My Itineraries</strong></Link></a1></li>
      </ul>

    </nav>
  );
}
export default NavBar;






