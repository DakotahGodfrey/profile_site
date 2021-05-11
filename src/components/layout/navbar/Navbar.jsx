import React from "react";
import { Link } from "react-router-dom";
import { selectPages, setDarkMode } from "../../pages/pagesSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const pages = useSelector(selectPages);
  const { darkMode } = pages;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setDarkMode());
  };
  const ariaLabel = `${darkMode ? "turn off dark mode" : "turn on dark mode"}`;
  return (
    <nav className={darkMode ? "dark" : ""}>
      <Link to="/">
        <div className="logo">
          <span>D | G</span>
        </div>
      </Link>
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
          <button
            onClick={handleClick}
            type="toggle"
            aria-label={ariaLabel}
            className="dark-mode-toggle"
          >
            <i
              className={`material-icons light-mode ${darkMode ? "" : "fade"}`}
            >
              light_mode
            </i>
            <i className={`material-icons dark-mode ${darkMode ? "fade" : ""}`}>
              nights_stay
            </i>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
