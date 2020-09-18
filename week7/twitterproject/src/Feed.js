import React, {Component} from 'react'

class Feed extends Component {
    constructor(props){
        super()
            this.state = {array: []}
    }
    componentDidMount=() => {
        this.setState({array: this.props.array})
    }
    render() {
    return(
        <div> {this.state.array.map((Tweet, i) => {
            return(
                <div key={i} className="fakeFeed">
                <img className="feedImage" src={Tweet.imgUrl}></img>
                <h4>{Tweet.name}</h4>
                <p>{Tweet.text}</p>
                <img alt="" className="commentIcon" src="https://img.icons8.com/material/24/000000/send-comment.png"/>
                <img alt="" id={i} onClick={(e) => this.props.handleEdit(e.target.id, Tweet.likes)} src="https://img.icons8.com/material-sharp/24/000000/facebook-like.png"/>
                <span>Likes: {Tweet.likes}</span>
                <button id={i} onClick={(e) => this.props.handleDelete(e.target.id)} className="btn">delete</button>
            </div>
            )
        })}
        </div>
    )
}
}

export default Feed