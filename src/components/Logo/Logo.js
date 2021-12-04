import React from "react";
import classes from '../Logo/Logo.module.css';

const Logo = (props) => {
  return (
    <div className={classes.Wrapper}>
      <img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="weather icon" className={classes.Wrapper} />
    </div>
  );
}

export default Logo;



