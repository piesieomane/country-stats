import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { fetchCountryDetails } from '../redux/countries/countries';
//import continentsOfTheWorld from '../data/data';

const Countries = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  const handleClick = (name) => {
    dispatch(fetchCountryDetails(name));
  };

  return (
    <div>
      <div>
        <img src={`../images/Africa.svg`} alt="continent-image" />
      </div>
      <ul className="continents">
        {' '}
        <>
          {countries.map((country) => (
            <li key={country?.name.common}>
              <h1>{country?.name.common}</h1>
              <Link to={`/:/${country?.name.common}`}>
                <button
                  type="button"
                  onClick={() => handleClick(country?.name.common)}
                >
                  <BsFillArrowRightSquareFill />
                </button>
              </Link>
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
