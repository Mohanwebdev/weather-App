import React, { useState } from "react";
import ForecastDetails from "./ForecastDetails";


function Forecast(props) {

    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var date = new Date();
    var day = date.getDay();
    const dayInWeek = days.splice(days[day],days.length).concat(days.splice(days[0],days[day]));

   return <div className="daily container text-center">
   {props.forecast.list.splice(0,7).map((item,idx)=>{
    return <ForecastDetails key={idx} day={dayInWeek[idx]} img={`./icons/${item.weather[0].icon}.png`} desc={item.weather[0].description} min={item.main.temp_min} max={item.main.temp_max}/>
   })}
   </div>
}
    



export default Forecast;