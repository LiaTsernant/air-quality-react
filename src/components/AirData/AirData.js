import React from 'react';
import './AirData.css';

// Hardcoded data will be replaced with the actual data after input validation and city name -> zip code conversion
function AirData(props) {
  let city = "Enter ZIP code";
  let ozone = "";
  let PM = "";

  if (props.data.selectedCity) {
    city = props.data.selectedCity;
    ozone = props.data.ozone;
    PM = props.data.PM;
  }

  return (
    <>
      <h2 id="area">{city}</h2>
      <div id="data">
        <div id="particulate-matter">
          <h2>PM2.5: <span id="particulate-matter-data">{PM}</span></h2> 
        </div>
        <div id="ozone">
          <h2>Ozone: <span id="ozone-data">{ozone}</span></h2>
        </div>
      </div>
    </>
  )
}

export default AirData;