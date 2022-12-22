import React from 'react'
import './Mentt.css';
export default function Headerpayment() {
  return (
            <div className='img-pay'>
                  <div className='ment' >
                  <h1>Bill payment is now</h1>
                    <h2>easier and more convenient </h2>
            </div>
            <img className="mobile-app" src={require("../../../images/payment.png")}  alt="mobile-respon"></img>
            </div>
  )
}

