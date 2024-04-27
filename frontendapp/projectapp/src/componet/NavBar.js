import React from 'react'
import { NavLink} from 'react-router-dom'
import "./NavBar.css"

export default function NavBar() {
    
  return (
    <div>
        <nav className='primary-nav'>
            <NavLink to="/">Home</NavLink>&nbsp;&nbsp;
            
            <NavLink to="/courses" >Courses</NavLink>&nbsp;&nbsp;
            <NavLink to="/student" >Student</NavLink>&nbsp;&nbsp;
            <NavLink to="/faculty" >Faculty</NavLink>&nbsp;&nbsp;
        </nav>
        
    </div>
  )
}