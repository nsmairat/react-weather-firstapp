import React from "react";
import "./App.css";

function App() {
  return (
    <form>
      <p>Weather App</p>
      <input type="search" placeholder="Type a city..." />
      <input type="submit" value="Search" />
      <p>
        <a href="/">Open-source</a> code, by <a href="/">Nila Smairat</a>
      </p>
    </form>
  );
}

export default App;
