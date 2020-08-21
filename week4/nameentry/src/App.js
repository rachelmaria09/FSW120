import React, {Component} from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
    }
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleClick() {
    console.log("HI")
  }

  render() {
    return (
      <form>
        <input 
          type="text" 
          value={this.state.firstName} 
          name="firstName" 
          placeholder="First Name" 
          onChange={this.handleChange}
        />

        <br />
        <br />
        
        <button onClick={this.handleClick}>Submit</button>

        <h1>{this.state.firstName}</h1>
      </form>
    )
  }
}

export default App
