import React from 'react';
import Particles from 'react-particles-js';
import './BackgroundParticles.css'

function BackgroundParticles() {
  return (
    <div id="particles">
      <Particles
        params={{
          "particles": {
            "number": {
              "value": 80,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#0f0"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
            },
            "opacity": {
              "value": 0.4,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 4,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 1,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": false,
            },
            "move": {
              "enable": true,
              "speed": 1,
              "direction": "bottom",
              "random": false,
              "straight": false,
              "out_mode": "out",
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "push": {
                "particles_nb": 4
              },
            }
          },
          "retina_detect": true
        }}
      /> 
    </div>
  )
}

export default BackgroundParticles;