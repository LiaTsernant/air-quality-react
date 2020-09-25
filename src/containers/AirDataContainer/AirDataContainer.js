import React from 'react';
import AirData from '../../components/AirData/AirData';
import MovingCircle from '../../components/MovingCircle/MovingCircle';
import Scale from '../../components/Scale/Scale';
import BackgroundParticles from '../../components/BackgroundParticles/BackgroundParticles';
import './AirDataContainer.css';

function AirDataContainer() {
  return (
    <div id="data-container">
      <BackgroundParticles />
      <MovingCircle />
      <div id="details-container">
        <AirData />
        <Scale />
      </div>
    </div>
  )

}

export default AirDataContainer;