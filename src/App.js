import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

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
      </div>
    </div>
  );
}

export default App;
