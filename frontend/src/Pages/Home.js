import React from 'react';
import BathroomCard from '../Components/BathroomCard';
import Navbar from '../Components/Navbar';

export default function Home() {
    return (
        <div>
            <Navbar/>
            <BathroomCard rating={3} distance="5m away" id="1"/>
        </div>
    )
}
