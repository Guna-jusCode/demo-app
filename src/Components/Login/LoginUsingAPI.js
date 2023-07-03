import React, { useRef, useState } from 'react'
import axios from 'axios';
export default function () {
    const [Uname, setUname] = useState('');
    const [resp, setResp] = useState('');
    const pwd = useRef();
    const handleSubmit = (event) => {
        // console.log(this.input);
        // alert('A name was submitted: ' + this.input.current.value);
        // axios.get('http://127.0.0.1:8080/pg').then(res=>res).catch(e=>console.log(e))
        axios.post('http://127.0.0.1:8080/', {Uname}).then(res => setResp(res.data)).catch((e) => console.log(e))
        event.preventDefault();
    }
    return (
        <div><form onSubmit={handleSubmit}>
            <center>User Name: <input type='text' onChange={(e) => setUname(e.target.value)} value={Uname} required /><br /><br />
                Password:  <input type='password' className='pwd' ref={pwd} required /><br /><br/>
                <input type='submit' value='Submit' /></center></form>
             {<h4 style={{color:'red'}}>User: {resp}</h4>}
            <br/>
            Welcome to the Programming World
        </div>
    )
}
