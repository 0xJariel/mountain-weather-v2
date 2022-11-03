import React, { useEffect, useState } from 'react';
import './App.css';
import LocationSummary from './LocationSummary/LocationSummary';
import Navbar from './Navbar/Navbar';
import WeatherSummary from './WeatherSummary/WeatherSummary';

function App() {
	// function pingCrustyCrabWeatherStation () { >> want to make this an independant module and export the state
	const API_KEY = '247537e1b87fbdafa8d273c88d41b8ad'
	const [currentLocation, setCurrentLocation] = useState('Vail')
	const [bikiniBottomWeather, setBikiniBottomWeather] = useState({ 
														name : '',
														date : '',
														time: '',
														coordinates: {lat: '', lon: ''},
														temp: '',
														feelsLike: '',
														maxTemp: '',
														minTemp: '',
														windSpeed: '',
														gustSpeed: '',
														windDirection: '',
														humidity: '',
														Rain: '',
														Snow: '',
														forecast: [],
	})

	useEffect(() => {
		fetchWeatherData()
	},[currentLocation])


	const fetchWeatherData = async() => {
		try {
		//only one that can be done with a name // name can get the coordinates

		const initialResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
											${currentLocation}&appid=${API_KEY}`);

		const basicData = await initialResponse.json()
		
		const lat = await basicData.coord.lat
		const lon = await basicData.coord.lon

		const SecondaryResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=
											${lat}&lon=${lon}&appid=${API_KEY}`);
		
												
		const fullWeatherData = await SecondaryResponse.json()


		// await setBikiniBottomWeather(fullWeatherData)
		
		const setDate = (locationOffset) => {
			const todaysDate = new Date()
			const localTime = todaysDate.getTime()
			const localOffset = todaysDate.getTimezoneOffset() * 60000
			const utc = localTime + localOffset
			//converting to millisecons
			const searchLocation = utc + (1000 * locationOffset)
			const newLocationDate = new Date(searchLocation)
			return newLocationDate
		}	

		await setBikiniBottomWeather({name: `${basicData.name}`, 
								date: `${setDate(basicData.timezone)}`, 
								coordinates: {lon: `${basicData.coord.lon}`, lat: `${basicData.coord.lat}`},
								temp: basicData.main.temp,
								maxTemp: basicData.main.temp_max,
								minTemp: basicData.main.temp_min,
								feelsLike: basicData.main.feels_like,
								wind: basicData.wind,
								windSpeed: basicData.wind.speed,
								gustSpeed: basicData.wind.gust,
								windDirection: basicData.wind.deg,
								humidity: basicData.main.humidity,
								forecast: fullWeatherData.list
								
							})
		//api. => html response
		console.log(basicData)

		}
		catch (e) {
		console.log(e)
		}
	}
	
// }


	return (
		<div className="app">
		<form className="component search-form">
			
			<input className="search-input" type="text" placeholder="location..."></input>
			<div className="search-button">Search</div>
		</form>
		<div className="component location">
			<div className="name">Beaver Creek</div>
			<div className="date">Monday Oct 31, 2022</div>
		</div>
		<div className="component temperature">
			<div className="temp">32°</div>
		</div>
		<div className="component snow-forecast">
			<div className="snow-day">
				<div className="snow-amount inches" >
					1"
				</div>
				<div 
					className="snow-amount bar-one" >
				</div>
			</div><div className="snow-day">
				<div className="snow-amount inches" >
					6"
				</div>
				<div 
					className="snow-amount bar-two" >
				</div>
			</div><div className="snow-day">
				<div className="snow-amount inches" >
					8"
				</div>
				<div 
					className="snow-amount bar-three" >
				</div>
			</div><div className="snow-day">
				<div className="snow-amount inches" >
					3"
				</div>
				<div 
					className="snow-amount bar-four" >
				</div>
			</div><div className="snow-day">
				<div className="snow-amount inches" >
					0"
				</div>
				<div 
					className="snow-amount bar-five" >
				</div>
			</div><div className="snow-day">
				<div className="snow-amount inches" >
					0"
				</div>
				<div 
					className="snow-amount bar-six" >
				</div>
			</div><div className="snow-day">
				<div className="snow-amount inches" >
					5"
				</div>
				<div 
					className="snow-amount bar-seven" >
				</div>
			</div><div className="snow-day">
				<div className="snow-amount inches" >
					12"
				</div>
				<div 
					className="snow-amount bar-eight" >
				</div>
			</div><div className="snow-day">
				<div className="snow-amount inches" >
					2"
				</div>
				<div 
					className="snow-amount bar-nine" >
				</div>
			</div><div className="snow-day">
				<div className="snow-amount inches" >
					2"
				</div>
				<div 
					className="snow-amount bar-ten" >
				</div>
			</div>
		</div>
		<div className="component day-selector">
				<div>
					<div>day</div>
					<div>icon</div>
					<div>date</div>
				</div>
			</div>
		<div className="component todays-summary">
			<div className='summary-square'>
				<div>logo</div>
				<div>description</div>
				<div>value</div>			
			</div>
			<div className='summary-square'>
				<div>logo</div>
				<div>description</div>
				<div>value</div>			
			</div>
			<div className='summary-square'>
				<div>logo</div>
				<div>description</div>
				<div>value</div>			
			</div>
			<div className='summary-square'>
				<div>logo</div>
				<div>description</div>
				<div>value</div>			
			</div>
			<div className='summary-square'>
				<div>logo</div>
				<div>description</div>
				<div>value</div>			
			</div>
			<div className='summary-square'>
				<div>logo</div>
				<div>description</div>
				<div>value</div>			
			</div>
		</div>
		<div className="component hourly-temp">
				<div>
					<div>weather icon</div>
					<div>time</div>
					<div>line</div>
					<div>temp</div>
				</div>
			</div>
		<div>
			{/* <Navbar setCurrentLocation={setCurrentLocation}/>
			<LocationSummary name={bikiniBottomWeather.name} date={bikiniBottomWeather.date}coordinates={bikiniBottomWeather.coordinates} />
			<WeatherSummary bikiniBottomWeather={bikiniBottomWeather} /> */}
    	</div>
	</div>	
		
	);
}

export default App;