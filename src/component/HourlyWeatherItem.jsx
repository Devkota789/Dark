import React from 'react'

const HourlyWeatherItem = () => {
  return (
    <li className="weather-item"><p className="time">00:00</p>
    <img src="public/clouds.svg " className="weather-icon"/>
    <p className="temperature">25°</p>
    </li> 
  )
}

export default HourlyWeatherItem