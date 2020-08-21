import React, {Component} from 'react'
import './App.css'
import Name from './Name'

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      isChecked: false
    }
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked}=event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
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

        <textarea
          value={"Some default value"}
          onChange={this.handleChange}
        />

        <br />
        
        <button>Submit</button>
        {/* <label>
          <input
            type="checkbox"
            name="isChecked"
            checked={this.state.isChecked}
            onChange={this.handleChange}
          /> Is Checked?
        </label> */}

        <h1>{this.state.firstName}</h1>
      </form>
    )
  }
}

export default App
