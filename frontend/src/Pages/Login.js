import React, {useState, useContext} from 'react'
import Logo from '../Assets/Ploop.svg'
import {Link, useHistory} from 'react-router-dom'
import Typography from '@mui/material/Typography'
import { UserContext } from '../UserContext';

export default function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [emptyFieldsError, setEmptyFieldsError] = useState(false)
    const {user, setUser} = useContext(UserContext);

    const checkEmptyFields= () => {
        if (username === "" || password === ""){
            setEmptyFieldsError(true);
        }
    }

    const login = (e) => {
        //TODO security check for empty fields
        checkEmptyFields()
        if (emptyFieldsError === false){
            e.preventDefault();
            fetch('http://localhost:4000/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password
                })
            })
            .then((res)=> {
                setUser(username)
                history.push("/")
            })
            .catch((error)=> {
                console.log(error)
            })
        }
    }

    const history = useHistory()

    return (
        <div className="login--container">
            <img src={Logo} alt="Ploop-logo"/>
            <div className="input--component">
                <Typography variant="subtitle1">Username</Typography>
                <input type="text" onChange={e=>setUsername(e.target.value)}/>
            </div>
            <div className="input--component">
                <Typography variant="subtitle1">Password</Typography>
                <input type="password" onChange={e=>setPassword(e.target.value)}/>
            </div>
            <p className="links"><Link to="#">Forgot password?</Link></p>
            {emptyFieldsError ? <p className="error">There are empty fields!</p>: null}
            <button className="normal--button" onClick={login}>Log In</button>
            <p className="links">Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
    )
}
