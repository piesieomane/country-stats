import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { fetchCountryDetails } from '../redux/countries/countries';

const CountryDetails = () => {
  const { countries } = useSelector((state) => state);
  console.log(countries);

  return (
    <div>
      {countries.map((country) => (
        <li key={country?.name.common}>
          <h1>{country?.name.common}</h1>

          <div className="map-wrapper">
            <MapContainer
              center={country?.latlng}
              zoom={6}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={country?.latlng}>
                <Popup>
                  {country?.name} <br /> {country?.name}
                </Popup>
              </Marker>
            </MapContainer>
          </div>
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
