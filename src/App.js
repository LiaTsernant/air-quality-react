import React from 'react';
import './App.css';
import BackgroundParticles from './components/BackgroundParticles/BackgroundParticles';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <BackgroundParticles />
    </div>
  );
}

export default App;
