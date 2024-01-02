import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/women">Women</Link>
        </li>
        <li>
          <Link to="/women/saree">Saree</Link>
        </li>
        <li>
          <Link to="/women/sudithar">Sudithar</Link>
        </li>
        <li>
          <Link to="/women/hsaree">Half-Saree</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
