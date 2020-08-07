import React from 'react';
import './App.css';
import movieInfo from "./movieInfo"

function App() {
  return (
    <div className="movies">
        <movieInfo 
            title="The Lord of the Rings"
            subtitle="The Fellowship of the Ring"
            information="The first film in an epic trilogy."
        />
        <movieInfo 
            title="The Lord of the Rings"
            subtitle="The Two Towers"
            information="The second film in an epic trilogy."
        />
        <movieInfo 
            title="The Lord of the Rings"
            subtitle="The Return of the King"
            information="The third film in an epic trilogy."        
        />
        <movieInfo 
            title="The Hobbit"
            subtitle="An Unexpected Journey"
            information="The first film in an epic trilogy."        
        />
        <movieInfo 
            title="The Hobbit"
            subtitle="The Desolation of Smaug"
            information="The second film in an epic trilogy."        
        />
        <movieInfo 
             title="The Hobbit"
             subtitle="The Battle of the Five Armies"
             information="The third film in an epic trilogy."       
        />
        <movieInfo 
            title="The Pirates of the Caribbean"
            subtitle="The Curse of the Black Pearl"
            information="The first film of many featuring Johnny Depp, an eccentric pirate."        
        />
        <movieInfo 
             title="The Pirates of the Caribbean"
             subtitle="Dead Man's Chest"
             information="The second film in an epic trilogy."       
        />
        <movieInfo 
            title="The Pirates of the Caribbean"
            subtitle="At World's End"
            information="The third film in an epic trilogy."        
        />
        <movieInfo 
            title="The Pirates of the Caribbean"
            subtitle="At World's End"
            information="The fourth film in an epic trilogy."        
        />
    </div>
  )
}

export default App;
