import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
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
          <div className="float-left">
            <WeatherIcon
              code={props.data.icon}
              size={100}
              alt={props.data.description}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <div className="float-left">
                <WeatherTemperature celsius={props.data.temperature} />
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
      </div>
    </div>
  );
}
