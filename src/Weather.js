import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Calgary",
    date: "Friday 17:00",
    description: "Cloudy",
    humidity: 15,
    wind: 2,
    temperature: 23
  };

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
            <li>Cloudy</li>
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
                <strong>{weatherData.temperature}</strong>
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
}
