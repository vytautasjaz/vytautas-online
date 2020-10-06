import React from 'react';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import './index.scss';

import data from '../../data.json';

function Sidebar({ lang, setLang }) {
  return (
    <div className='sidebar'>
      <div className='sidebar--menu'>
        {/* <div class='lines'>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div> */}
        <ul>
          <li>
            <a href='#about'>{data[lang].menu.item_1}</a>
          </li>
          <li>
            <a href='#skills'>{data[lang].menu.item_2}</a>
          </li>
          <li>
            <a href='#education'>{data[lang].menu.item_3}</a>
          </li>
          <li>
            <a href='#experience'>{data[lang].menu.item_4}</a>
          </li>
          <li>
            <a href='#portfolio'>{data[lang].menu.item_5}</a>
          </li>
          <li>
            <a href='#contact'>{data[lang].menu.item_6}</a>
          </li>
          <li>
            <LanguageSelector lang={lang} setLang={setLang} />
          </li>
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
