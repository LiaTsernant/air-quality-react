import React from 'react';
import './App.css';
import BackgroundParticles from './components/BackgroundParticles/BackgroundParticles';
import MovingCircle from './components/MovingCircle/MovingCircle';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <BackgroundParticles /> */}
      <Search />
      <MovingCircle />
    </div>
  );
}

export default App;
