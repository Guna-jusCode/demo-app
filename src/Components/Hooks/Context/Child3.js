import React, { useContext, useRef, useState } from 'react'
import { userContext,idContext } from './DParent';
export default function Child3() {
  const Age=useRef();
  const [name,setName]=useState('');
    const id=useContext(idContext);
    useEffect(()=>console.log('component loaded'),[name])
  return (
    <div><center>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
      <input type='text' ref={Age}/>
        user Name: {name}<br/>
        user Id: {id}</center>
        Age: {Age.current.value}
    </div>
  )
}
