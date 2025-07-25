import React from 'react'

const SearchSection = ( getWeatherDetails) => {
    const API_KEY = import.meta.env.VITE_API_KEY;           
    const handleCitySearch = (e) => {
        e.preventDefault();
        const searchInpt = e.target.querySelector('.search-input');
        const API_URL = ` http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInpt.value}`;
        getWeatherDetails(API_URL);
    }
  return (
  
    <div className="search-section">
    <form action="#" className="search-form" onSubmit={handleCitySearch}> 
    <span className="material-symbols-rounded">
          search
</span>
        <input type="text" placeholder="Search..." className="search-input" required />
        </form>
        <button className="location-button">
        <span className="material-symbols-rounded">
my_location
</span>
          </button>
      </div>
  
  )
}
export default SearchSection;