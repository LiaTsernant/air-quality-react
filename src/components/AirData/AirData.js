import React from 'react';
import './AirData.css';

function AirData() {
  return (
    <>
      <h2 id="area">San Francisco</h2>
      <div id="data">
        <div id="particulate-matter">
          <h2>PM2.5: <span id="particulate-matter-data">22</span></h2>
        </div>
        <div id="ozone">
          <h2>Ozone: <span id="ozone-data">22</span></h2>
        </div>
      </div>
    </>
  )
}

export default AirData;