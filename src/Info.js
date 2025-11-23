import React from "react"

export default function Info(props){
    return (
       <div className="Info">
         <h1>{props.data.city}</h1>
         <ul>

           <li>{props.data.description}</li>
         </ul>

         <div className="row mt-3">
           <div className="col-6">
            <img src={props.data.weatherIcon} alt="Mostly Sunny" className="weatherIcon"/>
             <span className="temperature">{Math.round(props.data.temperature)}</span>
             <span className="unit">°C</span>
           </div>
           <div className="col-6">
             <ul>
               <li>{props.data.country}</li>
               <li>{props.data.humidity}</li>
               <li>{props.data.Wind}</li>
             </ul>
           </div>
         </div>
         </div>
    )

}