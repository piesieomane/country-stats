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

          <p>
            The Capital of {country?.name.common} is{' '}
            <strong>{country?.capital}</strong>
          </p>
          <p>
            And it has a population of <strong>{country?.population}</strong>{' '}
            people
          </p>
          <p>
            It is located in the subregion of{' '}
            <strong>{country?.subregion}</strong>
          </p>
          <p>
            The languages they speak are {Object.values(country?.languages)}
          </p>
        </li>
      ))}
    </div>
  );
};

export default CountryDetails;
