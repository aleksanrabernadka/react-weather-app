import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
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
              <WeatherIcon code={props.data.icon} />
            </div>

            <div className="float-start">
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">C</span>
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
