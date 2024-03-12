import React from 'react'
import BookingForm from './BookingForm'

export default function BookingPage(props) {
  return (
    <div className='layout'>
        <h1>Booking Page</h1>
        <BookingForm timeSlots={props.timeSlots} updateTimes={props.updateTimes}/> 
    </div>
  )
}
