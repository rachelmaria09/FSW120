import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css'
import './index.css'
import Navbar from './Navbar'
import Home from './Home'
import Tweet from './Tweet'
import Feed from './Feed'
import Footer from './Footer'

class App extends Component {
  constructor(props){
    super()
        this.state = {array: [{
            name: "Jenny Wright",
            text: "Giving standup comedy a go. Open mic night starts today at 7pm at the Comedy Club. Come see me!",
            imgUrl: "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80",
            likes: 2
          }, {
          name: "Kevin Jones",
          text: "Vacation is going great!",
          imgUrl: "https://images.unsplash.com/photo-1539605480396-a61f99da1041?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
          likes: 56
        }, {
          name: "Rebecca Evans",
          text: "Almost to the weekend!",
          imgUrl: "https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          likes: 28
        }
      ]}
} 
handleClick = (tweetObj, counter) => {
  console.log(tweetObj, counter)
  if(!counter) {
  this.setState(
    prevState =>  
    ({
      array: [...prevState.array, tweetObj]
    })) 
} else {
    return alert("Please enter proper values.")
    }
}
handleEdit=(id, changes) => {
  console.log(id, changes)
  var array = this.state.array
  // const tweet = tweets.findIndex(tweet => tweet._id === id);
  // console.log(tweet)
  const updatedtweet=Object.assign(array[id], {likes: changes+1})
  console.log(array)
  this.setState(
    prevState =>  
    ({
      array: array
    })) 
}

handleDelete=(id) => {
  console.log(id)
  var array = this.state.array
  array.splice(id, 1)
  console.log(array)
  this.setState(
    prevState => { 
      // prevState.array.splice(id, 1)
    return({
      array: array
    })}) 
}

  render() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/feed">
          <Feed array={this.state.array} handleEdit={this.handleEdit} handleDelete={this.handleDelete} />
        </Route>
        <Route path="/tweet">
          <Tweet handleClick={this.handleClick} />
        </Route>
      </Switch>

      <Footer />
    </div>
  )}
}

export default App;
