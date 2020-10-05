import React from 'react';
import './index.scss';

function EducationTimeline() {
  return (
    <>
      <section className='edu--timeline'>
        <ul>
          <li>
            <div className='edu--education'>
              <h2>Front-end development - Studies 101</h2>
              <h3>
                Code Academy <time> (2019.10 - 2020.08)</time>
              </h3>
              <p>
                Studies 101 is new kind of studies as an alternative to
                academical education. It is a 9 month course that consists of
                two semesters. First three months are for learning basics of
                variuos programming languages and theories (Python, PHP, JAVA,
                SEO, Cyber Security).Second half - 6 months - are for deepening
                knowledge in one particualar subject. In my case it was
                Front-end development.
              </p>
              <h4>Skills gained:</h4>
              <p className='edu--skills'>
                Intermediate:
                <strong>Javascript</strong>,
                <strong>React (Redux, Router, Hooks, Context)</strong>,
                <strong>HTML</strong>,<strong>CSS</strong>,<strong>SASS</strong>
                .
              </p>
              <p className='edu--skills'>
                Basics:
                <strong>Bootstrap</strong>, <strong>Vue.js</strong>,
                <strong>Node.js</strong>, <strong>JAVA</strong>,
                <strong>PHP</strong>.
              </p>
            </div>
          </li>
          <li>
            <div className='edu--education'>
              <h2>Architecture of Urban Complexes</h2>
              <h3>
                VGTU <time> (2008 - 2010)</time>
              </h3>
              <p>Master degree in Architecture.</p>
            </div>
          </li>
          <li>
            <div className='edu--education'>
              <h2>Architecture</h2>
              <h3>
                Tampere University of Technology
                <time> (2007.09 - 2007.12)</time>
              </h3>
              <p>Erasmus studies in Finland.</p>
            </div>
          </li>
          <li>
            <div className='edu--education'>
              <h2>Architecture</h2>
              <h3>
                VGTU <time> (2004 - 2008)</time>
              </h3>
              <p>Bachelor degree in Architecture.</p>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}

export default EducationTimeline;
