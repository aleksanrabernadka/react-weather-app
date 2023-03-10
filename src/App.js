import "./App.css";
import Weather from "./Weather";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          <a
            href="https://github.com/aleksanrabernadka/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-sourced{" "}
          </a>
          on Github
        </footer>
      </div>
    </div>
  );
}
