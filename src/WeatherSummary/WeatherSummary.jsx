import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './WeatherSummary.css';


function WeatherSummary(props) {
	const {temp, windSpeed, feelsLike, maxTemp, minTemp, gustSpeed, windDirection} = props.bikiniBottomWeather



  return (
	<div>
		<div className="component temperature">
			<div className="temp">32°</div>
		</div>
		<div className="component todays-summary">
			<div className='summary-square'>
				<div>logo</div>
				<div>{temp}</div>			
			</div>
			<div className='summary-square'>
				<div>logo</div>
				<div>Feels like: <span>{feelsLike}</span></div>
			</div>
			<div className='summary-square'>
				<div>logo</div>
				<div>Wind Speed: <span>{windSpeed}</span></div>			
			</div>
			<div className='summary-square'>
				<div>logo</div>
				<div>Gust Speed: <span>{gustSpeed}</span></div></div>		
			
			<div className='summary-square'>
				<div>logo</div>
				<div>Wind Direction: <span>{windDirection}</span></div>		
			</div>		
			<div className='summary-square'>
				<div>logo</div>
				<div>Feels like: <span>{feelsLike}</span></div>				
			</div>
		</div>
	</div>
  )
}

export default WeatherSummary