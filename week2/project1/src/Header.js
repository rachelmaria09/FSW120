import React from 'react'
import Toolbar from "./Toolbar"


const Header = props => (
    <header className="heading">
        <Toolbar />
        <h2 className="cleanBlog">Clean Blog</h2>
        <h6>A Blog Theme by Start Bootstrap</h6>
    </header>
)
export default Header