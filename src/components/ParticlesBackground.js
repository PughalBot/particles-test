// components/ParticlesBackground.js

import React from 'react';
import Particles from 'react-tsparticles';

const ParticlesBackground = () => {
  return (
    <Particles
      className="absolute top-0 left-0 w-full h-full"
      options={{
        particles: {
          number: {
            value: 50
          },
          color: {
            value: "#000000"
          },
          shape: {
            type: "circle"
          },
          size: {
            value: 5
          }
        }
      }}
    />
  );
}

export default ParticlesBackground;
