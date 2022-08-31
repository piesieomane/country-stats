import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountryDetails } from '../redux/countries/countries';

const CountryDetails = () => {
  const { countries } = useSelector((state) => state);
  console.log(countries);
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(fetchCountryDetails());
  //   }, []);
  return (
    <div>
      {countries.map((country) => (
        <li key={country?.name.common}>
          <h1>{country?.name.common}</h1>
          <img src={country?.flags.png} alt="flag" />
          <p>{country?.capital}</p>
          <p>{country?.subregion}</p>
        </li>
      ))}
    </div>
  );
};

export default CountryDetails;
