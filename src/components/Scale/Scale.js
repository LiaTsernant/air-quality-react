import React from 'react';
import './Scale.css';

function Scale() {
  return (
    <div id="scale">
      <div>
        <div id="good">
          <div></div>
          <p>PM2.5: 0 - 12</p>
        </div>
        <div id="moderate">
          <div></div>
          <p>PM2.5: 13 - 35.4</p>
        </div>
        <div id="bad">
          <div></div>
          <p>PM2.5: 35 - 55.4</p>
        </div>
        <div id="unhealthy">
          <div></div>
          <p>PM2.5: 55.5 - 150.4</p>
        </div>
        <div id="dangerous">
          <div></div>
          <p>PM2.5: 155.5 - 250.4</p>
        </div>
        <div id="hazardous">
          <div></div>
          <p>PM2.5: 250.5+</p>
        </div>
      </div>
    </div>
  )

}

export default Scale;