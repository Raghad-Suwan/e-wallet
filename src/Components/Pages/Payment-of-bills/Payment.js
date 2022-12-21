import React from 'react'
import Headerpayment from './Headerpayment';
import Paymentbills from './Paymentbills';
import StepsToPayment from './StepsToPayment';
import Navbar from '../../Navbar/Navbar';
export default function Payment() {
  return (
    <header>
      <Navbar />
      <div>
        <Headerpayment />
        <Paymentbills />
        <StepsToPayment />
      </div>
    </header>
  )
}
