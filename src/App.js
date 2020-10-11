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
  };

  handleSearchEnter = (val) => {
    AirDataAPIModel.getDataByZipCode(val)
      .then(res => {
        if (res.status === 200 && res.record.length > 0) {
          let city = res.record[0].ReportingArea;
          let ozone = res.record[0].AQI;
          let PM = res.record[1].AQI;
          this.setState({
            selectedCity: city,
            PM: PM,
            ozone: ozone,
          });
        } else {
          this.setState ({
            selectedCity: 'No data for this area'
          })
        }
      }).catch(err => { console.log(err) })
  };

  render() {
    let data = {};
    if (this.state.selectedCity) {
      data = this.state;
    }

    return (
      <div className="App">
        <Navbar />
        <Search handleSearchEnter={this.handleSearchEnter}/>
        <AirDataContainer data={data}/>
      </div>
    );
  }
}

export default App;
