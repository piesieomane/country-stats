import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import continentsOfTheWorld from '../data/data';

const Countries = () => {
  const countries = useSelector((state) => state.countries);

  return (
    <div>
      <div>
        <img src={`../images/Africa}.svg`} alt="continent-image" />
      </div>
      <ul className="continents">
        {' '}
        <>
          {countries.map((country) => (
            <li key={country?.name.common}>
              <h1>{country?.name.common}</h1>
              <img src={country?.flags.png} alt="flag" />
              <p>{country?.capital}</p>
              <p>{country?.subregion}</p>
            </li>
          ))}
        </>
      </ul>
    </div>
  );
};

export default Countries;
