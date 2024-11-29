import React from 'react';
import './HoursWorkStyle.css';

function HoursWork({hours,happyHour}) {
  return (
    <div className="hours">
    <h3>Hours</h3>
   <span>{hours}</span>
   <h3>Happy Hour </h3>
   <span>{happyHour}</span>
 </div>
  )
}

export default HoursWork;
