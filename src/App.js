import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import AirDataContainer from './containers/AirDataContainer/AirDataContainer';

class App extends React.Component {
  state = {
    selectedCity: ''
  };

  componentDidMount() {
    //store {starredZipCode: 12345}
    let zipCode = localStorage.getItem('starredZipCode');
    if (zipCode) {

    }
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Search />
        <AirDataContainer />
      </div>
    );
  }
}

export default App;
