import React from 'react';
import Button from '../Button';
import './index.scss';

function MainContent() {
  return (
    <div className='main--content'>
      <div className='main--hero'>
        <div className='main--hero--text'>
          <h4>Hi, I am</h4>
          <h1>Vytautas</h1>
          <h1>Jazepčikas</h1>
          <div className='main--hero--text--break'></div>
          <h2>Front-end Developer</h2>
          <Button color='red' width='width300' href='about:blank'>
            Download CV (PDF)
          </Button>
        </div>
        {/* <div className='main--hero--image'>
          <img
            src='../../assets/images/profile_large.png'
            alt='Vytautas Jazepčikas'
          />
        </div> */}
      </div>
      <hr />
    </div>
  );
}

export default MainContent;
