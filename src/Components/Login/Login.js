//Program to check authentication using button click
import React, { useState } from 'react'
export default function Login() {
    const [status, setStatus] = useState(false)
    const[lg,setLg]=useState('')
    const authentication = () => {
        if (document.getElementById('Uname').value == 'Arun' && document.getElementById('pwd').value == '123') {
            setStatus(true)
        }
        else {
            setLg('Login Failed')
        }
    }
    return (
        <div>
            User Name: <input type='text' id='Uname' />
            <br/>Password: <input type='password' id='pwd' />
            <br/><button onClick={authentication}>Login</button>
            <br/>{status && <Authentication/>}<br/>
            {lg}
        </div>
    )
}
export const Authentication=()=>{
    return(
        <>
        Authentication Successful
        </>
    )
}
