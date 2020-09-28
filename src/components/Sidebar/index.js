import React from 'react';
// import LanguageSelector from '../LanguageSelector';
import './index.scss';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar--menu'>
        <ul>
          <li>
            <a href='about:blank'>Biography</a>
          </li>
          <li>
            <a href='about:blank'>Skills</a>
          </li>
          <li>
            <a href='about:blank'>Education</a>
          </li>
          <li>
            <a href='about:blank'>Experience</a>
          </li>
          <li>
            <a href='about:blank'>Contact</a>
          </li>
           {/* <li> <LanguageSelector />  </li>*/}
        </ul>
      </div>
      <div className='sidebar--social'>
        <img src='../../assets/images/linkedin.svg' alt='Linkedin' />
        <img src='../../assets/images/github.svg' alt='Github' />
        <img src='../../assets/images/facebook.svg' alt='Facebook' />
        <img src='../../assets/images/instagram.svg' alt='Instagram' />
      </div>
    </div>
  );
}

export default Sidebar;
