import React from 'react'
import Headerpayment from './Headerpayment';
import Paymentbills from './Paymentbills';
import StepsToPayment from './StepsToPayment';
export default function Patment() {
  return (
    <div>
      <Headerpayment />
      <Paymentbills />
      <StepsToPayment/>
    </div>
  )
}
