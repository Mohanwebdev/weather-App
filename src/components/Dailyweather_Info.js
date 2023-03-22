import React from "react";

function Dailyweather_Info(props){
    return <div className="col-3 info">
        <p>{props.info.name}</p>
        <div className="subinfo">  <h3>{props.info.value}</h3>
        <p>{props.info.unit}</p></div>
      

    </div>
}

export default Dailyweather_Info;