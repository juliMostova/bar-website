import React from 'react';
import './HoursWorkStyle.css';

function HoursWork({hours,happyHour,time,happyHourTime}) {
  return (
    <div className="hours">
    <h3>Hours</h3>
   <span>{hours}</span>
   <div>{time}</div>
   <h3>Happy Hour </h3>
   <div>{happyHour}</div>
   <div>{happyHourTime}</div>
 </div>
  )
}

export default HoursWork;
