import React from 'react'
import './Mentt.css';
import './Buy.css';
import PAY from './Pay';
import PayMentOfBills from './PayMentOfBills';
import Payment from './Payment.js';
import Steps from './Steps';
import StepsToPay from './StepsToPay';
import Shopping from './Shopping';


export default function MarchentBills() {
  return (
    <div>
      <PAY></PAY>
      <PayMentOfBills></PayMentOfBills>
      <Payment></Payment>
      <Steps></Steps>
      <Shopping></Shopping>
      <StepsToPay></StepsToPay>
    </div>
  )
}
