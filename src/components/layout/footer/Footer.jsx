import React from "react";
import { useSelector } from "react-redux";
import { selectPages } from "../../pages/pagesSlice";
const Footer = () => {
  const pages = useSelector(selectPages);
  const { darkMode } = pages;
  return (
    <footer className={darkMode && "dark"} aria-label="footer">
      <span className="footer-message">
        Made with <i className="material-icons">favorite</i> by Dakotah Godfrey
      </span>
      <ul aria-label="footer links">
        <li>
          <a
            aria-label="linked in profile"
            className="social-link"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/dakotah-godfrey-2186091ab/"
          >
            <i className="fab fa-2x fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a
            aria-label="github profile"
            className="social-link"
            target="_blank"
            rel="noreferrer"
            href="https://www.github.com/DakotahGodfrey"
          >
            <i className="fab fa-2x fa-github-alt"></i>
          </a>
        </li>
        <li>
          <a
            aria-label="twitter profile"
            className="social-link"
            target="_blank"
            rel="noreferrer"
            href="https://www.twitter.com/dakotah_dev"
          >
            <i className="fab fa-2x fa-twitter"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
