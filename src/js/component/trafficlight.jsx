import React, { useState } from "react";
import "../../styles/trafficlight.css"

const TrafficLight = () => {
    const [chosenColor, setChosenColor] = useState("");

    return (
      
      
      <div className="stem">    

       <div className="traffic-light-body">
            
            <div onClick={()=> {setChosenColor("red")}} className={`red ${chosenColor == "red" ? "selected":""}`}></div>
            <div onClick={()=> {setChosenColor("yellow")}}className={`yellow ${chosenColor == "yellow" ? "selected":""}`}></div>
            <div onClick={()=> {setChosenColor("green")}} className={`green ${chosenColor == "green" ? "selected":""}`}></div>
            
     </div>
     </div> 
         
    )
}


export default TrafficLight;