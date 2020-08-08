import React from 'react';
import './App.css';
import Vacation from "./Vacation";
import Vacationdata from "./Vacationdata"

function App() {
  const vacationComponents = Vacationdata.map(vacation => <Vacation key = {vacation.id} place = {vacation.place} price = {vacation.price} timeToGo = {vacation.timeToGo} />)
  return (
    <div className="App">
        {vacationComponents}
    </div>
  )
}

export default App;
