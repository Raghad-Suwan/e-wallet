import React from 'react'
import  './PayMentOfBills.css';
export default function StepsToPay() {
  return (
    <div className='descrip'>
       <h1 style={{color:"orange"}}>STEPS TO PAY BILLS:</h1>
 <ul>
    <li>Select “Pay Bills” from the main menu of your e-wallet.</li>
    <li>Select the category, for example: Telecomes</li>
    <li>From the category you selected, search for the company / service whose bill you wish to pay.</li>
    <li>After selecting the company / service, enter the reference number of the bill you wish to pay.</li>
    <li>You can save the company service you selected and whose reference number you entered to use it later. </li>
    <li>From the bills’ list of each company, choose the unpaid bill. </li>
    <li>Select “Pay Bill”. </li>
    <li>After the bill details are displayed, and in order to confirm payment, press “Confirm Transaction”. </li>
    <li>You will receive a confirmation of the transaction success and an image of the receipt. </li>
 </ul>
    </div>
  )
}

  