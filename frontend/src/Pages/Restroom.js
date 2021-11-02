import React, {useState, useContext} from 'react';
import Default from '../Assets/Defaults/toilet.png'
import {Link, useHistory} from 'react-router-dom';
import { Typography, Rating } from '@mui/material';
import { UserContext } from '../UserContext';

import Navbar from '../Components/Navbar';
import CommentCard from '../Components/CommentCard'

const comments = [1,2,3,4,5]



export default function Restroom(props){
    const [loaded, setLoaded] = useState(3)
    const loadMore = () => setLoaded(loaded + 5)

    return(<div className = "restroom--container">
            <Navbar/>
            <img className = "restroom--container--img"src={Default} alt="Default bathroom picture"/>

            <Rating className = "restroom--rating" name="read-only" value={3} size = "large" readOnly/>
            <div className="restroom--tag">
                <Typography component="p">Location:&nbsp;{props.site}</Typography>
                <div>
                    <Typography component="p">Cleanliness:</Typography>
                    <Rating name="read-only" value = {props.cleanliness} readOnly size="small"/>
                </div>
                <div>
                    <Typography component="p">Ambiance:</Typography>
                    <Rating name="read-only" value = {props.ambiance} readOnly size="small"/>
                </div>
                <div>
                    <Typography component="p">Crowdedness:</Typography>
                    <Rating name="read-only" value = {props.crowdedness} readOnly size="small"/>
                </div>
                <div>
                    <Typography component="p">Lighting:</Typography>
                    <Rating name="read-only" value = {props.lighting} readOnly size="small"/>
                </div>
                <div>
                    <Typography component="p">Blowdrying</Typography>
                </div>
                <div>
                    <Typography component="p">Baby Station:&nbsp;{props.baby}</Typography>
                </div>
                <div>
                    <Typography component="p">Visits:&nbsp;{props.visits}</Typography>
                </div>    
            </div>
            {/**Comments */}
            <div className="restroom--comments">

            <Typography component="p">Comments:&nbsp;{props.visits}</Typography>
                {comments.slice(0,loaded).map((comment)=>
                <CommentCard comment={comment}/>
                )}

                {/** Show Load More Button while loaded less than # of comments*/}
                {comments.length > loaded ?
                <button className="normal--button" onClick = {loadMore}>Load More</button>
                :null}

            </div>
</div>)
}