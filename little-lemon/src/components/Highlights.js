import React from 'react';
import caeserSaladImage from '../media/greeksalad.jpg'

export default function Highlights() {
  return (
    <div className='highligts layout'>
        <div className='content-row'>
            <h1>Specials</h1>
            <button
                 onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
                 onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >Online Menu</button>
        </div>
        <div className="card-container">
            <div className="card">
                <img src={caeserSaladImage} alt="" />
                <div className="card-header">
                    <h3>Greek salad</h3>
                    <p className='price'>$12.99</p>
                </div>
                <p>Dieser Salat ist unser Bestseller und wird von Groß und Klein gerne bestellt.</p>
                <p>Order a delivery</p>
            </div>
            <div className="card">
                <img src={caeserSaladImage} alt="" />
                <div className="card-header">
                    <h3>Greek salad</h3>
                    <p className='price'>$12.99</p>
                </div>
                <p>Dieser Salat ist unser Bestseller und wird von Groß und Klein gerne bestellt.</p>
                <p>Order a delivery</p>
            </div>
            <div className="card">
                <img src={caeserSaladImage} alt="" />
                <div className="card-header">
                    <h3>Greek salad</h3>
                    <p className='price'>$12.99</p>
                </div>
                <p>Dieser Salat ist unser Bestseller und wird von Groß und Klein gerne bestellt.</p>
                <p>Order a delivery</p>
            </div>
            <div className="card">
                <img src={caeserSaladImage} alt="" />
                <div className="card-header">
                    <h3>Greek salad</h3>
                    <p className='price'>$12.99</p>
                </div>
                <p>Dieser Salat ist unser Bestseller und wird von Groß und Klein gerne bestellt.</p>
                <p>Order a delivery</p>
            </div>
            <div className="card">
                <img src={caeserSaladImage} alt="" />
                <div className="card-header">
                    <h3>Greek salad</h3>
                    <p className='price'>$12.99</p>
                </div>
                <p>Dieser Salat ist unser Bestseller und wird von Groß und Klein gerne bestellt.</p>
                <p>Order a delivery</p>
            </div>
            <div className="card">
                <img src={caeserSaladImage} alt="" />
                <div className="card-header">
                    <h3>Greek salad</h3>
                    <p className='price'>$12.99</p>
                </div>
                <p>Dieser Salat ist unser Bestseller und wird von Groß und Klein gerne bestellt.</p>
                <p>Order a delivery</p>
            </div>
            <div className="card">
                <img src={caeserSaladImage} alt="" />
                <div className="card-header">
                    <h3>Greek salad</h3>
                    <p className='price'>$12.99</p>
                </div>
                <p>Dieser Salat ist unser Bestseller und wird von Groß und Klein gerne bestellt.</p>
                <p>Order a delivery</p>
            </div>
            <div className="card">
                <img src={caeserSaladImage} alt="" />
                <div className="card-header">
                    <h3>Greek salad</h3>
                    <p className='price'>$12.99</p>
                </div>
                <p>Dieser Salat ist unser Bestseller und wird von Groß und Klein gerne bestellt.</p>
                <p>Order a delivery</p>
            </div>
        </div>
    </div>
  )
}
