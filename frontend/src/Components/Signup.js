import React, {useState} from 'react'
import { Radio, RadioGroup, Typography, FormLabel, FormControlLabel } from '@mui/material'
import { useHistory } from 'react-router-dom'

export default function Signup() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("0")
    const [passwordError, setPasswordError] = useState(false)
    const [alreadyExistError, setAlreadyExistError] = useState(false)

    const resetErrors = () => {
        setPasswordError(false)
        setAlreadyExistError(false)
    }

    const createAccount = (e) => {
        //TODO: Check for empty spaces and raise an error before submission.
        // Create useState, check and then create an error message.
        e.preventDefault()
        resetErrors()
        const valid = verifyPassword()
        if (valid === false){
            e.preventDefault();
            fetch('http://localhost:4000/signup', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                    email,
                    gender
                })
            })
            .then((res)=> {
                if (res.status === 200){
                    history.push("/login")
                }
                if (res.status === 409){
                    setAlreadyExistError(true)
                }
            })
            .catch((error)=> {
                console.log(error)
            })
        }
    }

    const chooseGender = (e) => {
        setGender(e.target.value)
    }

    const verifyPassword = () => {
        if (password !== confirmPassword){
            setPasswordError(true)
            return true
        }
        else {
            return false
        }
    }

    const history = useHistory()

    return (
        <div className="signup--container">
            <div className="signup--title">
                <Typography variant='h2'>Create an Account</Typography>
            </div>
            <div className="input--component signup--margin">
                <Typography variant="subtitle1">Username</Typography>
                <input type="text" onChange={e=>setUsername(e.target.value)}/>
            </div>
            <div className="input--component signup--margin">
                {passwordError ? <p className="error">passwords don't match!</p> : null}
                <Typography variant="subtitle1">Password</Typography>
                <input type="password" onChange={e=>setPassword(e.target.value)}/>
            </div>
            <div className="input--component signup--margin">
                <Typography variant="subtitle1">Confirm Password</Typography>
                <input type="password" onChange={e=>setConfirmPassword(e.target.value)}/>
            </div>
            <div className="input--component signup--margin">
                <Typography variant="subtitle1">Email</Typography>
                <input type="text" onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div className="signup--margin">
                <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-label="gender"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                    <FormControlLabel onChange={chooseGender} value="0" control={<Radio />} label="Female" />
                    <FormControlLabel onChange={chooseGender} value="1" control={<Radio />} label="Male" />
                    <FormControlLabel onChange={chooseGender} value="2" control={<Radio />} label="Other" />
                </RadioGroup>
            </div>
            {alreadyExistError ? <p className="error">Username already exists!</p> : null}
            <div className="signup--margin">
                <button className="normal--button" onClick={createAccount}>Create Account</button>
            </div>
        </div>
    )
}
