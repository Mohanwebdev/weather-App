import React from "react";
import { useState } from "react";
import Dailyweather from "./Dailyweather";

import Search from "./Search";
import { weatherApiKey,weatherUrl } from "./Api";
import Forecast from "./Forecast";


function App() {
    const [currentWeather,setCurrentWeather] = useState(null);
    const [forecast,setForecast] = useState(null);
    const [units,setUnits] = useState('metric');
    const [cityName,setCityName] = useState(null);

    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const d = new Date();
const mon =  monthNames[d.getMonth()];
let day = d.getDate()
const currDay = mon+", "+day;


    const onSearchChange = (searchData) => {
    setCityName((searchData.label));
    const [lat,lon] =  searchData.value.split(" ");
    
     fetch(`${weatherUrl}/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${weatherApiKey}`)
            .then(currentWeather => currentWeather.json())
            .then(currentWeather => setCurrentWeather(currentWeather))

            .catch((e)=>console.log(e))

    fetch(`${weatherUrl}/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${weatherApiKey}`)
        .then(forecast => forecast.json())
        .then(forecast => setForecast(forecast))

        .catch((e)=>console.log(e))

    }

    return <div>
        <Search onSearch={onSearchChange} />
        {currentWeather && <Dailyweather key={currDay} currDay={currDay} cityName={cityName} currentWeather={currentWeather} /> }
        {forecast && <Forecast forecast={forecast}/>}
    </div>



}

export default App;