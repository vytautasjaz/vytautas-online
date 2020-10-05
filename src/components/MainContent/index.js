import React from 'react';
import Button from '../Button';
import SkillsBar from '../SkillsBar';
import ContactForm from '../ContactForm';
import './index.scss';
import EducationTimeline from '../EducationTimeline';
import ExperienceTimeline from '../ExperienceTimeline';
import Portfolio from '../Portfolio';

function MainContent() {
  return (
    <div className='main--content'>
      <img
        className='portfolio--icon'
        src='../../assets/images/icons/javascript_icon.svg'
        alt='Javascript'
      />
      <img
        className='portfolio--image'
        src='../../assets/images/projects/vinted/vinted_3.jpg'
        alt='VintEDITED - Filter page'
      />
      <div className='main--hero'>
        <h4>Hi, I am</h4>
        <h1>Vytautas</h1>
        <h1>Jazepčikas</h1>
        <div className='main--hero--break'></div>
        <h2>Front-end Developer</h2>
        <Button
          color='red'
          href='https://drive.google.com/file/d/1a2BE6tWqewGG8g-WiB23Vflcmsnjt6O1/view?usp=sharing'
          width='w300'
        >
          Download CV (PDF)
        </Button>
      </div>
      <hr />
      <div className='main--container' id='about'>
        <h1>About me</h1>
        <p>
          Hi, I am Vytautas Jazepčikas, a junior Front-end develper with a
          knowledge in <strong> Javascript </strong> as my primary programming
          language combined with <strong>React</strong> library. Even though I
          have strong backgroud in architecture and urban design, last year I
          decided to shake my world and make some changes. This decission led to
          Code Academy where I spend almost one year while developing my skills
          as Front-end programmer.
          <br /> <br />
          Even though I am quite new in IT and programming, it is my new path of
          life and I am very happy that I found it. The dynamics and inovations
          in IT makes it very enjoyable and attractive. The curriosity of
          innovation drags to learn something new eveyday and it motivates to
          move forward without any stops.
        </p>
      </div>
      <div className='main--container' id='skills'>
        <h1>Skills</h1>
        <h2>Programming skills</h2>
        <div className='subtitle'>(hover skill for more info)</div>
        <div className='main--container--skills'>
          <SkillsBar
            skill='Javascript'
            level='Intermediate level. Familiar with most JS concepts and its implementation to web apps.'
            progress='70'
            color='red'
          />
          <SkillsBar
            skill='HTML'
            level='Intermediate level'
            progress='90'
            color='red'
          />
          <SkillsBar
            skill='React'
            level='Intermediate level. Familiar with React Hooks, Redux, Router. Used it in school projects as well as in this website.'
            progress='60'
            color='red'
          />
          <SkillsBar
            skill='CSS / SASS'
            level='Good knowledge in CSS styling (Flexbox, CSS grid, transitions ... ). Constatntly using SASS.'
            progress='80'
            color='red'
          />
          <SkillsBar
            skill='Vue.js'
            level='Basic knowledge. I have understaning and main principles of, but lack of practice.'
            progress='20'
            color='red'
          />
          <SkillsBar
            skill='Bootstrap'
            level='Good knowledge. I have used it in some small projects and know most of the classes and how to combine them.'
            progress='50'
            color='red'
          />
          <SkillsBar
            skill='Node.js'
            level='Basic knowledge. I have understaning and main principles of, but lack of practice.'
            progress='20'
            color='red'
            position='last'
          />
        </div>
        <h2>Graphic design skills</h2>
        <div className='subtitle'>(hover skill for more info)</div>
        <div className='main--container--skills'>
          <SkillsBar
            skill='Adobe Photoshop'
            level='Advaced Photshop user'
            progress='90'
            color='blue'
          />
          <SkillsBar
            skill='Sketchup'
            level='Intermediate level of modeling. Rendering with V-Ray.'
            progress='90'
            color='blue'
          />
          <SkillsBar
            skill='Adobe Illustrator'
            level='Intermediate level'
            progress='60'
            color='blue'
          />
          <SkillsBar
            skill='3D Studio Max'
            level='Basic level in modeing, intermediate level of rendering with V-Ray.'
            progress='40'
            color='blue'
          />
        </div>
      </div>
      <div className='main--container' id='education'>
        <h1>Education</h1>
        <EducationTimeline />
      </div>
      <div className='main--container' id='experience'>
        <h1>Experience</h1>
        <ExperienceTimeline />
      </div>
      <div className='main--container' id='portfolio'>
        <h1>Portfolio</h1>
        <Portfolio />
      </div>
      <div className='main--container' id='contact'>
        <h1>Contact me</h1>
        <p>
          <strong>E-mail:</strong>{' '}
          <a href='mailto:vytautasjaz@gmail.com'>vtauatasjaz@gmail.com</a>{' '}
          <br />
          <strong>Phone:</strong> +370 672 14684
          <br />
          <br />
        </p>
        <ContactForm />
      </div>
    </div>
  );
}

export default MainContent;
