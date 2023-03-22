import React from "react";

function ForecastDetails(props){
    return ( <div className="forecastDetails row">
    <div className="col-3"><span>{props.day}</span></div>
    <div className="col-6 desc"><img src={props.img}/>
       {props.desc}</div>
        
        <div className="col-3"> <span>{Math.round(props.min)}°C / {Math.round(props.max)}°C</span></div>
       
    </div>)

}

export default ForecastDetails;