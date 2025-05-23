import React from 'react'

const CurrentWeather = () => {
  return (
    <div className="current-weather">
            <img src="public/clouds.svg" className="weather-icon" alt="" />
            <h2 className="temperature">25° <span>C</span></h2>
            <p className="weather">Cloudy</p>
            </div >
  )
}

export default CurrentWeather