import React from 'react'
import './WeatherSummary.css';


function WeatherSummary(props) {
	const test = () => {
		console.log(props.todaysWeatherData)
		console.log(props.todaysWeatherData.temp)
		
	}

	

  return (
	<div>
		<div onClick={test}>Click me!</div>
		{/* <div>{`${props.todaysWeatherData}`}</div> */}
		
		
	</div>
  )
}

export default WeatherSummary