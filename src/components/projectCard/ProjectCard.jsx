import React from "react";

const ProjectCard = ({ project }) => {
  const {
    projectDescription,
    projectImage,
    projectTitle,
    projectLink,
  } = project;
  return (
    <article className="project-card">
      {/* <div className="img-container"> */}
      <img src={projectImage} alt={projectTitle} className="project-image" />
      {/* </div> */}
      <div className="project-content">
        <div className="project-title">
          <h3>{projectTitle}</h3>
        </div>
        <p className="project-desc">
          {projectDescription} <a href={projectLink}>{projectLink}</a>
        </p>
      </div>
    </article>
  );
};

export default ProjectCard;
