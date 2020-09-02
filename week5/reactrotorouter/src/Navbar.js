import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'


function Navbar() {
    return (
        <nav className="nav">
        <Link className="home" to="/">Home</Link>
        <Link className="about" to="/about">About</Link>
        <Link className="services" to="/services">Services</Link>
        </nav>
        )
}

export default Navbar