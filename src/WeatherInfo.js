import React from "react";
import FormattedDate from "./FormattedDate";

export default function WEatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col-sm-6">
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>

        <div className="col-sm-6">
          <img
            src="https://openweathermap.org/img/wn/02n@2x.png"
            alt={props.data.description}
            className="float-right"
          />
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <div className="float-left">
                <strong>{Math.round(props.data.temperature)}</strong>
                <span className="units">°C</span>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <ul>
              <li>
                Humidity:
                <span className="hum">{props.data.humidity}</span>
                <span>%</span>
              </li>
              <li>
                Wind:
                <span className="win"> {props.data.wind}</span>
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
