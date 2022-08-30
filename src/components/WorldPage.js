import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../redux/countries/countries';
import Continents from './Continents';

const WorldPage = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchCountries());
  // }, []);

  return (
    <>
      <div>
        <img src="/images/world.svg" alt="world-image" />
      </div>
      <Continents />
    </>
  );
};

export default WorldPage;
