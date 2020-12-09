import React from 'react'

import {Link} from 'react-router-dom'

import '../Home.css'

function Starship({ship}) {
    return (
        <div className='container'>
            <div className='bigShipCard'>
                <h1>NAME: {ship.name}</h1>
                <h2>MODEL: {ship.model}</h2>
                <Link to='/'>RETURN</Link>
            </div>
        </div>
    )
}

export default Starship
