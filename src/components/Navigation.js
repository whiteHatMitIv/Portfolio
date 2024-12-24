import React from 'react'
import NavigationStyled from '../styles/ComponentStyles/NavigationStyles'
import { NavLink } from 'react-router-dom'
import avatar from '../images/Me2.jpg'

function Navigation() {
  return (
    <NavigationStyled>
        <div className="avatar">
            <img src={avatar} alt="Me"/>
        </div>
        <ul className="nav-items">
            <li className="navitem">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active-class' : '')}>Home</NavLink>
            </li>
            <li className="navitem">
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-class' : '')}>About</NavLink>
            </li>
            <li className="navitem">
                <NavLink to="/resume" className={({ isActive }) => (isActive ? 'active-class' : '')}>Resume</NavLink>
            </li>
            <li className="navitem">
                <NavLink to="/portfolios" className={({ isActive }) => (isActive ? 'active-class' : '')}>Portfolios</NavLink>
            </li>
            {/* <li className="navitem">
                <NavLink to="/blogs" className={({ isActive }) => (isActive ? 'active-class' : '')}>Blogs</NavLink>
            </li> */}
            <li className="navitem">
                <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active-class' : '')}>Contact</NavLink>
            </li>
        </ul>
        <footer className="footer">
            <p>@2024 My Porfolio Website</p>
        </footer>
    </NavigationStyled>
  )
}

export default Navigation
