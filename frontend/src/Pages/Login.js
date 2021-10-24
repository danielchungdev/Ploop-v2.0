import React, {useState, useContext} from 'react'
import Logo from '../Assets/Ploop.svg'
import {Link, useHistory} from 'react-router-dom'
import Typography from '@mui/material/Typography'
import { UserContext } from '../UserContext';

export default function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {user, setUser} = useContext(UserContext);

    const login = (e) => {
        e.preventDefault();
        alert("login has been clicked");
    }

    return (
        <div className="login--container">
            <img src={Logo} alt="Ploop-logo"/>
            <div className="input--component">
                <Typography variant="subtitle1">Username or Email</Typography>
                <input type="text" onChange={e=>setUsername(e.target.value)}/>
            </div>
            <div className="input--component">
                <Typography variant="subtitle1">Password</Typography>
                <input type="password" onChange={e=>setPassword(e.target.value)}/>
            </div>
            <p className="links"><Link to="#">Forgot password?</Link></p>
            <button className="normal--button" onClick={login}>Log In</button>
            <p className="links">Don't have an account? <Link to="#">Sign up</Link></p>
        </div>
    )
}
