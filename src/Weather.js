import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: "Sunday 07:00",
      city: response.data.name,
      description: response.data.weather[0].description,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="weather-form">
          <div className="card-body">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city"
                  autofocus="on"
                  autocomplete="off"
                  className="form-control shadow-sm"
                />
              </div>
              <div class="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="form-control btn btn-primary w-100"
                />
              </div>
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <div className="row">
          <div className="col-sm-6">
            <ul>
              <li> Last updated: {weatherData.date}</li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>

          <div className="col-sm-6">
            <img
              src="https://openweathermap.org/img/wn/02n@2x.png"
              alt={weatherData.description}
              className="float-right"
            />
          </div>
          <div className="row">
            <div className="col-6">
              <div className="clearfix weather-temperature">
                <div className="float-left">
                  <strong>{Math.round(weatherData.temperature)}</strong>
                  <span className="units">°C</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <ul>
                <li>
                  Humidity:
                  <span className="hum">{weatherData.humidity}</span>
                  <span>%</span>
                </li>
                <li>
                  Wind:
                  <span className="win"> {weatherData.wind}</span>
                  <span>km/hr</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="weather-forecast"></div>
        </div>
      </div>
    );
  } else {
    const apiKey = "610aded4732d92a616becc2092c41d04";
    let city = "Calgary";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
