import React from 'react';
import restaurant from '../media/restaurant.jpg'
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className='footer-main'>
        <div className='container'>
            <div>
                <img 
                    src={restaurant}
                    alt="image restaurant"
                />
            </div>
            <div className='footer-row'>
                <ul>
                    <li>
                        <p>Navigation</p>
                    </li>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/menu">Menu</a>
                    </li>
                    <li>
                        <a href="/reservations">Reservations</a>
                    </li>
                    <li>
                        <a href="/orderOnline">Order Online</a>
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                </ul>
            </div>
            <div className='footer-row'>
                <ul>
                    <li>
                        <p>Contact</p>
                    </li>
                    <li>
                        <a href="/">Adress</a>
                    </li>
                    <li>
                        <a href="/">phone number</a>
                    </li>
                    <li>
                        <a href="/">email</a>
                    </li>
                </ul>
            </div>
            <div className='footer-row'>
                <ul>
                    <li>
                        <p>Social Media</p>
                    </li>
                    <li>
                    <a>Adress</a>
                    </li>
                    <li>
                        <a>phone number</a>
                    </li>
                    <li>
                        <a>email</a>
                    </li>
                </ul>
            </div>
      </div>
    </footer>
  )
}
