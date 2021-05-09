import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../layout/footer/Footer";
import Navbar from "../../layout/navbar/Navbar";
const Home = () => {
  const positionFixed = false;

  return (
    <main className="home-main">
      <Navbar positionFixed={positionFixed} />
      <section className="home-section">
        <article className="bio">
          <h1 className="bio-lead">
            <span>👋🏻</span>
            Hey There, I'm Dakotah!
          </h1>
          <p className="bio">
            I'm a self-taught Front-End developer from Toronto. I'm passionate
            about learning new technologies. I love building accessible, user
            friendly websites and web apps. Lately I've been working with React
            and Redux and static hosting through providers like Firebase and
            Netlify. I've also been taking any web development courses, I can
            get my hands on. I'm interested in learning to be more of a
            full-stack dev. Mostly so that I can have more freedom to digitally
            express myself.
          </p>
        </article>
        <Link className="cta-link" to="/projects">
          Get Started
        </Link>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
