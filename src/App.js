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
    // //store {starredZipCode: 12345}
    // let zipCode = localStorage.getItem('starredZipCode');
    // if (undefined !== zipCode && zipCode !== '') {
    //   AirDataAPIModel.getDataByZipCode(zipCode).then(res => {
    //     console.log(res)
    //   })
    // }
  }

  handleSearchEnter = (val) => {
    console.log(val);
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
