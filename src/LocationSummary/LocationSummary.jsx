import React from 'react'
import './LocationSummary.css';
import { MdOutlineLocationSearching, MdSearch } from 'react-icons/md';
import { useState } from 'react';

function LocationSummary(props) {

  return (
	<div className="component LocationSummary">
			<div className="name">{props.name}</div>
			<div className="date">{props.date}</div>
	</div>
  )
}

export default LocationSummary