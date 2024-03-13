import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">

      <Link to="/">
        <img src="../src/images/coquiLogo.png" alt="logo" style={{height: '115px'}}></img>
      </Link>
      
      <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/locations">Locations</Link></li>
          <li><Link to="/my-itineraries">My Itineraries</Link></li>
      </ul>

    </nav>
  );
}
export default NavBar;
