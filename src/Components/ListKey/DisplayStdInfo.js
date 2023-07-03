import React from 'react'

export default function DisplayStdInfo() {
    //List of Objects
    const Stddata=[{id:101,Name:'Arun'},{id:102,Name:'Kumar'},{id:103,Name:'Ram'}]
  return (
    //map function displaying List of student objects (uses key attribute)
    Stddata.map((O)=><div key={O.id}>
        <h3>{O.id}</h3>
        <h2>{O.Name}</h2>
    </div>
  ))
}
