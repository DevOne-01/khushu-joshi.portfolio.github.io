import React from 'react';
import './techChip.scss';
const TechChip = (props) => {
  return (
    <>
      {props.img && (
        <img
          src={props.img}
          alt={props.title}
          className="tech-chip-img"
          loading="lazy"
        />
      )}
      <span className="tech-chip-text">{props.title}</span>
    </>
  );
};

export default TechChip;