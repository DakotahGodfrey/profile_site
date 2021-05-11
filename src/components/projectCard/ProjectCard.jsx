import React from "react";
import Stack from "./Stack";

const ProjectCard = ({ project }) => {
  const {
    projectDescription,
    projectImage,
    projectTitle,
    projectLink,
    stack,
    repoLink,
  } = project;
  return (
    <article className="project-card">
      <img src={projectImage} alt={projectTitle} className="project-image" />
      <div className="project-content">
        <div className="project-title">
          <h3>{projectTitle}</h3>
        </div>
        <p className="project-desc">{projectDescription}</p>
        <div className="project-links">
          {projectLink && (
            <p>
              <span className="text-bold">Live:</span>{" "}
              <a href={projectLink} target="blank" rel="noreferrer">
                {projectLink}
              </a>
            </p>
          )}
          {repoLink && (
            <p>
              <span className="text-bold">Repo:</span>{" "}
              <a href={repoLink} target="blank" rel="noreferrer">
                {repoLink}
              </a>
            </p>
          )}
        </div>
        <div className="project-stack">
          <span className="text-bold">Stack:</span>
          {stack
            ? stack.map((item) => <Stack item={item} key={item.key} />)
            : null}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
