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

	const changeTemp = (props) => {
		console.log('changing temp')
	}

	const changeSpeed = () => {
		console.log('changing speed')
	}

	return (
		<div className='navbar'>
			
			<form onSubmit={handleSubmit}>
				<input 
					onChange={handleLocationChange}
					placeholder='Destination ...'/>
				<button><MdSearch /></button>
			</form>
			{/* <div><MdOutlineLocationSearching size={18} /></div>
			<div>Temp: <button onClick={changeTemp}>F°</button></div>
			<div>Speed: <button onClick={changeSpeed}>mph</button></div> */}
		</div>
	)
}

export default Navbar