import React from 'react'
import logo from '../media/Logo.svg'
import '../styles/header.css'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'center' }}>
        <ul>
            <li>
                <Link className='nav-item' to="/"><img src={logo} alt="" /></Link>
            </li>
            <li>
                <Link className='nav-item' to="/">Home</Link>
            </li>
            <li>
                <Link className='nav-item' to="/about">About</Link>
            </li>
            <li>
                <Link className='nav-item' to="/menu">Menu</Link>
            </li>
            <li>
                <Link className='nav-item' to="/booking">Reservations</Link>
            </li>
            <li>
                <Link className='nav-item' to="/orderOnline">Order Online</Link>
            </li>
            <li>
                <Link className='nav-item' to="/login">Login</Link>
            </li>
        </ul>
    </nav>
  )
}
