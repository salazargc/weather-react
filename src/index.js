import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Calgary" />
      <small>
        {" "}
        This project was coded by Gabriela Salazar and is
        <a href="https://github.com/salazargc/weather-react" target="blank">
          {" "}
          Open-source code on GitHub
        </a>{" "}
        and
        <a href="https://agitated-pasteur-b50b92.netlify.app/" target="blank">
          {" "}
          hosted on Netlify
        </a>
      </small>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
