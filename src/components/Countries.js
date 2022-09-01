import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { fetchCountryDetails } from '../redux/countries/countries';
import '../styles/countries.scss';

const Countries = () => {
  const countries = useSelector((state) => state.countries);
  const continentImage = countries[0].continents[0];
  const dispatch = useDispatch();
  const handleClick = (name) => {
    dispatch(fetchCountryDetails(name));
    console.log(name);
  };

  return (
    <div className="countries">
      <div className="world_map_container">
        <img src={`../images/${continentImage}.svg`} alt="continent-image" />
        <h2>{continentImage}</h2>
      </div>
      <ul className="row">
        {' '}
        <>
          {countries.map((country) => (
            <li key={country?.name.common}>
              <div className="list">
                <h2>{country?.name.common}</h2>
                <Link to={`/:/${country?.name.common}`}>
                  <BsFillArrowRightCircleFill
                    onClick={() => handleClick(country?.name.common)}
                  />
                </Link>
              </div>
              <img src={country?.flags.png} alt="flag" />
              <div className="item">
                <p>Capital:</p>
                <p>{country?.capital}</p>
              </div>
              <div className="item">
                <p>SubRegion:</p>
                <p>{country?.subregion}</p>
              </div>
              <div className="item">
                <p>TimeZone:</p>
                <p>{country?.timezones[0]}</p>
              </div>
            </li>
          ))}
        </>
      </ul>
    </div>
  );
};

export default Countries;
