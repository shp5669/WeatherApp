import React, { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';
import './App.css'; // Add this line at the top of your App.js file


function App() {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = 'c617ff2b0987f13ee634386d5696aeff'; // Replace this with your actual API key
  const [error, setError] = useState('');

  const handleSearch = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Weather data not found');
        }
        return response.json();
      })
      .then(data => {
        setWeatherData(data);
      })
      .catch(error => {
        console.error("Failed to fetch weather data:", error);
        setWeatherData(null);
        setError('Failed to fetch weather data. Please try again.');
      });
  };

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <header className="App-header">
        <h1>Weather App</h1>
        <SearchBar onSearch={handleSearch} />
        <WeatherDisplay weatherData={weatherData} />
      </header>
    </div>
  );
}

export default App;
