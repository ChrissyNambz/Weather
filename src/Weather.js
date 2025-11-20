import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter any city here...."
              className="placeholder"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              typer="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Kampala</h1>
      <ul>
        <li>Wednesday</li>
        <li>Mostly Sunny</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          ☀ <span className="temperature">6</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Percipitation:15%</li>
            <li>Humidity:50%</li>
            <li>Wind:7 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
