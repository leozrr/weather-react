import React from "react";
import Weather from "./Weather";
import "./Weather.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Zurich" />
        <footer>
          This project is{" "}
          <a
            rel="noreferrer"
            href="https://github.com/leozrr/weather-react"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
