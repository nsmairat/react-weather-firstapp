import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <form>
          <p>🌤Weather App☀️</p>
          <input type="search" placeholder="Type a city..." />
          <input type="submit" value="Search" />
          <footer>
            <p>
              Open-source code on{" "}
              <a href="https://github.com/nsmairat/react-weather-firstapp">
                GitHub.
              </a>{" "}
              ➡️ Check my{" "}
              <a href="https://portfolionila.netlify.app">Portfolio</a> too!
            </p>
          </footer>
        </form>
      </div>
    </div>
  );
}

export default App;
