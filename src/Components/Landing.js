import React from 'react';
import PokeBackground from '../stylingFiles/pokebackground.png';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
    <div style={{ textAlign: 'center' }}>
    <img src={PokeBackground} />

      <h1>
        View the Kanto starter pokemon for each type!
      </h1>
        Pick a type!
        </div>
        <a href="/WaterType" style={{color: "blue"}} type="button">WATER</a>
        <a href="/FireType" style={{color: "red"}} type="button">FIRE</a>
        <a href="/GrassType" style={{color: "green"}} type="button">GRASS</a>
        </div>
  );
};

export default Landing;
