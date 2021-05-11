import React, { useEffect } from "react";
import Footer from "../../layout/footer/Footer";
import Navbar from "../../layout/navbar/Navbar";
import shoppies from "../../../assets/images/the_shoppies.png";
import itTracker from "../../../assets/images/it_tracker.png";
import ProjectCard from "../../projectCard/ProjectCard";
import underConstruction from "../../../assets/images/under_construction.png";
import { useSelector } from "react-redux";
import { selectPages } from "../pagesSlice";
import reduxLogo from "../../../assets/images/redux_logo.svg";
const Projects = () => {
  const projects = [
    {
      projectTitle: "The Shoppies: An Internship Project",
      projectDescription:
        "The Shoppies is my submission for the Shopify Frontend Internship challenge for Fall 2021. You can view it live @",
      projectImage: shoppies,
      projectLink: "https://the-shoppies-24f25.web.app.",
      stack: [
        { tech: "React", logo: "fab fa-react", key: 0 },
        { tech: "Redux", logo: "", logoSVG: reduxLogo, key: 1 },
        { tech: "Scss", logo: "fab fa-sass", key: 2 },
      ],
      key: "A",
    },
    {
      projectTitle: "IT-ticket Tracker",
      projectDescription:
        "I.T Ticket Tracker was a project I built for an online course. It allows the user to add, remove and filter tickets and add and remove technicians. You can view the Repo @",
      projectImage: itTracker,
      projectLink: "https://github.com/DakotahGodfrey/it-log",
      stack: [
        { tech: "React", logo: "fab fa-react", key: "0" },
        { tech: "Redux", logo: "", logoSVG: reduxLogo, key: "1" },
      ],
      key: "B",
    },
    {
      projectTitle: "Under Construction",
      projectDescription:
        "Right now I'm working on a reddit client built with React and Redux. You can follow along @  ",
      projectImage: underConstruction,
      projectLink: "https://github.com/DakotahGodfrey/react-reddit-client",
      stack: [
        { tech: "React", logo: "fab fa-react", key: "0" },
        { tech: "Redux", logo: "", logoSVG: reduxLogo, key: "1" },
        { tech: "Scss", logo: "fab fa-sass", key: "2" },
      ],
      key: "C",
    },
  ];
  useEffect(() => {
    document.title = `My Projects | Dakotah Godfrey`;
  });
  const pages = useSelector(selectPages);
  const { darkMode } = pages;
  return (
    <main className={`main-project ${darkMode ? "dark" : ""}`}>
      <Navbar />
      <section className="project-section">
        <header className="introduction">
          <h1>My Projects</h1>
          <p>
            This is a collection of some of my recent projects. I'm still
            actively refining some of them, and I'm always open to feedback if
            you have any suggestions.{" "}
          </p>
        </header>
        <section className="project-container">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.key} />
          ))}
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default Projects;
