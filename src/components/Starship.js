import React from 'react'

function Starship({ship}) {
    return (
        <div>
            <h1>NAME: {ship.name}</h1>
            <h2>MODEL: {ship.model}</h2>
        </div>
    )
}

export default Starship
