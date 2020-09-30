import React from 'react';
import './index.scss';

function EducationTimeline() {
  return (
    <>
      <section className='timeline'>
        <ul>
          <li>
            <div className='education'>
              <h2>Front-end studies</h2>
              <h3>
                Code Academy <time> (2019.10 - 2020.08)</time>
              </h3>
              <p>
                680 hours course of programing focused toward Front-end
                development. Main focus in Javascript and its libraries - React
                and Vue.js Basic knoledge of Node.js.
              </p>
              <p>
                Introduction to other programming languages: PHP, JAVA, Python.
              </p>
            </div>
          </li>
          <li>
            <div className='education'>
              <h2>Architecture of Urban Complexes</h2>
              <h3>
                VGTU <time> (2008 - 2010)</time>
              </h3>
              <p>
                Master degree in Architecture.
              </p>
            </div>
          </li>
          <li>
            <div className='education'>
              <h2>Architecture</h2>
              <h3>
                Tampere University of Technology <time> (2007.09 - 2007.12)</time>
              </h3>
              <p>
                Erasmus studies in Finland.
              </p>
            </div>
          </li>
          <li>
            <div className='education'>
              <h2>Architecture</h2>
              <h3>
                VGTU <time> (2004 - 2008)</time>
              </h3>
              <p>
                Bachelor degree in Architecture.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}

export default EducationTimeline;

