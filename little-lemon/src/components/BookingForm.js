import React, { useState } from 'react';

export default function BookingForm(props) {
  const today = new Date().toISOString().split('T')[0]; 

  const [data, setData] = useState({
    date: today, 
    time: '',
    guests: '',
    occasion: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    const selectedDate = new Date(value);
    const currentDate = new Date();

    if (selectedDate < currentDate) {
      alert('Date cannot be in the past');
      return;
    }

    setData({
      ...data,
      [name]: value
    });
    props.dispatch({ type: 'UPDATE_TIMES', payload: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    props.submitForm(data)
    setData({
      date: today, 
      time: '',
      guests: '',
      occasion: '',
    });
  };

  return (
    <>
      <h2>Book now</h2>
      <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
        <label htmlFor="res-date" aria-label="Choose date">Choose date</label>
        <input type="date" id="res-date" value={data.date} onChange={handleDateChange} name='date' min={today} /> 
        <label htmlFor="res-time" aria-label="Choose time">Choose time</label>
        <select id="res-time" value={data.time} onChange={handleInputChange} name='time' aria-label="Choose time">
          <option value="" disabled selected>Select your time</option>
          {props.timeSlots.map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
        <label htmlFor="guests" aria-label="Number of guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={data.guests} onChange={handleInputChange} name='guests' aria-label="Number of guests" />
        <label htmlFor="occasion" aria-label="Occasion">Occasion</label>
        <select id="occasion" value={data.occasion} onChange={handleInputChange} name='occasion' aria-label="Occasion">
          <option value="" disabled selected>Select your occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" disabled={data.occasion === "" || data.time === "" || data.date === ""} aria-label="Submit reservation" />
      </form>
    </>
  );
  
}
