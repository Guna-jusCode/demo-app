import React from 'react'
import Child3 from './Child3'
import { userContext } from './DParent'

export default function Child2() {
  return (
    <div>
        {/* <userContext.Consumer>
            {user=>{return<div>{user}</div>}}
        </userContext.Consumer> */}
        <Child3/>
        </div>
  )
}
