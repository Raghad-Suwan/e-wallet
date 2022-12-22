import React from 'react'
import './Mentt.css';
export default function Headerpayment() {
  return (
            <div className='img-pay'>
                  <div className='ment' >
                    <span>Payment of Bills <br></br>
                    Bill payment is now <br></br>
                    easier and more convenient </span><br></br>
            </div>
            <img className="mobile-app" src={require("../../../images/payment.png")}  alt="mobile-respon"></img>
            </div>
  )
}

