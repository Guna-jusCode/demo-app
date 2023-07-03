import React,{useState} from 'react';

const Count=()=>
{
    const [count,setCount]=useState(0);
return(
    <>
    {count}<br/>
    <button onClick={()=>setCount(count)}>Increase</button><br/>
    <button onClick={()=>setCount(count<=1?0:count-1)}>Decrease</button>
    </>
)
}

export default Count;