import React from 'react'
import Toilet from '../Assets/Defaults/toilet.png'
import { Link } from 'react-router-dom'

export default function Notfound() {
    return (
        <div>
            <div className="notfound--container">
                <h1>404</h1>
                <img src={Toilet} alt="Fiendly-image"/>
                <p>Looks like the bathroom you've tried to go to is not available! <Link to="/">Try this one!</Link></p>
            </div>
        </div>
    )
}
