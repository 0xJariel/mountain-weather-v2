import React from 'react'
import './LocationSummary.css';
import { MdOutlineLocationSearching, MdSearch } from 'react-icons/md';
import { useState } from 'react';

function LocationSummary(props) {

  return (
	
	<div>
		<div>{props.name}</div>
		<div>{JSON.stringify(props.coordinates)}</div>
		<div>{props.date}</div>
	</div>
  )
}

export default LocationSummary