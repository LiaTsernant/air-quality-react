import React from 'react';
import './MovingCircle.css';
import PALETTE from './Palette';

function MovingCircle(props) {
  let airStatus = props.airStatus || "";
  let palette = PALETTE[airStatus] || PALETTE['Good'];
  let circle1Style = { 'backgroundColor': palette[0] };
  let circle2Style = { 'backgroundColor': palette[1] };
  let circle3Style = { 'backgroundColor': palette[2] };
  let circle4Style = { 'backgroundColor': palette[3] }

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