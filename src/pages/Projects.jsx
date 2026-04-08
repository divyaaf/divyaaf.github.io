import ActionLink from '../components/ActionLink';
import Panel from '../components/Panel';
import PageHeading from '../components/PageHeading';
import Reveal from '../components/Reveal';
import { projectItems } from '../data/siteData';

function Projects() {
  return (
    <div className="page-stack">
      <PageHeading eyebrow="Projects" title="Selected academic work" />

      <div className="content-stack projects-grid">
        {projectItems.map((project, index) => (
          <Reveal key={project.title} delay={100 + index * 75}>
            <Panel className="project-panel">
              {project.image ? (
                <img
                  className="project-image"
                  src={project.image}
                  alt={`${project.title} showcase`}
                  loading="lazy"
                />
              ) : (
                <div className="project-image" aria-hidden="true" />
              )}
              <div className="project-content">
                <h2>{project.title}</h2>
                {project.bullets ? (
                  <ul className="project-list">
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="body-copy">{project.description}</p>
                )}
                <div className="button-row">
                  {project.links.map((link) => (
                    <ActionLink key={link.label} href={link.href}>
                      {link.label}
                    </ActionLink>
                  ))}
                </div>
              </div>
            </Panel>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default Projects;