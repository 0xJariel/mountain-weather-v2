import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './WeatherSummary.css';


function WeatherSummary(props) {
	const {name, windSpeed, feelsLike, maxTemp, minTemp, gustSpeed, windDirection} = props.bikiniBottomWeather



  return (
	<div>
		<div>{name}</div>
		<div>{feelsLike}</div>
		<div>{windSpeed}</div>
		<div>{gustSpeed}</div>
		<div>{windDirection}</div>
		<div>{maxTemp}</div>
		<div>{minTemp}</div>
		<div>{console.log(props.bikiniBottomWeather)}</div>
	</div>
  )
}

export default WeatherSummary