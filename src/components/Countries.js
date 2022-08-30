import React from 'react';
import { useSelector } from 'react-redux';

const Countries = () => {
  const countries = useSelector((state) => state.countries);
  return (
    <div>
      <ul>
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
