import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [units, setUnits] = useState("celsius");
  function converttoFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }

  function converttoCelsius(event) {
    event.preventDefault();
    setUnits("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (units === "celsius") {
    return (
      <div className="WeatherTemperature">
        <strong>{Math.round(props.celsius)}</strong>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={converttoFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <strong>{Math.round(fahrenheit())}</strong>
        <span className="units">
          <a href="/" onClick={converttoCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
