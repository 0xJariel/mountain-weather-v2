import React, { useEffect, useState } from 'react';
import './App.css';
import DaySelector from './DaySelector/DaySelector';
import HourlyForecast from './HourlyForecast/HourlyForecast';
import LocationSummary from './LocationSummary/LocationSummary';
import Navbar from './Navbar/Navbar';
import SnowForecast from './SnowForecast/SnowForecast';
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
		
		const formatDate = (locationOffset) => {
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
								date: `${formatDate(basicData.timezone)}`, 
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
			{console.log(bikiniBottomWeather)}
			<Navbar setCurrentLocation={setCurrentLocation}/>
			<LocationSummary name={bikiniBottomWeather.name} date={bikiniBottomWeather.date} />
			<WeatherSummary bikiniBottomWeather={bikiniBottomWeather} />
			<SnowForecast />
			<DaySelector />
			<HourlyForecast forecast={bikiniBottomWeather.forecast}/>
			<div>
				{/* <Navbar setCurrentLocation={setCurrentLocation}/>
				<LocationSummary name={bikiniBottomWeather.name} date={bikiniBottomWeather.date}coordinates={bikiniBottomWeather.coordinates} />
				<WeatherSummary bikiniBottomWeather={bikiniBottomWeather} /> */}
    		</div>
	</div>	
		
	);
}

export default App;