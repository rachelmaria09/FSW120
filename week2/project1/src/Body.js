import React from "react"
import { render } from "react-dom"

function Body(props) {
    return (
        <div className="blog">
        <h2 className="title">{props.title}</h2>
        <h3>{props.subTitle}</h3>
        <h5 className="author">Author: {props.author}</h5>
        <h6 className="date">{props.date}</h6>
        <hr/>
        </div>
    )
}

export default Body