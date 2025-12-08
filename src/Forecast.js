import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faSun, faCloudRain } from "@fortawesome/free-solid-svg-icons";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
let longitude= props.coordinates.longitude;
let latitude=props.coordinates.latitude
  let apiKey = "t6468120b34dd22a5f93b7f863a2oc0a";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="forecastDaily">
      <div className="row">
        <div className="col">
          <div className="forecastDay">Thu </div>
          <FontAwesomeIcon icon={faCloud} beat size="lg" />
          <span className="forecastMax">19°</span>{" "}
          <span className="forecastMin">10°</span>
        </div>
      </div>
    </div>
  );
}
