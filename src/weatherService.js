import React, { useEffect, useState } from 'react';

function weatherService() {
	const API_KEY = '247537e1b87fbdafa8d273c88d41b8ad'

	const [currentLocation, setCurrentLocation] = useState("Beaver Creek");

	const [basicData,setBasicData] = useState({})
	const [fullWeatherData, setFullWeatherData] =useState({})

  	const [location, setLocation] = useState({name: 'Beaver Creek', date: '', coordinates:{}})
	const [weatherSummary, setWeatherSummary] = useState({})
	//free version allows from 3hr intervals for forecast
	const [fullForecast, setFullForecast] = useState({})

	
	const weatherData = {location, weatherSummary, fullForecast}

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

	useEffect(() => {
		getWeatherData()
		console.log('weather data changed')
	}, [currentLocation])

	//api vs https:// = return html vs json
	//use name to extract coordinates > use coordinates to extract hourly data information
	
	const getWeatherData = async() => {
		let lat;
    	let lon;
		
	
		try {
		const initialResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
											${currentLocation}&appid=${API_KEY}`);

		const basicData = await initialResponse.json()

		lat = basicData.coord.lat
		lon = basicData.coord.lon

		setLocation({name: `${basicData.name}`, 
						date: `${setDate(basicData.timezone)}`, 
						coordinates: {lon: `${basicData.coord.lon}`, lat: `${basicData.coord.lat}`}})

		setBasicData(basicData)

		//set feelsLike, humidity, wind, Gust, sunRise, sunSet
		setWeatherSummary({temp: basicData.main.temp, 
							feelsLike: basicData.main.feels_like, 
							wind: basicData.wind, 
							humidity: basicData.main.humidity})


		//api. => html response
		const SecondaryResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
		const fullWeatherData = await SecondaryResponse.json()
		//extract daily/hourly weather
		setFullWeatherData(fullWeatherData)
		setFullForecast(fullWeatherData.list)

		}
		catch (e) {
		console.log(e)
		}
	}

	return (
		console.log('hello!')
	);
}

export default weatherService;