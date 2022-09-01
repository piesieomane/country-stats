import React from 'react';
import Continents from './Continents';
import '../styles/worldpage.scss';

const WorldPage = () => {
  return (
    <>
      <div className="world_map" data-testid="home-link">
        <div className="world_map_container">
          <img src="/images/world.svg" alt="world-image" />
          <h2>THE WORLD MAP</h2>
        </div>
        <div className="stats">
          <h3>STATS BY CONTINENTS</h3>
        </div>
      </div>

      <Continents />
    </>
  );
};

export default WorldPage;
