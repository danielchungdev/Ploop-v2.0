import React from 'react'
import Default from '../Assets/Defaults/toilet.png'
import { Typography, Rating } from '@mui/material'
import { Link } from 'react-router-dom'

export default function BathroomCard(props) {
    return (
        <Link to="/login" className='bathroom--card'>
            <div className="bathroom--content">
                <img src={Default} alt="Default bathroom picture"/>
                <Typography component="legend">{props.distance}</Typography>
                <Rating name="read-only" value={props.rating} readOnly />
            </div>
        </Link>
    )
}
