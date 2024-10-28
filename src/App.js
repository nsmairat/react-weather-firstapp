import React from "react";
import "./App.css";

function App() {
  return (
    <form>
      <p>🌤Weather App☀️</p>
      <input type="search" placeholder="Type a city..." />
      <input type="submit" value="Search" />
      <p>
        Open-source code on{" "}
        <a href="https://github.com/nsmairat/react-weather-firstapp">
          GitHub,
        </a>
        by <a href="https://first-react-appl.netlify.app">Nila Smairat</a>
      </p>
    </form>
  );
}

export default App;
