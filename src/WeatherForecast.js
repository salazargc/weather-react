import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Mon</div>
          <WeatherIcon code="01d" size={32} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecasTemperature-max">20°</span>
            <span className="WeatherForecasTemperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
