import React, { useEffect, useState } from 'react';

function CrustyCrabWeatherStation () {
	const API_KEY = '247537e1b87fbdafa8d273c88d41b8ad'
	const [currentLocation, setCurrentLocation] = useState('Vail')
	const [bikiniBottomWeather, setBikiniBottomWeather] = useState({ name : '',
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
		const basicData = await initialResponse.json()
		const fullWeatherData = await SecondaryResponse.json()

		const initialResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
											${currentLocation}&appid=${API_KEY}`);

		const SecondaryResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=
											  ${lat}&lon=${lon}&appid=${API_KEY}`);

		await setFullWeatherData(fullWeatherData)
		
		await setWeatherState({name: `${basicData.name}`, 
								date: `${setDate(basicData.timezone)}`, 
								coordinates: {lon: `${basicData.coord.lon}`, lat: `${basicData.coord.lat}`},
								temp: basicData.main.temp,
								feelsLike: basicData.main.feels_like,
								wind: basicData.wind,
								humidity: basicData.main.humidity,
								forecast: fullWeatherData.list
							})

		//api. => html response
		}
		catch (e) {
		console.log(e)
		}
	}
	
}

export default CrustyCrabWeatherStation;