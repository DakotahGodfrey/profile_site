import React, { useEffect } from "react";
import Navbar from "../../layout/navbar/Navbar";
import Footer from "../../layout/footer/Footer";
import { useSelector } from "react-redux";
import { selectPages } from "../pagesSlice";
import Resume from "../../../assets/Dakotah_Godfrey_Resume.pdf";
const Contact = () => {
  const pages = useSelector(selectPages);
  const { darkMode } = pages;
  useEffect(() => {
    document.title = `Contact | Dakotah Godfrey`;
  });
  return (
    <main className={`main-contact ${darkMode ? "dark" : ""}`}>
      <Navbar />
      <section className="contact-section">
        <h1>Get In Touch</h1>
        <div className="contact-heading">
          <h2>Say Hello</h2>
          <p>
            If you'd like to send me a message about a cool project or just to
            chat, I can be reached on social media. Or if you prefer e-mail just
            fill out the form below
          </p>
        </div>
        <section className="contact-methods">
          <form name="contact" method="POST" aria-label="contact form">
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-fields">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="name"
                required
              />
            </div>
            <div className="form-fields">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="e-mail address"
                required
              />
            </div>
            <div className="form-fields">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" required></textarea>
            </div>
            <button type="submit">
              Send{" "}
              <i aria-hidden className="material-icons">
                send
              </i>
            </button>
          </form>
          <div
            className="socials"
            role="region"
            aria-label="social media handles"
          >
            <h3>Socials</h3>
            <ul>
              <li>
                Twitter:{" "}
                <span>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    aria-label="twitter profile"
                    href="https://www.twitter.com/dakotah_dev"
                  >
                    @dakotah_dev
                  </a>
                </span>
              </li>
              <li>
                Github:{" "}
                <span>
                  <a
                    target="_blank"
                    aria-label="github profile"
                    rel="noreferrer"
                    href="https://www.github.com/DakotahGodfrey"
                  >
                    @DakotahGodfrey
                  </a>
                </span>
              </li>
              <li>
                Linkedin:{" "}
                <span>
                  <a
                    target="_blank"
                    aria-label="linked-in profile"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/dakotah-godfrey-2186091ab"
                  >
                    @DakotahGodfrey
                  </a>
                </span>
              </li>
              <li>
                <a
                  href={Resume}
                  aria-label="download my resume"
                  className="cta-link"
                  download
                >
                  <i className="material-icons" aria-hidden="true">
                    file_download
                  </i>
                  My Resume
                </a>
              </li>
            </ul>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default Contact;
