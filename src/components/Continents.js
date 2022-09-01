import React from 'react';
import continentsOfTheWorld from '../data/data';
import { fetchCountries } from '../redux/countries/countries';
import { Link } from 'react-router-dom';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import '../styles/continents.scss';

const Continents = () => {
  const dispatch = useDispatch();
  const handleClick = (name) => {
    dispatch(fetchCountries(name));
  };

  return (
    <div className="continents">
      <ul className="continents_list">
        {continentsOfTheWorld.map(({ id, name, image }) => (
          <li key={id}>
            <img src={image} alt="country" />
            <h2>{name}</h2>
            <Link to={`/${name}`}>
              <BsFillArrowRightSquareFill onClick={() => handleClick(name)} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Continents;
