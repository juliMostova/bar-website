import React from 'react';
import './LocationStyle.css';

function Location({address,googleMapsLink}) {
  return (
    <div className="location">
    <h3>Location</h3>
    <p>{address}</p>
    <a
      href={googleMapsLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      {address}
    </a>
  </div>
  )
}

export default Location;
