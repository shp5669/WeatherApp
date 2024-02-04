import React from 'react';
import './WeatherDisplay.css'; // Add this line at the top of your WeatherDisplay.js file


function WeatherDisplay({ weatherData }) {
  if (!weatherData) return <p>Please enter a city to get the weather.</p>;

  return (
    <div className="weather-display">
        <h2>{weatherData.name}</h2>
        <p>Temperature: {weatherData.main.temp}°C</p>
        <p>Conditions: {weatherData.weather[0].main}</p>
    </div>
  );
}

export default WeatherDisplay;
