import React from 'react';
import continentsOfTheWorld from '../data/data';
import { fetchCountries } from '../redux/countries/countries';
import { getCategory } from '../redux/countries/categories';
import { Link } from 'react-router-dom';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/continents.scss';

const Continents = () => {
  const categories = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const handleClick = (name) => {
    dispatch(fetchCountries(name));
  };
  const changeState = (e) => {
    dispatch(getCategory(e.target.value));
  };

  return (
    <div className="continents">
      <label htmlFor="category-select">
        <select
          type="text"
          value="Select Continent"
          onChange={changeState}
          placeholder="Category"
          name="category"
        >
          <option value="Select Continent">SELECT CONTINENT</option>
          <option value="Africa">AFRICA</option>
          <option value="All">ALL</option>
          <option value="Europe">EUROPE</option>
          <option value="Oceania">OCEANIA</option>
          <option value="Asia">ASIA</option>
          <option value="North America">NORTH AMERICA</option>
          <option value="South America">SOUTH AMERICA</option>
          <option value="Antarctica">ANTARCTICA</option>
        </select>
      </label>
      <ul className="continents_list">
        {categories.map(({ id, name, image }) => (
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
