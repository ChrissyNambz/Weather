import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";


import Current from "./Current";

export default function Info(props){
    return (
      <div className="Info">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <Current date={props.data.date} />
          </li>

          <li className="text-capitalize">{props.data.description}</li>
        </ul>

        <div className="row mt-3">
          <div className="col-6">
            <FontAwesomeIcon
              icon={faCloud}
              beat
              size="2x"
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
              <li> Wind: {props.data.wind}</li>
            </ul>
          </div>
        </div>
      </div>
    );

}