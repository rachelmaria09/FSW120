import React from 'react'

function SuperHeroItem(props) {
    return (
        <div className = "superhero-item">
            <p onClick={() => alert(props.item.catchPhrase)}>{props.item.name}</p>
            <img onClick={() => alert(props.item.catchPhrase)} className = "image"
            src={props.item.imageName}
            />
        </div>
    )
}

export default SuperHeroItem