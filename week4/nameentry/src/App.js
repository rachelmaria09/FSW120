import React, {Component} from 'react'
import './App.css'
import shortid from 'shortid'

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
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
    this.setState(
    prevState =>  
    ({
    names: [this.state.firstName, ...prevState.names], 
    firstName: ""
    }))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          value={this.state.firstName} 
          name="firstName" 
          placeholder="First Name" 
          onChange={this.handleChange}
        />

        <br />
        <br />
        
        <button type="submit" className="btn" onClick={(e) => this.handleClick(e)}>Submit</button>
      <ul>
        <li className="listItem"><h1>{this.state.firstName}</h1></li>
        {this.state.names.map((name,index)=> (<li><h1>{name}</h1></li>))}
      </ul>
      </form>
    )
  }
}

export default App
