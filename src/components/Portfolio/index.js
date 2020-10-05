import React from 'react';
import './index.scss';
import { SRLWrapper } from 'simple-react-lightbox';

function Portfolio() {
  return (
    <div className='portfolio--container'>
      <SRLWrapper>
        <h2>Programming</h2>
        <div className='portfolio--item'>
          <div className='portfolio--item--text'>
            <div>
              <h3>FELIX - NETFIX clone</h3>
              <p>Movie database project.</p>
            </div>
          </div>
          <div className='portfolio--item--wrap'>
            <div>
              <img
                className='portfolio--icon'
                src='../../assets/images/icons/javascript_icon.svg'
                alt='Javascript'
              />
              <img
                className='portfolio--icon'
                src='../../assets/images/icons/plus.svg'
                alt='Plus'
              />
              <img
                className='portfolio--icon'
                src='../../assets/images/icons/react_icon.svg'
                alt='React'
              />
            </div>
            <div className='portfolio--item--features'>
              <ul>
                Features:
                <li>Responsive design</li>
                <li>User auhenticatin</li>
                <li>Fetching information from API</li>
                <li>Using router for private / public routes</li>
                <li>Redux for state managment</li>
                <li>Creating favorite item list</li>
              </ul>
            </div>
            <div className='portfolio--item--images'>
              <img
                className='portfolio--image'
                src='../../assets/images/Projects/felix/felix_main.jpg'
                alt='FELIX - Main page'
              />
              <img
                className='portfolio--image'
                src='../../assets/images/Projects/felix/felix_movie.jpg'
                alt='FELIX - Movie page'
              />
              <img
                className='portfolio--image'
                src='../../assets/images/Projects/felix/felix_login.jpg'
                alt='FELIX - Login page'
              />
            </div>
            <p>
              <strong>Github: </strong>
              <a href='https://github.com/vytautasjaz/felix/' target='blank'>
                https://github.com/vytautasjaz/felix/
              </a>
            </p>
            <p className='portfolio--technology'>
              <strong>Javascript</strong>{' '}
              <strong>React (Redux, Router, Hooks)</strong>{' '}
              <strong>SASS</strong>
            </p>
          </div>
        </div>

        <div className='portfolio--item'>
          <div className='portfolio--item--text'>
            <div>
              <h3>VintEDITED - Vinted clone</h3>
              <p>E-shop app made according to Vinted.lt design</p>
            </div>
          </div>
          <div className='portfolio--item--wrap'>
            <div>
              <img
                className='portfolio--icon'
                src='../../assets/images/icons/javascript_icon.svg'
                alt='Javascript'
              />
              <img
                className='portfolio--icon'
                src='../../assets/images/icons/plus.svg'
                alt='Plus'
              />
              <img
                className='portfolio--icon'
                src='../../assets/images/icons/vue_icon.svg'
                alt='Vue.js'
              />
            </div>
            <div className='portfolio--item--features'>
              <ul>
                Features:
                <li>Creating shopping cart</li>
                <li>Filtering items by category</li>
                <li>Sorting items by price, alphabetically</li>
                <li>Creating favorite item list</li>
                <li>Pagination</li>
                <li>Using router with params</li>
                <li>Fetching information from local data file</li>
              </ul>
            </div>
            <div className='portfolio--item--images'>
              <img
                className='portfolio--image'
                src='../../assets/images/Projects/vinted/vinted_1.jpg'
                alt='VintEDITED - Main page'
              />
              <img
                className='portfolio--image'
                src='../../assets/images/Projects/vinted/vinted_2.jpg'
                alt='VintEDITED - Product page'
              />
              <img
                className='portfolio--image'
                src='../../assets/images/Projects/vinted/vinted_3.jpg'
                alt='VintEDITED - Filter page'
              />
              <img
                className='portfolio--image'
                src='../../assets/images/Projects/vinted/vinted_4.jpg'
                alt='VintEDITED - Cart'
              />
            </div>
            <p>
              <strong>Github: </strong>
              <a
                href='https://github.com/vytautasjaz/vintedited'
                target='blank'
              >
                https://github.com/vytautasjaz/vintedited
              </a>
            </p>
            <p className='portfolio--technology'>
              <strong>Javascript</strong> <strong>Vue.js</strong>{' '}
              <strong>SASS</strong>
            </p>
          </div>
        </div>

        <div className='portfolio--item'>
          <div className='portfolio--item--text'>
            <div>
              <h3>Vytautas Jazepcikas online CV</h3>
              <p>Personal CV / portfolio web site to represent my skills.</p>
            </div>
          </div>
          <div className='portfolio--item--wrap'>
            <div>
              <img
                className='portfolio--icon'
                src='../../assets/images/icons/javascript_icon.svg'
                alt='Javascript'
              />
              <img
                className='portfolio--icon'
                src='../../assets/images/icons/plus.svg'
                alt='Plus'
              />
              <img
                className='portfolio--icon'
                src='../../assets/images/icons/react_icon.svg'
                alt='React'
              />
            </div>
            <div className='portfolio--item--features'>
              <ul>
                Features:
                <li>Fully responsive design</li>
                <li>Light / dark modes (Comming sonon..)</li>
                <li>Language selecion (Comming sonon..)</li>
              </ul>
            </div>
            <div className='portfolio--item--images'>
              <img
                className='portfolio--image'
                src='../../assets/images/Projects/vytautas-online/vytautas_web.jpg'
                alt='Vytautas Jazepcikas CV - Web version'
              />
              <img
                className='portfolio--image'
                src='../../assets/images/Projects/vytautas-online/vytautas_tablet.jpg'
                alt='Vytautas Jazepcikas CV - Mobile page'
              />
              <img
                className='portfolio--image'
                src='../../assets/images/Projects/vytautas-online/vytautas_mobile.JPG'
                alt='Vytautas Jazepcikas CV - Mobile page'
              />
            </div>
            <p>
              <strong>Github: </strong>
              <a
                href='https://github.com/vytautasjaz/vintedited'
                target='blank'
              >
                https://github.com/vytautasjaz/vintedited
              </a>
            </p>
            <p className='portfolio--technology'>
              <strong>Javascript</strong> <strong>React</strong>{' '}
              <strong>SASS</strong>
            </p>
          </div>
        </div>

        <div className='portfolio--item'>
          <div className='portfolio--item--text'>
            <div>
              <h3>Triathlon calculator</h3>
              <p>
                Web app that allows you to calculate your predicted triathlon
                race time accrding to your planned time or pace.{' '}
              </p>
            </div>
          </div>
          <div className='portfolio--item--wrap'>
            <div>
              <img
                className='portfolio--icon'
                src='../../assets/images/icons/javascript_icon.svg'
                alt='Javascript'
              />
            </div>
            <div className='portfolio--item--features'>
              <ul>
                Features:
                <li>
                  Select between four types of races: Sprint, Olympic, 70.3 or
                  140.6 Ironman Triathlon
                </li>
                <li>Calculate finish time by pace of evry discipline</li>
                <li>Calculate different discipline pace by time</li>
              </ul>
            </div>
            <div className='portfolio--item--images'>
              <img
                className='portfolio--image'
                src='../../assets/images/Projects/triathlon_calc.jpg'
                alt='Triathlon calculator'
              />
            </div>
            <p>
              <strong>Github: </strong>
              <a
                href='https://github.com/vytautasjaz/Triatlon_Counter'
                target='blank'
              >
                https://github.com/vytautasjaz/Triatlon_Counter
              </a>
            </p>
            <p className='portfolio--technology'>
              <strong>Javascript</strong>
            </p>
          </div>
        </div>

        <div className='portfolio--item'>
          <div className='portfolio--item--text'>
            <div>
              <h3>Calculator</h3>
              <p>
                Simpe Vanilla Javascript caculator. Functional programming
                approach.
              </p>
            </div>
          </div>
          <div className='portfolio--item--wrap'>
            <div>
              <img
                className='portfolio--icon'
                src='../../assets/images/icons/javascript_icon.svg'
                alt='Javascript'
              />
            </div>
            <div className='portfolio--item--images'>
              <img
                className='portfolio--image'
                src='../../assets/images/Projects/calc.jpg'
                alt='Calculator'
              />
            </div>
            <p>
              <strong>Github: </strong>
              <a
                href='https://github.com/vytautasjaz/calculator'
                target='blank'
              >
                https://github.com/vytautasjaz/calculator
              </a>
            </p>
            <p className='portfolio--technology'>
              <strong>Javascript</strong>
            </p>
          </div>
        </div>

        <h2>Architectural / Urban design</h2>

        <img
          className='portfolio--image'
          src='../../assets/images/Projects/large/problematika_large.jpg'
          alt='Problematika headquarters'
        />
        <img
          className='portfolio--image'
          src='../../assets/images/Projects/large/problematika_1_large.jpg'
          alt='Problematika headquarters'
        />
        <img
          className='portfolio--image'
          src='../../assets/images/Projects/large/problematika_int_1_large.jpg'
          alt='Problematika headquarters interior'
        />
        <img
          className='portfolio--image'
          src='../../assets/images/Projects/large/problematika_int_2_large.jpg'
          alt='Problematika headquarters interior'
        />
        <img
          className='portfolio--image'
          src='../../assets/images/Projects/large/cili_1_large.jpg'
          alt='ČILI PIZZA Akropolis Šiauliau'
        />
        <img
          className='portfolio--image'
          src='../../assets/images/Projects/large/cili_2_large.jpg'
          alt='ČILI PIZZA Akropolis Šiauliau'
        />
        <img
          className='portfolio--image'
          src='../../assets/images/Projects/large/jeruzale_large.jpg'
          alt='Oddice buildings in Jeruzale'
        />
        <img
          className='portfolio--image'
          src='../../assets/images/Projects/large/tampere_museum.jpg'
          alt='Tampere art museum'
        />
        <img
          className='portfolio--image'
          src='../../assets/images/Projects/large/dance_theater.jpg'
          alt='Dance theater'
        />
        <img
          className='portfolio--image'
          src='../../assets/images/Projects/large/kazakhstan.jpg'
          alt='Kazakhstan development'
        />
        <img
          className='portfolio--image'
          src='../../assets/images/Projects/large/urban_stripes.jpg'
          alt='Urban Stripes'
        />

        <h2>Graphic design / drawing</h2>

        <img
          className='portfolio--image'
          src='../../assets/images/Projects/large/flamingo_large.jpg'
          alt='Flamingo'
        />
        <img
          className='portfolio--image'
          src='../../assets/images/Projects/large/whaling_large.jpg'
          alt='Whaling'
        />
        <img
          className='portfolio--image'
          src='../../assets/images/Projects/large/sapiegine_large.jpg'
          alt='Sapiegine'
        />
        <img
          className='portfolio--image'
          src='../../assets/images/Projects/large/swim.jpg'
          alt='Triathlon - Swim'
        />
        <img
          className='portfolio--image'
          src='../../assets/images/Projects/large/bike.jpg'
          alt='Triathlon - Bike'
        />
        <img
          className='portfolio--image'
          src='../../assets/images/Projects/large/run.jpg'
          alt='Triathlon - Run'
        />
      </SRLWrapper>
    </div>
  );
}

export default Portfolio;
