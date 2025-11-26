import React, {useState} from "react";
import Current from "./Current";
import axios from "axios";
import Info from "./Info";

import "./Weather.css";

export default function Weather(props)
 {
const[weatherData,setweatherData]=useState({ready:false})

const[city, setCity]=useState(props.defaultCity)

  function cityResponse(response) {
    console.log(response.data);
    setweatherData({
      ready:true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      date: new Date (response.data.time *1000),
      weatherIcon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}`,
      country: response.data.country,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
    });
  }

  function search (){
     const apiKey = "t6468120b34dd22a5f93b7f863a2oc0a";
     let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
     axios.get(apiUrl).then(cityResponse);

  }


  function handleSubmit(event){

    event.preventDefault();
    search()

  }

  function cityChange(event){

    setCity(event.target.value)
  }

  if (weatherData.ready){
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
