import React, { useEffect, useState } from 'react';
import './App.css';
import LocationSummary from './LocationSummary/LocationSummary';
import Navbar from './Navbar/Navbar';
import WeatherSummary from './WeatherSummary/WeatherSummary';

function App() {
  
	const API_KEY = '247537e1b87fbdafa8d273c88d41b8ad'

	const [basicData,setBasicData] = useState({})
	const [fullWeatherData, setFullWeatherData] =useState({})
	const [currentLocation, setCurrentLocation] = useState('Vail');

  const [location, setLocation] = useState({name: 'Vail', date: '10/30/2022', coordinates:{}})
	const [todaysWeatherData, setTodaysWeatherData] = useState()
	//free version allows from 3hr intervals for forecast
	const [fullForecast, setFullForecast] = useState({})

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

	//modified by input
	const [photos, setPhotos] = useState([]);

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

    const SecondaryResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    const fullWeatherData = await SecondaryResponse.json()
    
                  
		const basicData = await initialResponse.json()

    lat = basicData.coord.lat
    lon = basicData.coord.lon

		await setLocation({name: `${basicData.name}`, 
						date: `${setDate(basicData.timezone)}`, 
						coordinates: {lon: `${basicData.coord.lon}`, lat: `${basicData.coord.lat}`}})

		await setBasicData(basicData)

		//set feelsLike, humidity, wind, Gust, sunRise, sunSet
		await setTodaysWeatherData({temp: basicData.main.temp, 
							feelsLike: basicData.main.feels_like, 
							speed: basicData.wind.speed, 
              gust: basicData.wind. gust,
              deg: basicData.wind.deg,
							humidity: basicData.main.humidity,
              minTemp: basicData.main.temp_min,
              maxTemp: basicData.main.temp_max})


		//api. => html response
		//extract daily/hourly weather
    setFullWeatherData(fullWeatherData)
    setFullForecast(fullWeatherData.list)
    // console.log(basicData)
    console.log(location, fullForecast, todaysWeatherData)
		}
		catch (e) {
		console.log(e)
		}

	}


	return (
		<div>
      <Navbar setCurrentLocation={setCurrentLocation}/>
      <LocationSummary name={location.name} date={location.date}coordinates={location.coordinates} />
      <WeatherSummary todaysWeatherData={todaysWeatherData} />
    </div>
	);
}

export default App;