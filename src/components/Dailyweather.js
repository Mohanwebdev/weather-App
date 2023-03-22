import React, { useState } from "react";
import Dailyweather_Info from "./Dailyweather_Info";



function Dailyweather(props) {
    // console.log(props.currentWeather);

    const { main: { feels_like, humidity, pressure, temp }, timezone, weather: [{ description, icon }], wind: { speed } } = props.currentWeather
    const details = [{
        key: 1,
        name: "Feels like",
        value: Math.round(feels_like),
        unit:"°C"
    },
    {
        key: 2,
        name: "Humidity",
        value: humidity,
        unit:"%"
    },
    {
        key: 3,
        name: "Pressure",
        value: pressure,
        unit:"hPa"
    }, {
        key: 4,
        name: "Speed",
        value: speed,
        unit:"m/s N"
    }]

    return <div className="container text-center  weather ">
        <div className="row top">
            <div className="col top-left">
                <h1>{props.cityName}</h1>
                <span>{props.currDay}</span>
            </div>
            <div className="col  top-right">
            <h1>{Math.round(temp)}°C</h1>
                <p>{description}</p>
                
            </div>
            </div>
            <div className=" row middle">
            <div><img className="img" src={`./icons/${icon}.png`} /></div>
            
            </div>
            <div className=" row bottom">

                {details.map((detail) => {
                   return <Dailyweather_Info info={detail} />
                })}


            </div>
        

    </div>


}

export default Dailyweather;