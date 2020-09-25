import React from 'react';
import './MovingCircle.css';

function MovingCircle(props) {
  let airStatus = props.airStatus || "Good";
  let circle1Style = { 'background-color': props.colors ? props.colors[0] : 'rgb(164, 233, 210)' };
  let circle2Style = { 'background-color': props.colors ? props.colors[1] : 'rgb(127, 255, 212)' };
  let circle3Style = { 'background-color': props.colors ? props.colors[2] : 'rgb(76, 224, 175)' };
  let circle4Style = { 'background-color': props.colors ? props.colors[3] : 'rgb(36, 202, 147)' }

  return (
    <div id="circle-container">
      <div id="circle" style={circle1Style}></div>
      <div id="circle2" style={circle2Style}></div>
      <div id="circle3" style={circle3Style}></div>
      <div id="circle4" style={circle4Style}>
        <h1 id="status">{airStatus}</h1>
      </div>
    </div>
  )
}

export default MovingCircle;