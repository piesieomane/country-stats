import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../redux/countries/countries';
import Continents from './Continents';

const CountriesPage = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  //console.log('sfdsfesd', countries);
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  return (
    <>
      <div>
        <img src="/images/world.svg" />
      </div>
      <Continents />
    </>
  );
};

export default CountriesPage;
