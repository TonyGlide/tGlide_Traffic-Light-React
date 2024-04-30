import react from "react";
import "../../styles/trafficlight.css"

const trafficLight = () => {
return (
    <>
    <div className="stem"></div>
    <div className="traffic-light-body">
       <div className="red"></div>
       <div className="yellow"></div> 
       <div className="green"></div> 
    </div> 
    </>
)
}

export default trafficLight;