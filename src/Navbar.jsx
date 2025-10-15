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
        <li onClick={()=>navigateTo('realtime')}>Realtime</li>
        <li onClick={()=>navigateTo('todos')}>Todo List</li>
        <li onClick={()=>navigateTo('timer')}>Timer</li>
        <li onClick={()=>navigateTo('students-list')}>Student List</li>
        <li onClick={()=>navigateTo('about')}>About</li>
        <li onClick={()=>navigateTo('contact')}>Contact Us</li>
      </ul>
    </div>
  )
}

//  Navbar