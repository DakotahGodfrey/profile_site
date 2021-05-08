import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <span>D | G</span>
      </div>
      <ul>
        <li>
          <Link to="/" className="current">
            Home
          </Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/skills">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <button>
            <i className="material-icons">light_mode</i>
            <i className="material-icons">dark_mode</i>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
