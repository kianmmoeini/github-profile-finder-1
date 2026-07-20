import ProjectCard from "../components/ProjectCard/ProjectCard";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects__container">
        <div className="projects__header">
          <span className="projects__label">
            MY WORK
          </span>

          <h1 className="projects__title">
            Featured Projects
          </h1>

          <p className="projects__description">
            Here are some of the projects I have built using modern
            technologies.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;