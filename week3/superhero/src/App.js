import React from 'react';
import './App.css';
import SuperHeroItem from "./SuperHeroItem"
import SuperHeroInfo from "./SuperHeroInfo"


function App() {
  const superheroes = SuperHeroInfo.map(item => <SuperHeroItem key = {item.id} item = {item}/>)
  return (
    <div className="superhero-list">
      {superheroes}
    </div>
  );
}

export default App;
