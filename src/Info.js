import React from "react"

export default function Info(props){
    return (
      <div className="Info">
        <h1>{props.data.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>

        <div className="row mt-3">
          <div className="col-6">
            <img
              src={props.data.weatherIcon}
              alt={props.data.description}
              className="weatherIcon"
            />
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Country: {props.data.country}</li>
              <li>Humidity:{props.data.humidity}</li>
              <li> Wind: {props.data.Wind}</li>
            </ul>
          </div>
        </div>
      </div>
    );

}