import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.date.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.date.temp.min);
    return `${temperature}°`;
  }
  function day() {
    let day = new Date(props.date.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "San"];
    let date = day.getDay();

    return days[date];
  }
  return (
    <div>
      <div className="forecastDay">{day()}</div>
      <div>
        <WeatherIcon code={props.date.weather[0].icon} size={32} />
      </div>
      <div className="weatherForecaast-temperatures">
        <span className="weatherForecaastMaxTemperature">
          {maxTemperature()}
        </span>
        <span className="weatherForecaastMinTemperature">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
