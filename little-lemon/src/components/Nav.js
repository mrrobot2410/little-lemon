import React from 'react'
import logo from '../media/Logo.svg'
import '../styles/header.css'

export default function Nav() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'center' }}>
        <ul>
            <li>
                <img src={logo} alt="" />
            </li>
            <li>
                <a href="/" style={{ textDecoration: 'none', color: 'black' }}>Home</a>
            </li>
            <li>
                <a href="/about" style={{ textDecoration: 'none', color: 'black' }}>About</a>
            </li>
            <li>
                <a href="/menu" style={{ textDecoration: 'none', color: 'black' }}>Menu</a>
            </li>
            <li>
                <a href="/reservations" style={{ textDecoration: 'none', color: 'black' }}>Reservations</a>
            </li>
            <li>
                <a href="/orderOnline" style={{ textDecoration: 'none', color: 'black' }}>Order Online</a>
            </li>
            <li>
                <a href="/login" style={{ textDecoration: 'none', color: 'black' }}>Login</a>
            </li>
        </ul>
    </nav>
  )
}
