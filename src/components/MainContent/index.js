import React from 'react';
import Button from '../Button';
import SkillsBar from '../SkillsBar';
import ContactForm from '../ContactForm';
import './index.scss';
import EducationTimeline from '../EducationTimeline';
import ExperienceTimeline from '../ExperienceTimeline';

function MainContent() {
  return (
    <div className='main--content'>
      <div className='main--hero'>
        <h4>Hi, I am</h4>
        <h1>Vytautas</h1>
        <h1>Jazepčikas</h1>
        <div className='main--hero--break'></div>
        <h2>Front-end Developer</h2>
        <Button
          color='red'
          href='../../../public/assets/downloads/Vytautas_Jazepcikas_CV.pdf'
          width='w300'
        >
          Download CV (PDF)
        </Button>
      </div>
      <hr />
      <div className='main--container' id='about'>
        <h1>About me</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
          laborum earum, facere ea quod cupiditate enim numquam quae eligendi
          aut tempore fuga distinctio libero possimus totam culpa, dignissimos
          magni sed, odio sint ex omnis officiis vel. Veritatis, quas incidunt
          quia assumenda ipsam architecto quo rerum mollitia omnis? Sit, nemo
          ratione dolorem voluptas rerum beatae iusto earum, ab eum adipisci,
          nesciunt saepe. Nisi similique recusandae ut quas minima laudantium
          cumque porro eaque facilis sequi? Quidem eligendi, sunt totam debitis
          officiis exercitationem ea cupiditate eveniet, corporis quos modi
          consequatur quam quod laudantium culpa itaque dolorum aspernatur
          aperiam voluptatum excepturi repellat provident? Impedit!
        </p>
      </div>
      <div className='main--container' id='skills'>
        <h1>Skills</h1>
        <h2>Programming</h2>
        <div className='main--container--skills'>
          <SkillsBar skill='Javascript' progress='70' color='red' />
          <SkillsBar skill='HTML' progress='90' color='red' />
          <SkillsBar skill='React' progress='60' color='red' />
          <SkillsBar skill='CSS' progress='80' color='red' />
          <SkillsBar skill='Vue.js' progress='20' color='red' />
          <SkillsBar skill='Bootstrap' progress='50' color='red' />
          <SkillsBar
            skill='Node.js'
            progress='20'
            color='red'
            position='last'
          />
        </div>
        <h2>Graphic design</h2>
        <div className='main--container--skills'>
          <SkillsBar skill='Adobe Photoshop' progress='90' color='blue' />
          <SkillsBar skill='Sketchup' progress='90' color='blue' />
          <SkillsBar skill='Adobe Illustrator' progress='60' color='blue' />
          <SkillsBar skill='3D Studio Max' progress='50' color='blue' />
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
      <div className='main--container' id='contact'>
        <h1>Contact</h1>
        <ContactForm />
      </div>
    </div>
  );
}

export default MainContent;
