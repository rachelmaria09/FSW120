import React from 'react'

function Name(props) {
    return (
        <div className="names">
            <button 
                type="button"
                clicked={props.item.completed}
                onChange={() => props.handleChange(props.item.isChecked)}
            />
        </div>
    )
}

export default Name