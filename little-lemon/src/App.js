import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import BookingPage from './components/BookingPage.js';
import {Routes, Route} from 'react-router-dom';
import { useState, useReducer, useEffect } from 'react';
import { fetchAPI, submitAPI } from './api';
import { useNavigate } from "react-router-dom";
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {

  const navigate = useNavigate();

  const initializeTimes = (date) => {
    return fetchAPI(date);
  }

  const updateTimes = (date) => {
    const new_date= new Date(date);
    return fetchAPI(new_date)
  }

  const submitForm = (data) =>{
    const submitted = submitAPI(data);
    if (submitted){
      navigate("/confirmed")
    }
  }

  const reducer = (state, action) => {
    let state_new;
    switch (action.type) {
      case 'UPDATE_TIMES':
      const date_new = new Date(action.payload);
      state_new = updateTimes(date_new)
      console.log(state_new);
      break;

      default:
        throw new Error()
    }
    return state_new
  }

  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes(new Date()));
  

  return (
   <>
  <Header/>
  <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path="/booking" element={<BookingPage  timeSlots={availableTimes} dispatch={dispatch} updateTimes={updateTimes} submitForm={submitForm}/>}></Route>
    <Route path='/confirmed' element={<ConfirmedBooking/>}/>  
    <Route path='*' element={<div className='layout fullpage'><h1>coming soon...</h1></div>} />
  </Routes>
  <Footer/> 
  </>
  );
}

export default App;
