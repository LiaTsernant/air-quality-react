import React from 'react';
import AirData from '../../components/AirData/AirData';
import MovingCircle from '../../components/MovingCircle/MovingCircle';
import Scale from '../../components/Scale/Scale';
import BackgroundParticles from '../../components/BackgroundParticles/BackgroundParticles';
import './AirDataContainer.css';

function AirDataContainer(props) {
  let PM = props.data.PM;
  let statusData = "";
  let particlesColor = "#00ff00";
  if (PM !== "" && PM <= 12.0) {
    statusData = 'Good';
    particlesColor = "#00ff00"
  } else if (PM !== "" && PM > 12.0 && PM <= 35.4) {
    statusData = 'Moderate';
    particlesColor = "#FFD400";
  } else if (PM !== "" && PM > 35 && PM <= 55.4) {
    statusData = 'Bad';
    particlesColor = "#FFA500";
  } else if (PM !== "" && PM > 55.4 && PM <= 150.4) {
    statusData = 'Unhealty';
    particlesColor = "ff0000";
  } else if (PM !== "" && PM > 150.4 && PM <= 250.4) {
    statusData = 'Dangerous';
    particlesColor = "#800080";
  } else if (PM !== "" && PM > 250.5) {
    statusData = 'Hazardous';
    particlesColor = "#301934";
  };

  return (
    <div id="data-container">
      <BackgroundParticles particlesColor={particlesColor}/>
      <MovingCircle airStatus={statusData}/>
      <div id="details-container">
        <AirData data={props.data}/>
        <Scale />
      </div>
    </div>
  )

}

export default AirDataContainer;