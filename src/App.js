import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import AirDataContainer from './containers/AirDataContainer/AirDataContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <AirDataContainer />
    </div>
  );
}

export default App;
