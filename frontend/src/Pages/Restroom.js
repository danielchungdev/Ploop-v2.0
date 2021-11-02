import React, {useState, useContext} from 'react';
import Logo from '../Assets/Ploop.svg';
import Default from '../Assets/Defaults/toilet.png'
import {Link, useHistory} from 'react-router-dom';
import { Typography, Rating } from '@mui/material';
import { UserContext } from '../UserContext';


export default function Restroom(){
    return(<div className = "restroom--container">
                <img src={Logo} alt="Ploop-logo"/>
                <img src={Default} alt="Default bathroom picture"/>

                <Rating className = "restroom--rating" name="read-only" value={3} size = "large" readOnly/>
                <div className="restroom--tag">
                <p>Location: {}</p>
                <div>
                        <p>Cleanliness:</p>
                        <Rating name="read-only" value = {3} readOnly size="small"/>
                </div>
                <div>
                        <p>Ambiance:</p>
                        <Rating name="read-only" value = {3} readOnly size="small"/>
                </div>
                <div>
                        <p>Crowdedness:</p>
                        <Rating name="read-only" value = {3} readOnly size="small"/>
                </div>
                <div>
                        <p>Lighting:</p>
                        <Rating name="read-only" value = {3} readOnly size="small"/>
                </div>
                <div>
                        <p>Blowdrying</p>
                </div>
                <p>Baby Station: </p>
</div>

        
        </div>)
}