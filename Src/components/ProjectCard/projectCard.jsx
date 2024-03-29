import React from 'react';
import ReactTooltip from 'react-tooltip';
import TechChip from '../TechChip/techChip';
import './projectCard.scss';


const ProjectCard = ({
  thumbnailSrc,
  title,
  technologies,
  links,
  description,
}) => {
  return (
    <>
      <div className="project">
        <img
          src={thumbnailSrc}
          alt={title}
          className="project-thumbnail"
          loading="lazy"
        />
        <div className="project-info-container">
          <div className="project-info-header">
            <div className="project-title">{title}</div>
            <div className="project-tech-chips-container">
              {Array.isArray(technologies) &&
                technologies.map((tech, index) => (
                  <TechChip
                    key={index}
                    img={tech?.icon || undefined}
                    title={tech.title}
                  />
                ))}
            </div>
            <div className="project-links-container">
              {Array.isArray(links) &&
                links.map((linkObj, index) => (
                  <div key={index}>
                    <a
                      href={linkObj.href}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                      data-tip
                      data-for={`project-${title}-action--${index}`}
                      aria-label={linkObj.alt}
                    >
                      {linkObj.icon}
                    </a>
                    <ReactTooltip
                      className="react-custom-tooltip"
                      id={`project-${title}-action--${index}`}
                      delayShow={400}
                    >
                      <span>{linkObj.label}</span>
                    </ReactTooltip>
                  </div>
                ))}
            </div>
          </div>
          <hr />

          <div className="project-description">{description}</div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
