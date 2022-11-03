import React from 'react'
import './Navbar.css';
import { MdOutlineLocationSearching, MdSearch } from 'react-icons/md';
import { useState } from 'react';



function Navbar(props) {
	const { setCurrentLocation } = props

	const [inputLocation, setInputLocation] = useState('')

	const handleLocationChange = (e) => {
		setInputLocation(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setInputLocation(inputLocation)
		setCurrentLocation(inputLocation)

	}

	const changeTemp = (e) => {
		e.preventDefault()
		console.log('changing temp')
	}

	const changeSpeed = (e) => {
		e.preventDefault()
		console.log('changing speed')
	}

	return (
			<form className="component Navbar" onSubmit={handleSubmit}>
				<input 
					className="search-input" 
					type="text" placeholder="location..."
					onChange={handleLocationChange}></input>
				<div className="search-button" onClick={handleSubmit}><MdSearch /></div>
				{/* <div>Temp: <button onClick={changeTemp}>F°</button></div>
				<div>Speed: <button onClick={changeSpeed}>mph</button></div> */}
			</form>
			)
}

export default Navbar