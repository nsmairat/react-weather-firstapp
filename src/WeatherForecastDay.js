import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="Weather-forecast-day">{day()}</div>
      <div className="Weather-forecast-icon">
        <img src={props.data.condition.icon_url} alt="sun" />
      </div>
      <div className="Weather-forecast-temp">
        <span className="Weather-forecast-temp-max">{maxTemperature()}</span>
        <span className="Weather-forecast-temp-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
