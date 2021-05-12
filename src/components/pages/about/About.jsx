import React, { useEffect } from "react";
import Navbar from "../../layout/navbar/Navbar";
import Footer from "../../layout/footer/Footer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPages } from "../pagesSlice";
const About = () => {
  const pages = useSelector(selectPages);
  const { darkMode } = pages;
  useEffect(() => {
    document.title = `About | Dakotah Godfrey`;
  });
  return (
    <main className={`main-about ${darkMode ? "dark" : ""}`}>
      <Navbar />
      <section className="about-section">
        <article className="bio">
          <h1 className="bio-lead">About Dakotah.</h1>
          <h3>Hey there!</h3>
          <p className="bio">
            My name is Dakotah Godfrey. I am a community-taught web developer
            from Ontario, Canada. I'm new to the web development space, but I’ve
            become passionate about this field. I've focused on building the
            foundational skills needed to secure a job as a frontend developer.
            Lately, I've built accessible and beautiful web apps with React and
            Redux.
          </p>
          <p className="bio">
            Before the Covid-19 epidemic, I was working in the hospitality
            industry in Toronto. As work became difficult to find, I looked for
            a career change. I started with the basics of HTML and CSS. Through
            resources like{" "}
            <a
              className="shoutout"
              href="https://www.codecademy.com/"
              target="_blank"
              rel="noreferrer"
            >
              Codecademy
            </a>{" "}
            and a number of online tutorials from awesome creators like{" "}
            <a
              className="shoutout"
              href="https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA"
              rel="noreferrer"
              target="_blank"
            >
              Brad Traversy
            </a>
            ,{" "}
            <a
              href="https://jhey.dev/"
              className="shoutout"
              rel="noreferrer"
              target="_blank"
            >
              Jhey Dev
            </a>
            ,{" "}
            <a
              href="https://www.youtube.com/channel/UChoskCVZiIDTKxusGPPhLOg"
              rel="noreferrer"
              className="shoutout"
              target="_blank"
            >
              Self Teach Me
            </a>
            , amongst many others, I began enjoying the challenge presented by
            web development.
          </p>
          <p className="bio">
            My long-term goal is to help make the tech community even more
            accessible. If I can reach a spot where I can give back even a
            little of what I've gained from the dev community and help people
            grow in this space. I'll able be to chalk this journey up as a
            success.
          </p>
          <p className="bio">
            At the moment I'm looking for a position as an intern or a junior
            developer, to continue to grow my skill set with additional
            experience.
          </p>
          <p className="bio">
            If you'd like to get in touch please feel free to reach out.{" "}
            <Link to="/contact">Contact.</Link>
          </p>
        </article>
      </section>
      <Footer />
    </main>
  );
};

export default About;
