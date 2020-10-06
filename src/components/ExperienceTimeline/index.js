import React from 'react';
import './index.scss';

//Data import
import data from '../../data.json';

function ExperienceTimeline({ lang }) {
  return (
    <>
      <section className='exp--timeline'>
        <ul>
          <li>
            <div className='exp--experience'>
              <h2>{data[lang].experience.exp1.company}</h2>
              <h3>
                {data[lang].experience.exp1.position}{' '}
                <time> {data[lang].experience.exp1.date}</time>
              </h3>
              <p>
                {data[lang].experience.exp1.desc1}
                <br /> {data[lang].experience.exp1.desc2}
                <br /> {data[lang].experience.exp1.desc3}
                <br /> {data[lang].experience.exp1.desc4}
              </p>
            </div>
          </li>
          <li>
            <div className='exp--experience'>
              <h2>{data[lang].experience.exp2.company}</h2>
              <h3>
                {data[lang].experience.exp2.position}{' '}
                <time> {data[lang].experience.exp2.date}</time>
              </h3>
              <p>
                {data[lang].experience.exp2.desc1}
                <br /> {data[lang].experience.exp2.desc2}
              </p>
            </div>
          </li>
          <li>
            <div className='exp--experience'>
              <h2>{data[lang].experience.exp3.company}</h2>
              <h3>
                <time> {data[lang].experience.exp3.date}</time>
              </h3>
              {data[lang].experience.exp3.desc1}
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}

export default ExperienceTimeline;
