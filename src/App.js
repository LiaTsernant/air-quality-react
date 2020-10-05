import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import AirDataContainer from './containers/AirDataContainer/AirDataContainer';
import AirDataAPIModel from './models/AirDataAPIModel';

class App extends React.Component {
  state = {
    selectedCity: '',
    PM: '',
    ozone: '',
  };

  componentDidMount() {
    // Will grab zipcode from localStorage if user saved a city and load data about this city when user opens an app.
  }

  handleSearchEnter = (val) => {
    // console.log(val);
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Search handleSearchEnter={this.handleSearchEnter}/>
        <AirDataContainer />
      </div>
    );
  }
}

export default App;
