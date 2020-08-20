import React from 'react';
import './App.css';
import DiceBox from './DiceBox'

class App extends React.Component {
  constructor() {
    super()
  
this.state = {
    num1: 0,
    num2: 0,
    num3: 0,
    num4: 0,
    num5: 0
}
  }
diceRoll = () => {
  let numOne 
  let numTwo 
  let numThree
  let numFour
  let numFive
  this.setState(prevState => {
    numOne = (prevState.num1 * 0) + (Math.floor(Math.random()*6)+1)
    numTwo = (prevState.num2 * 0) + (Math.floor(Math.random()*6)+1)
    numThree = (prevState.num3 * 0) + (Math.floor(Math.random()*6)+1)
    numFour = (prevState.num4 * 0) + (Math.floor(Math.random()*6)+1)
    numFive = (prevState.num5 * 0) + (Math.floor(Math.random()*6)+1)
    return{
      num1: numOne,
      num2: numTwo,
      num3: numThree,
      num4: numFour,
      num5: numFive
  }})}
 render() {
   return (
     <div key={this.state.num1} className = "App">
       <h1>Rolling Dice</h1>
       <div className = "buttons">
       <DiceBox rolledDice={this.state.num1}/>
       <DiceBox rolledDice={this.state.num2}/>
       <DiceBox rolledDice={this.state.num3}/>
       <DiceBox rolledDice={this.state.num4}/>
       <DiceBox rolledDice={this.state.num5}/>
       <button onClick={this.diceRoll}>Roll!</button>
     </div>
     </div>
   )
 }
}
export default App;
