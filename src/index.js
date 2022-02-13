import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <small>
        <a href="https://github.com/salazargc/weather-react" target="blank">
          Open-source code,
        </a>
      </small>
      <small> by Gabriela Salazar</small>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
