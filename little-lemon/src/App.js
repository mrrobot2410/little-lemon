import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import BookingPage from './components/BookingPage.js';
import {Routes, Route} from 'react-router-dom';
import { useState, useReducer } from 'react';


function App() {

  const initialState = {
    availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
  };
  

  const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return { ...state, availableTimes: initialState.availableTimes };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const updateTimes = (selectedDate) => {
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
    return selectedDate;
  };
  

  return (
   <>
  <Header/>
  <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path="/booking" element={<BookingPage  timeSlots={state.availableTimes} updateTimes={updateTimes}/>}></Route>
  </Routes>
  <Footer/> 
  </>
  );
}

export default App;
