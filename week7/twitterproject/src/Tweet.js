import React, {Component} from 'react'

class Tweet extends Component {
    constructor(props) {
      super()
      this.state = {
        name: "",
        names: []
      }
      this.handleChange=this.handleChange.bind(this)
    }
  
    handleChange(event) {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })
    }
  
    handleClick = (event) => {
      event.preventDefault()
      let badgeObj = {
          name: this.state.name,
      }
      var counter = false
      for(let i=0; i<Object.values(badgeObj).length; i++) {
          if(Object.values(badgeObj)[i]<3) {
            counter = true 
          }
      }
      this.props.handleClick(badgeObj, counter)
    }

    render() {
      return (
        <form  onSubmit={this.handleSubmit}>
        <div className="grid">
          <input 
            type="text" 
            value={this.state.name} 
            name="name" 
            className="tweetInput"
            placeholder="What's Happening?" 
            onChange={this.handleChange}
          />
          
          <br />
        
          <button type="submit" className="btn" onClick={(e) => this.handleClick(e)}>Tweet</button>
        </div>
          <h1>{this.state.badgeObj}</h1>
          {this.state.names.map((badge, index) => (
            <div className="tweetContainer">
                <div className= "tweetOutput">{badge.name}</div>
            </div>))}
            </form>
      )
    }
  }

export default Tweet