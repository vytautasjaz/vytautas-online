import React from 'react';
import './index.scss';

//Data import
import data from '../../data.json';

function EducationTimeline({ lang }) {
  return (
    <>
      <section className='edu--timeline'>
        <ul>
          <li>
            <div className='edu--education'>
              <h2>{data[lang].education.edu1.title}</h2>
              <h3>
                {data[lang].education.edu1.school}{' '}
                <time> {data[lang].education.edu1.year}</time>
              </h3>
              <p>{data[lang].education.edu1.description}</p>
              <h4>{data[lang].education.helpers.skills}</h4>
              <p className='edu--skills'>
                {data[lang].education.helpers.intermediate}
                <strong>Javascript</strong>,
                <strong>React (Redux, Router, Hooks, Context)</strong>,
                <strong>HTML</strong>,<strong>CSS</strong>,<strong>SASS</strong>
                .
              </p>
              <p className='edu--skills'>
                {data[lang].education.helpers.basics}
                <strong>Bootstrap</strong>, <strong>Vue.js</strong>,
                <strong>Node.js</strong>, <strong>JAVA</strong>,
                <strong>PHP</strong>.
              </p>
            </div>
          </li>
          <li>
            <div className='edu--education'>
              <h2>{data[lang].education.edu2.title}</h2>
              <h3>
                {data[lang].education.edu2.school}
                <time> {data[lang].education.edu2.year}</time>
              </h3>
              <p>{data[lang].education.edu2.description}</p>
            </div>
          </li>
          <li>
            <div className='edu--education'>
              <h2>{data[lang].education.edu3.title}</h2>
              <h3>
                {data[lang].education.edu3.school}
                <time> {data[lang].education.edu3.year}</time>
              </h3>
              <p>{data[lang].education.edu3.description}</p>
            </div>
          </li>
          <li>
            <div className='edu--education'>
              <h2>{data[lang].education.edu3.title}</h2>
              <h3>
                {data[lang].education.edu3.school}
                <time> {data[lang].education.edu3.year}</time>
              </h3>
              <p>{data[lang].education.edu3.description}</p>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}

export default EducationTimeline;
