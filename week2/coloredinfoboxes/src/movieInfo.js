import React from "react"

function Movieinfo(props) {
    return (
        <div className="Movieinfo">
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <p>{props.information}</p>
            <hr/>
        </div>
    )
}


export default Movieinfo
