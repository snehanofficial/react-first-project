import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate();
  function navigateTo(path) {
    navigate(`/${path}`);
    console.log(path);
  }
  return (
    <div>
      <ul className='nav-options'>
        <li onClick={()=>navigateTo('home')}>Home</li>
        <li onClick={()=>navigateTo('tasks')}>Tasks</li>
        <li onClick={()=>navigateTo('about')}>About</li>
        <li onClick={()=>navigateTo('contact')}>Contact Us</li>
      </ul>
    </div>
  )
}

//  Navbar