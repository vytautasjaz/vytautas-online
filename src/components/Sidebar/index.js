import React from 'react';
// import LanguageSelector from '../LanguageSelector';
import './index.scss';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar--menu'>
      {/* <div class='lines'>
        <div class='line'></div>
        <div class='line'></div>
        <div class='line'></div>
      </div> */}
        <ul>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#skills'>Skills</a>
          </li>
          <li>
            <a href='#education'>Education</a>
          </li>
          <li>
            <a href='#experience'>Experience</a>
          </li>
          <li>
            <a href='#portfolio'>Portfolio</a>
          </li>
          <li>
            <a href='#contact'>Contact me</a>
          </li>
          {/* <li> <LanguageSelector />  </li>*/}
        </ul>
      </div>
      <div className='sidebar--social'>
        <a
          href='https://www.linkedin.com/in/vytautasjazepcikas/'
          target='blank'
        >
          <img src='../../assets/images/linkedin.svg' alt='Linkedin' />
        </a>
        <a href='https://github.com/vytautasjaz' target='blank'>
          <img src='../../assets/images/github.svg' alt='Github' />
        </a>
        <a href='https://www.facebook.com/vytautas.jazepcikas' target='blank'>
          <img src='../../assets/images/facebook.svg' alt='Facebook' />
        </a>
        <a href='https://www.instagram.com/vytautasjaz/' target='blank'>
          <img src='../../assets/images/instagram.svg' alt='Instagram' />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
