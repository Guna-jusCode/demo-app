import React, { useContext } from 'react'
import { userContext,idContext } from './DParent';
export default function Child3() {
    const user=useContext(userContext);
    const id=useContext(idContext)
  return (
    <div><center>
        user Name: {user}<br/>
        user Id: {id}</center>
    </div>
  )
}
