import React, {useState} from 'react'
import Logo from '../Assets/Ploop.svg'
import {Link} from 'react-router-dom'
import Typography from '@mui/material/Typography'

export default function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="login--container">
            <img src={Logo} alt="Ploop-logo"/>
            <div className="input--component">
                <Typography variant="subtitle1">Username or Email</Typography>
                <input type="text"/>
            </div>
            <div className="input--component">
                <Typography variant="subtitle1">Password</Typography>
                <input type="text"/>
            </div>
            <p className="links"><Link to="#">Forgot password?</Link></p>
            <button className="normal--button">Log In</button>
            <p className="links">Don't have an account? <Link to="#">Sign up</Link></p>
        </div>
    )
}
