import React from 'react'
import { Typography } from '@mui/material'



export default function CommentCard(props) {
    return (
        <div className="comment--card--container">
            <img className="comment--card--img" src = "https://img.icons8.com/ios/50/000000/full-of-shit.png" alt = "profile picture"/>
            <Typography className="comment--card--p">{props.comment}</Typography>
         </div>

    )
}
