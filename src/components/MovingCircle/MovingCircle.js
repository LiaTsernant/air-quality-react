import React from 'react';
import './MovingCircle.css';

function MovingCircle() {
  return (
    <div id="circle-container">
      <div id="circle"></div>
      <div id="circle2"></div>
      <div id="circle3"></div>
      <div id="circle4">
        <h1 id="status"></h1>
      </div>
    </div>
  )
}

export default MovingCircle;