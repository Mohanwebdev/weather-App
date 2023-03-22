import React from "react";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";

function Forecast_daily(props){
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var date = new Date();
    var day = date.getDay();
    const dayInWeek = days.splice(days[day],days.length).concat(days.splice(days[0],days[day]));

    return <div >
    <Accordion allowZeroExpanded>
    {props.forecast.list.splice(0,7).map((item,idx)=>{
        
   
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    <div>
                        <span>{dayInWeek[idx]}</span>
                        <img src={`./icons/${item.weather[0].icon}.png`}/>
                        <span>{item.weather[0].description}</span>
                        <span>`${item.main.temp_min}°C / ${item.main.temp_max}°C`</span>
                    </div>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
            <div>
                <div>
                    <span>Feels like</span>
                    <span></span>
                </div>
                <div>
                    <span>Humidity</span>
                    <span></span>
                </div>
                <div>
                    <span>Pressure</span>
                    <span></span>
                </div>
                <div>
                    <span>Speed</span>
                    <span></span>
                </div>

            </div>

            </AccordionItemPanel>
        </AccordionItem>
    })}
    </Accordion>
       
    </div>
}

export default Forecast_daily;