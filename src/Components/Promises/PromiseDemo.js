import React, { useState } from 'react'
let p=new Promise((res,rej)=>{
    let a=true
    if(a)
    {res(()=>"fullfilled");}
else{
    rej('rejected');
}
});

export default function PromiseDemo() {
  const [msg,setMsg]=useState('');
  p.then(res=>setMsg(res)).catch(rej=>setMsg(rej));
  return (
    <div>
        {msg}
        
    </div>
  )
}
// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
