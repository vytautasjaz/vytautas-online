import React from 'react';
import './index.scss';

function ExperienceTimeline() {
  return (
    <>
      <section className='timeline'>
        <ul>
          <li>
            <div className='experience'>
              <h2>UAB "Archimes"</h2>
              <h3>
                Architect <time> (2013.10 - 2020.08)</time>
              </h3>
              <p>
                - Architectural design. Creating and implementing projects of
                large scale offce buidings, warehouses as well as small scale
                private housing.
                <br />- Interior design for restaurants, public buildings and
                private houses.
                <br />- Landscape architecture. Design of public parks. -
                Comunication and negotiation with investors and public
                institutions.
              </p>
              <p>
                Introduction to other programming languages: PHP, JAVA, Python.
              </p>
            </div>
          </li>
          <li>
            <div className='experience'>
              <h2>IĮ "Atkulos projektai"</h2>
              <h3>
                Architect <time> (2011.08 - 2013.09)</time>
              </h3>
              <p>
                - Urban planning. Large scale city planning - creating and
                implementing architectural concepts for sustainable city
                development.
                <br />- Public spaces / squares design and planning
              </p>
              <p>
                Introduction to other programming languages: PHP, JAVA, Python.
              </p>
            </div>
          </li>
          <li>
            <div className='experience'>
              <h2>VGTU Urban Laboratory</h2>
              <h3>
                <time> 2011.07</time>
              </h3>
              - Coloboration while creating international archiectural
              competitions in Sweeden and Kazakhstan.
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}

export default ExperienceTimeline;
