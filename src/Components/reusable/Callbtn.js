import React, { useState } from 'react'
import Btn from './Btn'


export default function Callbtn() {
    const [word,setWord]=useState('');
    const disp=()=>{
        // document.getElementById('disp').innerText="Welcome";
        setWord("Welcome");
        }
  return (
    <>
    {/* <p id='disp'/> */}
    {word}
    <Btn fn={disp}/>
    
    </>
    )
}
