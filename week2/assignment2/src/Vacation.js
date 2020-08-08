import React from "react"

function Vacation(props) {
    return (
        <div style={{backgroundColor: props.timeToGo === "Winter" ? "lightblue" : props.timeToGo === "Fall" ? "orange" : props.timeToGo === "Spring" ? "pink" : props.timeToGo === "Summer" ? "yellow" : "none"}}>
        <h3>{props.place}</h3>
        <h4>Price: {props.price}</h4>
        <h4>Best time to visit: {props.timeToGo}</h4>
        <hr/>
        </div>
    )
}

export default Vacation