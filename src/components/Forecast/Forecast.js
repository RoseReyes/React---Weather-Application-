import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';
import Subconditions from '../Subconditions/Subconditions'
import classes from '../Forecast/Forecast.module.css';

const Forecast = () => {

  let [city, setCity] = useState('');
  let [responseObj, setResponseObj] = useState({});
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);

  const uriEncodedCity = encodeURIComponent(city);

  function getForecast(e) {
    e.preventDefault();

    if (city.length === 0) {
      return setError(true);
    }

    setError(false);
    setResponseObj({});

    setLoading(true);

      fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=imperial&q=${uriEncodedCity}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_API_KEY
        }
      })
      .then(response => response.json())
      .then(response => {
        if (response.cod !== 200) {
            throw new Error()
        }
        
        setResponseObj(response);
        setLoading(false);
        
      })
        .catch(err => {
          setError(true);
          setLoading(false);
      });
   }

  return (
    <div className={classes.Wrapper}>
      <div className={classes.WrapperForm}>
        <form onSubmit={getForecast}>
          <input
            type="text"
            placeholder="City"
            maxLength="50"
            className={classes.TextInput}
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit" className={classes.Button}>Search</button>
        </form>
      </div>
      <Conditions
        responseObj={responseObj}
        error={error}
        loading={loading}
      />
      <Subconditions
        responseObj={responseObj}
        error={error}
      />
    </div>
  );
}

export default Forecast;