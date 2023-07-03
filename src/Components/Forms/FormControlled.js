import React, { useState } from 'react'

export default function Form() {
  const [name, setName] = useState('');
  const [roll, setRoll] = useState('');
  const [Age, setAge] = useState('')

  const validation = (e) => {
    if (/^[A-Za-z]*$/.test(name) !== true) {
      alert('Enter only alphabets')
    }
    if (isNaN(roll)) {
      alert('Enter only number')
    }
    if (Age < 18) {
      alert('Age must be greater than 18')
    }
    e.preventDefault()
  }
  return (
    <div>
      <form>
        Name:<input type='text' onChange={(e) => setName(e.target.value)} value={name} />
        <br />RollNo:<input type='text' onChange={(e) => setRoll(e.target.value)} value={roll} />
        <br />Age:<input type='text' onChange={(e) => setAge(e.target.value)} value={Age} />
        <br /><button onClick={(e) => validation(e)}> Validate</button>
      </form>
    </div>
  )
}

