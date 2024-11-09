import React from "react";
import FormattedDate from "./FormattedDate";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.info.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.info.date} />
        </li>
        <li className="text-capitalize">{props.info.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="temp-container">
            <img src={props.info.iconUrl} alt={props.info.description} />
            <div className="temp-value">
              <span className="temperature">{props.info.temperature}</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {props.info.wind} Km/h%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
