import React from 'react';
import './App.css';
import Body from "./Body";
import Bloglist from "./Bloglist"
import Header from "./Header"
import Footer from "./Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Bloglist />
      <Footer />
    </div>
  )
}

export default App;