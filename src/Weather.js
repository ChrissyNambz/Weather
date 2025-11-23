import React, {useState} from "react";
import axios from "axios";
import Info from "./Info";

import "./Weather.css";

export default function Weather(props) {
const[ready,setReady]=useState(false);
const[weatherData,setweatherData]=useState({})
const[city, setCity]=useState(props.defaultCity)
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

  function search (){
     const apiKey = "t6468120b34dd22a5f93b7f863a2oc0a";
     let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
     axios.get(apiUrl).then(cityResponse);

  }


  function handleSubmit(event){

    event.preventDefault();
    search()

  }

  function cityChange(event){

    setCity(event.target.value)
  }

  if (ready){
     return (
       <div className="Weather">
         <form onSubmit={handleSubmit} >
           <div className="row">
             <div className="col-9">
               <input
                 type="search"
                 placeholder="Enter any city here...."
                 className="placeholder"
                 autoFocus="on"
                 onChange={cityChange}
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
         <Info data={weatherData} />
       </div>
     );

  }
  else {
 
    search()
  return "Weather is LOADING ....."
  }
}
