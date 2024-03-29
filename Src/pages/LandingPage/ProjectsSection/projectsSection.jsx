import React from 'react';
import './projectsSection.scss';
import ProjectCard from '../../../components/ProjectCard/projectCard';
import Slide from 'react-reveal/Slide';
import projects from '../../../assets/data/Projects';

const ProjectsSection = () => {
  return (
    <>
      <section id="projects">
        <div className="projects-container">
          <Slide up>
            <div className="projects-title-container">
              <div className="projects-title">Projects</div>
              <div className="projects-subtitle">Featured Work</div>
            </div>
          </Slide>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <Slide up key={index}>
                <article>
                  <ProjectCard {...project} />
                </article>
              </Slide>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
