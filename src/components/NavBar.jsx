import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      
        <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/travelguides">Travel Guides</Link></li>
        </ul>

    </nav>
  );
}
export default NavBar;
