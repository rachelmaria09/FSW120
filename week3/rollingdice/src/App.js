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
    return{
      num1: numOne,
      num2: numTwo
  }})}
 render() {
   return (
     <div key={this.state.num1} className = "App">
       <h1>Rolling Dice</h1>
       <div className = "buttons">
       <DiceBox rolledDice={this.state.num1}/>
       <DiceBox rolledDice={this.state.num2}/>
       <button onClick={this.diceRoll}>Roll!</button>
     </div>
     </div>
   )
 }
}
export default App;
