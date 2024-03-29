import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './myVerticalTimeline.scss'
import TechChip from '../TechChip/techChip';

const MyVerticalTimeline = ({ job }) => {
  return (
    <>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "hsl(173, 40%, 95%)",
          borderRadius: "20px",
          paddingBlock: "20px",
        }}
        contentArrowStyle={{
          borderRight: "10px solid  #f4f4f4",
          color: "hsl(173, 40%, 95%)",
        }}
        date={job.date}
        iconStyle={{
          ...job.iconStyle,
        }}
        icon={job.icon}
      >
        <h1 className="vertical-timeline-element-title">{job.jobTitle}</h1>
        <h2 className="vertical-timeline-element-subtitle">
          {job.jobSubtitle}
        </h2>
        <div>
          <span>{job.description}</span>
          <div className="vertical-timeline-tech-container">
            {job.technologies.map((tech, index) => (
              <TechChip title={tech} key={index} />
            ))}
          </div>
        </div>
      </VerticalTimelineElement>
    </>
  );
};

export default MyVerticalTimeline;
