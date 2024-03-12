import React, { useState } from 'react';

export default function BookingForm(props) {

  const [data, setData] = useState({
    date: '',
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
    const {name, value} = e.target;
    setData({
      ...data,
      [name]: value
    });
    props.dispatch({type: 'UPDATE_TIMES', payload: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    props.submitForm(data)
    setData({
      date: '',
      time: '',
      guests: '',
      occasion: '',
    });
  };


  return (
    <>
      <h2>Book now</h2>
      <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={data.date} onChange={handleDateChange} name='date'/>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={data.time} onChange={handleInputChange} name='time'>
          {props.timeSlots.map(time =>(
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={data.guests} onChange={handleInputChange} name='guests'/>
        <label htmlFor="occasion" >Occasion</label>
        <select id="occasion" value={data.occasion} onChange={handleInputChange} name='occasion'>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
}
