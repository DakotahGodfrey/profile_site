import React from "react";
import Navbar from "../../layout/navbar/Navbar";
import Footer from "../../layout/footer/Footer";
import { useSelector } from "react-redux";
import { selectPages } from "../pagesSlice";
const Contact = () => {
  const pages = useSelector(selectPages);
  const { darkMode } = pages;
  return (
    <main className={`main-contact ${darkMode && "dark"}`}>
      <Navbar />
      <section className="contact-section">
        <h1>Get In Touch</h1>
        <div className="contact-heading">
          <h2>Say Hello</h2>
          <p>
            If you'd like to send me a message about a cool project or just to
            chat, I can be reached on social media. Or if you perfer e-mail just
            fill out the form below
          </p>
        </div>
        <section className="contact-methods">
          <form name="contact" method="POST">
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
              Send <i className="material-icons">send</i>
            </button>
          </form>
          <div className="socials">
            <h3>Socials</h3>
            <ul>
              <li>
                Twitter:{" "}
                <span>
                  <a href="https://www.twitter.com/dakotah_dev">@dakotah_dev</a>
                </span>
              </li>
              <li>
                Github:{" "}
                <span>
                  <a href="https://www.github.com/DakotahGodfrey">
                    @DakotahGodfrey
                  </a>
                </span>
              </li>
              <li>
                Linkedin:{" "}
                <span>
                  <a href="https://www.linkedin.com/in/dakotah-godfrey-2186091ab">
                    @DakotahGodfrey
                  </a>
                </span>
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
