import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <article className="project-card">
      <div className="project-card__image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-card__image"
        />
      </div>

      <div className="project-card__content">
        <h3 className="project-card__title">
          {project.title}
        </h3>

        <p className="project-card__description">
          {project.description}
        </p>

        <div className="project-card__technologies">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="project-card__technology"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="project-card__actions">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-card__link"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="project-card__link project-card__link--demo"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;