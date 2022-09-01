import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api';
import axios from 'axios';

const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
const GET_COUNTRY = 'GET_COUNTRY';
const initialState = [];

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_COUNTRIES/fulfilled':
      return action.payload;
    case 'GET_COUNTRY':
      return state.filter((country) => country.name.common === action.payload);
    default:
      return state;
  }
};

export const fetchCountries = createAsyncThunk(
  FETCH_COUNTRIES,
  async (name) => {
    const response = await axios.get(api);
    return response.data.filter((country) => {
      if (country.region === name) {
        return country;
      } else if (country.subregion === name) {
        return country;
      }
    });
  }
);

export const fetchCountryDetails = (name) => {
  return { type: GET_COUNTRY, payload: name };
};

export default countryReducer;
