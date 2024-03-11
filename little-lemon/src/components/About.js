import React from 'react'
import about1 from '../media/about1.jpg';
import about2 from '../media/about2.jpg';

export default function About() {
  return (
    <div className='layout about'>
        <div className='about-content'>
            <h1>Little Lemon</h1>
            <p>Chicago</p>
            <br />
            <p className='description'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
        </div>
        <div className='about-content'>
            <img className='img1' src={about1} alt="" />
            <img src={about2} className='img2' alt="" />
        </div>
    </div>
  )
}
