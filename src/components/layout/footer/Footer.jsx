import React from "react";

const Footer = () => {
  return (
    <footer>
      <small>&copy; 2021 Dakotah Godfrey</small>
      <ul>
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
            aria-label="twitter profile"
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
            aria-label="github profile"
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
