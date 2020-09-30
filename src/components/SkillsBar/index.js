import React from 'react';
import './index.scss';

function SkillsBar({ skill, progress, color, position }) {
  return (
    <div className={`skill--container skill--container--${position}`}>
      {skill}
      <div className='skill--progress'>
        <div className={`progress--${progress} progress--${color} `}></div>
      </div>
    </div>
  );
}

export default SkillsBar;
