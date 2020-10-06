import React from 'react';
import './index.scss';

function LanguageSelector({ lang, setLang }) {
  return (
    <>
      <div className='language'>
        <img
          src='../../assets/images/en_flag.svg'
          alt='Eglish'
          onClick={() => setLang('en')}
          className={lang === 'lt' ? 'language--greyscale' : ''}
        ></img>
        <img
          src='../../assets/images/lt_flag.svg'
          alt='Lietuviškai'
          onClick={() => setLang('lt')}
          className={lang === 'en' ? 'language--greyscale' : ''}
        ></img>
      </div>

      {/* <img src='../../assets/images/en_flag.svg' alt='English'></img> */}

      {/* <select
        id='LangaugeSelector'
        onChange={(e) => {
          setLang(e.target.value);
        }}
      >
        <option value='en'>English</option>
        <option value='lt'>Lietuviškai</option>
      </select> */}
    </>
  );
}

export default LanguageSelector;
