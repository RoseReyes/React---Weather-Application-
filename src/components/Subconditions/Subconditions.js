import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import classes from '../Subconditions/Subconditions.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Subconditions = (props) => {
  let [icon, setIcon] = useState('');

  return (
    <div className={classes.Wrapper}>
      {props.error && <p className={classes.ErrorMessage}>No information was found.</p>}
      {props.responseObj.cod === 200 ?
        <div>
          <Logo
            icon={props.responseObj.weather[0].icon}
          />
          <div className={classes.TempMinMax}><p><FontAwesomeIcon icon="temperature-high" className={classes.TempHigh}/> {Math.round(props.responseObj.main.temp_max)}&deg;F</p><p><FontAwesomeIcon icon="temperature-low" className={classes.TempLow}/> {Math.round(props.responseObj.main.temp_min)}&deg;F</p></div>
          <div className={classes.Description}><p>Minimum temperature near {Math.round(props.responseObj.main.temp_min)} degrees. Maximum temperature near {Math.round(props.responseObj.main.temp_max)} degrees. Today we will have {props.responseObj.weather[0].description} and feels like {Math.round(props.responseObj.main.feels_like)} degrees.</p>
          </div>
        </div>
        : null
      }
    </div>
  );
}

export default Subconditions;