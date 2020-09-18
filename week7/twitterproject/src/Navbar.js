import React from 'react'
import {Link} from 'react-router-dom'


function Navbar() {
    return (
        <nav className="nav">
            <img className="logo" src="https://img.icons8.com/cute-clipart/64/000000/twitter.png"/>
            <Link to="/" className="homeLink">Home</Link>
            <Link to="/feed" className="feedLink">Newsfeed</Link>
            <Link to="/tweet" className="tweetLink">Tweet</Link>
        </nav>
        )
}

export default Navbar