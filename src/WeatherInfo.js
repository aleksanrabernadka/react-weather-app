import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-start">
              <WeatherIcon code={props.data.icon} size={52} />
            </div>

            <div className="float-start">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li>Wind: {props.data.wind} km/h</li>
            <li>Numidity: {props.data.humidity}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
