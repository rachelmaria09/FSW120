import React, { Component } from 'react'

class Button extends Component {
  operatorOnly = val => {
    //This reads as the number buttons have a class of "button" and operators have a class of "button operator"
    console.log(val)
    return !isNaN(val) || val === "." || val === "=" || val === "/" || val === "*" || val === "+" || val === "-"
  }
    render() {
        return (
          <button className={`button ${this.operatorOnly(this.props.children) ? "" : "operator"}`}
          onClick={() => this.props.handleClick(this.props.children)}
          >
            {this.props.children}
          </button>
        )
    }
}

export default Button