import { Typography } from '@mui/material';
import React from 'react';
import Navbar from '../Components/Navbar';

export default function Settings() {
    return (
        <div className="settings--container">
            <Navbar/>
            <div className="settings--banner">
                <img className="settings--img" src ="https://img.icons8.com/ios/50/000000/full-of-shit.png" alt = "profile picture"></img>
                <div className="settings--name">
                    <Typography variant="h5">Brandon Lu</Typography>
                    <Typography variant="h6">Male</Typography>
                </div>
            </div>
        <div className="signup--container">
        <div className="input--component signup--margin">
            <Typography variant="subtitle1">Email</Typography>
            <input type="text"/>
            </div>
        <div className="input--component signup--margin">
            <Typography variant="subtitle1">Password</Typography>
            <input type="text"/>
        </div>
        <div className="input--component signup--margin">
            <Typography variant="subtitle1">Comfirm Password</Typography>
            <input type="text"/>
        </div>
        </div>
        {/**Use modale? We could probably do it using materialUI right? */}
            
            

        </div>
    )
}
