import React from 'react'
import Blogdata from './Blogdata'
import Body from './Body'

function Bloglist() {
    const blogComponents = Blogdata.map(body => <Body key = {body.id} title = {body.title} subTitle = {body.subTitle} author = {body.author} date = {body.date} />)
    return (
        <div className="blogList">
            {blogComponents}
            <button className="button">OLDER POSTS</button>
        </div>
      )
    }

export default Bloglist