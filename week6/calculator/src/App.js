import React, { Component } from 'react';
import './App.css'
import Button from './Button'
import Input from './Input'


class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      result: "",
      prevNum: "",
      input: "",
      operator: ""
    }
  }

  addToInput = val => {
    this.setState({ result: "", input: this.state.input + val})
  }

  clearInput = () => {
    this.setState({ 
      result: "",
      prevNum: "",
      input: "",
      operator: ""
    })
  }

  add = () => {
    this.setState(prevState => ({
      operator: "+",
      prevNum: prevState.input,
      input: ""
    }))
  }

  subtract = () => {
    this.setState(prevState => ({
      operator: "-",
      prevNum: prevState.input,
      input: ""
    }))
  }

  multiply = () => {
    this.setState(prevState => ({
      operator: "*",
      prevNum: prevState.input,
      input: ""
    }))
  }

  divide = () => {
    this.setState(prevState => ({
      operator: "/",
      prevNum: prevState.input,
      input: ""
    }))
  }

  evaluate = () => {
    this.state.input = this.state.input

    if(this.state.operator == "+") {
      this.setState(prevState =>({
        result:
          parseInt(prevState.prevNum) 
            + 
          parseInt(prevState.input),
          input: "",
          prevNum: "",
          operator: ""
      }))
    } else if(this.state.operator == "-") {
      this.setState(prevState =>({
        result:
          parseInt(prevState.prevNum)
            -
          parseInt(prevState.input),
          input: "",
          prevNum: "",
          operator: ""
      }))
    } else if(this.state.operator == "*") {
      this.setState(prevState =>({
        result:
          parseInt(prevState.prevNum)
            *
          parseInt(prevState.input),
          input: "",
          prevNum: "",
          operator: ""
      }))
    } else if(this.state.operator == "/") {
      this.setState(prevState =>({
        result:
          parseInt(prevState.prevNum)
            /
          parseInt(prevState.input),
          input: "",
          prevNum: "",
          operator: ""
      }))
    }
  }

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Input>
              {this.state.prevNum || ""}
              {this.state.operator || ""}
              {this.state.result || this.state.input}
            </Input>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.divide}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.multiply}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.clearInput}>A/C</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.evaluate}>=</Button>
            <Button handleClick={this.subtract}>-</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
