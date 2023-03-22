import React, { useState } from "react";
import ForecastDetails from "./ForecastDetails";


function Forecast(props) {

    // const dayInWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    const dayInWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    const date = new Date();
    const day = date.getDay();
    const newDayInWeek = dayInWeek.slice(day,dayInWeek.length).concat(dayInWeek.slice(0,day));



   return <div className="daily container text-center">
   {props.forecast.list.splice(0,7).map((item,idx)=>{
    return <ForecastDetails key={idx} day={newDayInWeek[idx]} img={`./icons/${item.weather[0].icon}.png`} desc={item.weather[0].description} min={item.main.temp_min} max={item.main.temp_max}/>
   })}
   </div>
}
    



export default Forecast;