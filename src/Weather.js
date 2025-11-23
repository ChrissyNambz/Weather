import React, {useState} from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
const[ready,setReady]=useState(false);
const[weatherData,setweatherData]=useState({})

  const[temperature, setTemperature]=useState(null)
  function cityResponse(response) {
    console.log(response.data);
    setweatherData({
      temperature: response.data.main.daily.temperature.current,
      wind:response.data.wind.speed,
      city: response.data.name,
      weatherIcon:"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
      country:response.data.main.country,
      description:response.data.main.condition.description,
      humidity:response.data.main.temperature.humidity,
        });
    setTemperature();
    setReady(true);
  }

  if (ready){
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
         <h1>{weatherData.city}</h1>
         <ul>
           <li>Wednesday</li>
           <li>{weatherData.description}</li>
         </ul>

         <div className="row mt-3">
           <div className="col-6">
            <img src={weatherData.weatherIcon} alt="Mostly Sunny" className="weatherIcon"/>
             <span className="temperature">{Math.round(weatherData.temperature)}</span>
             <span className="unit">°C</span>
           </div>
           <div className="col-6">
             <ul>
               <li>{weatherData.country}</li>
               <li>{weatherData.humidity}</li>
               <li>{weatherData.Wind}</li>
             </ul>
           </div>
         </div>
       </div>
     );

  }
  else {
  const apiKey = "t6468120b34dd22a5f93b7f863a2oc0a";
  let city = "Kampala";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(cityResponse);
  return "Weather is LOADING ....."
  }
}
