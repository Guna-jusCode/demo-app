import React from 'react'
import {BrowserRouter, Routes,Route, Link} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './Nav.css'
export default function Nav() {
    return (
        <BrowserRouter>
            <div className='a'>
                <Link to='/'>Home</Link>{'   '}
                <Link to='/About'>About</Link> {'   '}
                <Link to='/Contact'>Contact</Link>
            </div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Contact' element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}
