import React, { useEffect, useState } from 'react'
import Child from './Child'
import Adult from './Adult'

export default function HomePage() {
    const [status, setStatus] = useState(false)
    const handleAge = () => {
        if (document.getElementById('Age').value >= 18) {
            setStatus(true)
        }
        else {
            setStatus(false)
        }
    }
    
    return (
        <div>
            Enter Age: <input type='text' id='Age' />
            <br/><button onClick={handleAge}>Check</button>
            <br/><br/>
            <br/>{status==true?<Adult/>:<Child/>}<br/>
        </div>
    )}
