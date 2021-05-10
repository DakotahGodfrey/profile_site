import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ positionFixed }) => {
  console.log(positionFixed);
  const navStyle = {
    position: positionFixed ? "fixed" : "static",
    width: "100%",
  };
  return (
    <nav style={navStyle}>
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
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <button className="dark-mode-toggle">
            <i className="material-icons light-mode">light_mode</i>
            <i className="material-icons dark-mode">nightlight_round</i>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
