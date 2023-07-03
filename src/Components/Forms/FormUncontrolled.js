import React, { useRef } from 'react'

export default function FormUncontrolled() {
    const name=useRef();
    const Roll=useRef();
    const Age=useRef();
    const validation = (e) => {
        
        if (/^[A-Za-z]*$/.test(name.current.value) !== true) {
          alert('Enter only alphabets')
        }
        if (isNaN(Roll.current.value)) {
          alert('Enter only number')
        }
        if (Age.current.value < 18) {
          alert('Age must be greater than 18')
        }
        e.preventDefault()
      }
    return (
        <div>
            <form onSubmit={validation}>
                Name:<input type='text' ref={name} />
                <br />RollNo:<input type='text' ref={Roll} />
                <br />Age:<input type='text' ref={Age} />
                <br /><input type='submit'/>
            </form>

        </div>
    )
}
