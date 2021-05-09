import React from "react";
import Footer from "../../layout/footer/Footer";
import Navbar from "../../layout/navbar/Navbar";
import shoppies from "../../../assets/images/the_shoppies.png";
import itTracker from "../../../assets/images/it_tracker.png";
import ProjectCard from "../../projectCard/ProjectCard";
import underConstruction from "../../../assets/images/under_construction.png";
const Projects = () => {
  const positionFixed = false;
  const projects = [
    {
      projectTitle: "The Shoppies: An Internship Project",
      projectDescription:
        "The Shoppies is my submission for the Shopify Frontend Internship challenge for Fall 2021. You can view it live @",
      projectImage: shoppies,
      projectLink: "https://the-shoppies-24f25.web.app.",
    },
    {
      projectTitle: "IT-ticket Tracker",
      projectDescription:
        "I.T Ticket Tracker was a project I built for an online course. It allows the user to add, remove and filter tickets and add and remove technicians. You can view the Repo @",
      projectImage: itTracker,
      projectLink: "https://github.com/DakotahGodfrey/it-log",
    },
    {
      projectTitle: "Under Construction",
      projectDescription:
        "Right now I'm working on a reddit client built with React and Redux. You can follow along @  ",
      projectImage: underConstruction,
      projectLink: "https://github.com/DakotahGodfrey/react-reddit-client",
    },
  ];

  return (
    <main className="main-project">
      <Navbar positionFixed={positionFixed} />
      <section className="project-section">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </section>
      <Footer />
    </main>
  );
};

export default Projects;
