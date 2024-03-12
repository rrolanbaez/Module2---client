import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      
        <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/locations">Locations</Link></li>
            
            {/* <li><Link to="/itinerary-details/1">My Itenerary</Link></li> */}
            <li><Link to="/my-itineraries">My Itineraries</Link></li>
        </ul>

    </nav>
  );
}
export default NavBar;
