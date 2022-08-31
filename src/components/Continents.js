import React from 'react';
import continentsOfTheWorld from '../data/data';
import { fetchCountries } from '../redux/countries/countries';
import { Link } from 'react-router-dom';
import '../styles/continents.scss';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';

const Continents = () => {
  const dispatch = useDispatch();
  const handleClick = (name) => {
    dispatch(fetchCountries(name));
    console.log(name);
  };

  return (
    <div className="continents">
      {continentsOfTheWorld.map(({ id, name, image }) => (
        <li key={id}>
          {name}
          <Link to={`/${name}`}>
            <button type="button" onClick={() => handleClick(name)}>
              <BsFillArrowRightSquareFill />
            </button>
          </Link>
          <img src={image} />
        </li>
      ))}
    </div>
  );
};

export default Continents;
