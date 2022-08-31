import React from 'react';

import Continents from './Continents';

const WorldPage = () => {
  return (
    <>
      <div className="world_map">
        <img src="/images/world.svg" alt="world-image" />
        <div className="stats">
          <p>STATS BY CONTINENTS</p>
        </div>
      </div>

      <Continents />
    </>
  );
};

export default WorldPage;
