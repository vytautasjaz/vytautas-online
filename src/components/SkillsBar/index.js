import React from 'react';
import './index.scss';

function SkillsBar({ skill, progress, color, position, level}) {
  return (
    <>
      <dfn data-info={level} className={`skill--container skill--container--${position}`}>
          {skill}
        <div className='skill--progress'>
          <div className={`progress--${progress} progress--${color} `}></div>
        </div>
      </dfn>
    </>
  );
}

export default SkillsBar;
