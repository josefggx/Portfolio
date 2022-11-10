import './ProjectCard.scss';
import { projectsData as projects } from '../../utils/projectsData';

export const ProjectCard = () => {
  return (
    <div className="projectCard__container">
      {projects.map((project) => (
        <div key={project.id} className="projectCard">
          <div className="projectCard__image">
            <div
              className="projectCard__backgroundLayer"
              style={{
                backgroundImage: `url(${project.image})`,
              }}
            ></div>
            <div className="projectCard__details"></div>
          </div>
          <div className="projectCard__data">
            <h1 className="projectCard__title">{project.title}</h1>
            <div className="projectCard__tech">
              {project.tech.map((techName) => (
                <span className={`techName ${techName}`} key={techName}>
                  {techName}{' '}
                </span>
              ))}
            </div>
            <p className="projectCard__summary">
                {project.summary}
            </p>
            <div className="projectCard__btnContainer">
              {project.type === 'work' ? (
                <>
                  <a href={project.instagram} target="_blank">
                    <span>
                      <i className="fa-brands fa-instagram"></i>
                    </span>
                  </a>
                  <a href={project.livepage} target="_blank">
                    <span>
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </span>
                  </a>
                </>
              ) : (
                <>
                  <a href={project.github} target="_blank">
                    <span>
                      <i className="fa-brands fa-github"></i>
                    </span>
                  </a>
                  <a href={project.livepage} target="_blank">
                    <span>
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </span>
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
