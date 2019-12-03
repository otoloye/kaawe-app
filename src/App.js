import React from 'react';
import './App.css';
import ImgMediaCard from './card';
import CustomizedInputBase from './search';

function App() {
  return (
    <div>
      <CustomizedInputBase />
      <div className="cards-container">
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
      </div>
    </div>
  );
}

export default App;
