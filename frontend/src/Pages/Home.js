import { Typography, Rating } from '@mui/material';
import React from 'react';
import BathroomCard from '../Components/BathroomCard';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom'
const bathrooms = [1,2,3,4,5,6,7]

export default function Home() {
    // IMPLEMENT CHECKING IF USER IS LOGIN IF NOT THEN REDIRECT
    //TO LOGIN! 
    return (
        <div className="home--container">
            <Navbar/>
            <div className="home--margin"><Link to="/create-restroom"><button className="normal--button">Rate a Bathroom</button></Link></div>
            <div className="home--margin"><Typography variant="h6" style={{marginTop:'4vh'}}>Restrooms near you!</Typography></div>
            <div className="home--flex--items">
                {bathrooms.map((restroom)=><div className="home--flex--item"><BathroomCard rating={3} distance="5m away" id="1"/></div>)}
            </div>
        </div>
    )
}
