import React from 'react';
import BathroomCard from '../Components/BathroomCard';
import Navbar from '../Components/Navbar';

export default function Home() {
    // IMPLEMENT CHECKING IF USER IS LOGIN IF NOT THEN REDIRECT
    //TO LOGIN! 
    return (
        <div>
            <Navbar/>
            <BathroomCard rating={3} distance="5m away"/>
        </div>
    )
}
