import React from "react";

const ProjectCard = ({ project }) => {
  const {
    projectDescription,
    projectImage,
    projectTitle,
    projectLink,
  } = project;
  return (
    <article>
      <div className="project-card">
        <div className="project-card-image">
          <img
            src={projectImage}
            alt="home page for the shopppies internship project"
          />
        </div>
        <div className="project-card-content">
          <div className="project-card-title">
            <h3>{projectTitle}</h3>
          </div>
          <p>
            {projectDescription}
            <a href={projectLink} target="_blank" rel="noreferrer">
              {" "}
              {projectLink}
            </a>
          </p>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
