import React, { useState } from 'react';
import './App.scss';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import SimpleReactLightbox from 'simple-react-lightbox';

function App() {
  const [lang, setLang] = useState('en');

  return (
    <div className='App'>
      <SimpleReactLightbox>
        <Sidebar lang={lang} setLang={setLang} />
        <MainContent lang={lang} setLang={setLang} />
      </SimpleReactLightbox>
    </div>
  );
}

export default App;
