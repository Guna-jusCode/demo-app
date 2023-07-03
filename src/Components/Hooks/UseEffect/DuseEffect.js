import React, { useEffect, useState } from "react";
//Program to create side effect using useEffect hook for accessing an public API

export default function DuseEffect() {
    const [data, setData] = useState([])
    useEffect(() => fetch('https://jsonplaceholder.typicode.com/todos').then((d) => d.json()).then((d) => setData(d)).catch(() => console.log('error')), [])
    //use map to display the first 5 elements of the array
    return (
        < div >
            {data.slice(0, 5).map((d, i) => <p key={i}>{d.title}</p>)}
        </div >
    )
}
