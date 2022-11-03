import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './WeatherSummary.css';


function WeatherSummary(props) {
	const {temp, windSpeed, feelsLike, maxTemp, minTemp, gustSpeed, windDirection} = props.bikiniBottomWeather



  return (
	<div>
		<div>Temp: {temp}</div>
		<div>Feels like: {feelsLike}</div>
		<div>Wind Speed: {windSpeed}</div>
		<div>Gust Speed: {gustSpeed}</div>
		<div>Wind Direction: {windDirection}</div>
		<div>High: {maxTemp}</div>
		<div>Low: {minTemp}</div>
	</div>
  )
}

export default WeatherSummary