import React, {Component} from 'react'

class Inputs extends Component {
    constructor(props) {
      super(props)
      this.state = {
        firstName: "",
        lastName: "",
        email: "",
        placeOfBirth: "",
        phone: "",
        favoriteFood: "",
        general: "",
        names: []
      }
      this.inputUpdated = this.inputUpdated.bind(this)
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

    inputUpdated(e) {
        const { value } = e.target;
        this.setState({firstName: value})
    }
  
    render() {
      return (
        <form className="grid" onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            value={this.state.firstName} 
            name="firstName" 
            className="firstName"
            placeholder="First Name" 
            onChange={this.handleChange}
            onInput={this.inputUpdated}
          />
          <input
            type="text"
            value={this.state.lastName}
            name="lastName"
            className="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
            onInput={this.inputUpdated}

          />
          <input
            type="text"
            value={this.state.email}
            name="email"
            className="email"
            placeholder="Email"
            onChange={this.handleChange}
            onInput={this.inputUpdated}
          />
          <input
            type="text"
            value={this.state.placeOfBirth}
            name="placeOfBirth"
            className="placeOfBirth"
            placeholder="Place of Birth"
            onChange={this.handleChange}
            onInput={this.inputUpdated}
          />
          <input
            type="text"
            value={this.state.phone}
            name="phone"
            className="phone"
            placeholder="Phone"
            onChange={this.handleChange}
            onInput={this.inputUpdated}
          />
          <input
            type="text"
            value={this.state.favoriteFood}
            name="favoriteFood"
            className="favoriteFood"
            placeholder="Favorite Food"
            onChange={this.handleChange}
            onInput={this.inputUpdated}
          />
          <input
            type="text"
            value={this.state.general}
            name="general"
            className="general"
            placeholder="Tell us about yourself!"
            onChange={this.handleChange}
            onInput={this.inputUpdated}
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

export default Inputs