import React from 'react'

function SuperHeroItem(props) {
    return (
        <div className = "superhero-item">
            <input type = "checkbox" />
            <p>{props.item.name}</p>
        </div>
    )
}

export default SuperHeroItem