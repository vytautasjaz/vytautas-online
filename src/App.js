import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
// import SimpleReactLightbox from 'simple-react-lightbox';

function App() {
  return (
    <div className='App'>
      {/* <SimpleReactLightbox> */}
        <Sidebar />
        <MainContent />
      {/* </SimpleReactLightbox> */}
    </div>
  );
}

export default App;
