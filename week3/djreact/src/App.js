import React from 'react';
import './App.css';
import Square from './Square'
import Header from './Header'

 class App extends React.Component {
   constructor() {
     super()
     this.state = {colors: ["white", "black", "purple", "blue"]}
   }
  render() {
  return (
    <div className="App">
        <Header />
        <Square color={this.state.colors}/>
        <div className="buttoncontainer">
          <button className="button1" onClick={() => {this.setState(prevState => {
            let newColors = []
            for(let i = 0; i < prevState.colors.length; i++) {
              let color = prevState.colors[i]
              if(prevState.colors[i] !== "white" ) {
                //color = "black"
                //newColors.push(color)
                newColors = ["purple", "purple", "purple", "purple"]
              } else if (prevState.colors[i] === "black" ) {
                color = "white"
                newColors.push(color)
              } else {newColors.push(color)}
            } console.log(newColors)
            return({
              colors: newColors
          })})}}>Click One!</button>

          <button className="button2" onClick={() => {this.setState(prevState => {
            let newColors = []
            for(let i = 0; i < prevState.colors.length; i++) {
              let color = prevState.colors[i]
              if(prevState.colors[i] === "white" ) {
                color = "black"
                newColors.push(color)
              } else if (prevState.colors[i] === "black" ) {
                color = "white"
                newColors.push(color)
              } else {newColors.push(color)}
            } console.log(newColors)
            return({
              colors: newColors
          })})}}>Click Two!</button>
          <button className="button3" onClick={() => {}}>Click</button>
          <button className="button4" onClick={() => {}}>Click</button>
          <button className="button5" onClick={() => {}}>Click</button>
          <button className="button6" onClick={() => {}}>Click</button>
          <button className="button7" onClick={() => {}}>Click</button>
          <button className="button8" onClick={() => {}}>Click</button>
        </div>
    </div>
  )
  }
}

export default App;
