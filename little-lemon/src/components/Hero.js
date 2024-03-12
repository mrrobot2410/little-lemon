import React from 'react';
import foodImage from '../media/restauranfood.jpg';

export default function Hero() {
  return (
    <div className='hero layout'>
        <div className='container'>
                <h1>Little Lemon</h1>
                <p className='subtitle'>Chicago</p>
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                <button
                    onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
                    onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                    >
                    Reserve a Table
                </button>
        </div>
        <div className='container'>
        <img
            src={foodImage}
            alt="food image"
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-10px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          />
        </div>
      </div>
  )
}
