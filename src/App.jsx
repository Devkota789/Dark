import SearchSection from "./component/SearchSection"
import CurrentWeather from "./component/CurrentWeather"
import HourlyWeatherItem from "./component/HourlyWeatherItem"
const App = () => {
  const getWeatherDetails =   async(API_URL) => {     
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);
  }
  catch (error) {
    console.log(error);
  }
}
  return (
    <div className="container">
<SearchSection  getWeatherDetails ={getWeatherDetails}/>

      
     
        <div className="weather-section">
          <CurrentWeather/>
          <div className="current-weather">
            <img src="public/clouds.svg" className="weather-icon" alt="" />
            <h2 className="temperature">25° <span>C</span></h2>
            <p className="weather">Cloudy</p>
            </div >
            <div className="hourly-forecast">
              <ul className="weather-list">
                <li className="weather-item"><p className="time">00:00</p>
                <img src="public/clouds.svg " className="weather-icon"/>
                <p className="temperature">25°</p>
                </li>
                <HourlyWeatherItem />
              </ul>


        </div>
        </div>
        </div>
         
  )
}

export default App