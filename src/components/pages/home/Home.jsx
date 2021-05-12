import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../layout/footer/Footer";
import Navbar from "../../layout/navbar/Navbar";
import { selectPages } from "../pagesSlice";
import { useSelector } from "react-redux";

const Home = () => {
  const pages = useSelector(selectPages);
  const { darkMode } = pages;
  useEffect(() => {
    document.title = `Home | Dakotah Godfrey`;
  });
  return (
    <main className={`home-main ${darkMode ? "dark" : ""}`}>
      <Navbar />
      <section className="home-section">
        <article className="bio">
          <h1 className="bio-lead">Welcome,</h1>
          <h2>
            <span>👋🏻</span>
            Hey There, I'm Dakotah!{" "}
          </h2>
          <p className="bio">
            I'm a self-taught frontend developer from Toronto. I'm passionate
            about accessible & responsive design. Lately, I've been working on
            designing interactive web apps using React.js and Redux. I'm
            currently open to new opportunities.
          </p>
        </article>
        <div className="call-to-action-links">
          <Link className="cta-link" to="/about">
            About Me
          </Link>
          <Link className="cta-link" to="/projects">
            My Work
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
