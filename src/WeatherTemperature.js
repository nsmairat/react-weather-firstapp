import React from "react";
import "./WeatherTemperature.css";
import "./Weather.css";

export default function WeatherTemperature(props) {
  let fahrenheit = (props.celsius * 9) / 5 + 32;
  return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(fahrenheit)}</span>
      <span className="unit">°F</span>
    </div>
  );
}
