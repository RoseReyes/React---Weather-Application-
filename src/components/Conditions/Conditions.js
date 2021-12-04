import React from "react";
import classes from '../Conditions/Conditions.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Conditions = (props) => {
  return (
    <div className={classes.Wrapper}>
      {props.error && <p className={classes.ErrorMessage}>Please enter a valid city.</p>}
      {props.loading && <div className={classes.Loader} />}
      {props.responseObj.cod === 200 ?
        <div>
          <div className={classes.City}><FontAwesomeIcon icon="map-marker-alt" className={classes.Location} /> {props.responseObj.name}</div>
          <div className={classes.Temperature}>{Math.round(props.responseObj.main.temp)}&deg;F</div>
          <div className={classes.HumidWind}><p>Humidity: {props.responseObj.main.humidity}%</p><p>Wind: {props.responseObj.wind.speed} mph</p></div>
        </div>
        : null
      }
    </div>
  );
}

export default Conditions;