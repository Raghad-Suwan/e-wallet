import React from 'react'
import './Mentt.css';
export default function Headerpayment() {
  return (
            <div className='img-pay'>
                  <div className='ment' >
                    <span>Payment of Bills</span><br></br>
                    <span>Bill payment is now </span><br></br>
                    <span>easier and more convenient </span><br></br>
            </div>
            <img className="mobile-app" src={require("../../../images/payment.png")}  alt="mobile-respon"></img>
            </div>
  )
}

