import React from "react";
import Stack from "./Stack";

const ProjectCard = ({ project }) => {
  const {
    projectDescription,
    projectImage,
    projectTitle,
    projectLink,
    stack,
  } = project;
  return (
    <article className="project-card">
      <img src={projectImage} alt={projectTitle} className="project-image" />
      <div className="project-content">
        <div className="project-title">
          <h3>{projectTitle}</h3>
        </div>
        <p className="project-desc">
          {projectDescription} <a href={projectLink}>{projectLink}</a>
        </p>
        <div className="project-stack">
          Stack:
          {stack
            ? stack.map((item) => <Stack item={item} key={item.key} />)
            : null}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
