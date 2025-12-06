import React from 'react'

const Dice = ({ value, isHeld, handlediceClick }) => {
    return (
        <div className={`dice ${isHeld ? 'held' : ''}`} onClick={handlediceClick}>
            {value}
        </div>
    )
}

export default Dice