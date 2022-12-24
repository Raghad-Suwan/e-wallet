import React from 'react'
import { Link } from 'react-router-dom'
export default function Somenotson() {
  return (
    <div className='some-nots-on-paybills'>
        <h1 className="HEADofthepage">NOTES ON PAYMENT OF BILLS</h1>
        <ul>
    <li>Make sure that there is a sufficient balance in your E-wallet to complete the bill payment transaction. </li>
    <li>All transactions in the Jawwal Pay wallet are performed in Shekels (ILS)</li>
    <li>It is important to notice the difference between bills due for payment</li>
    <li>Those unpaid in order to avoid your service being disconnected.</li>
    <li>All financial transactions are done within the limits specified by the Palestine Monetary Authority.</li>
    <li>For support and assistance,visit <Link to="/contact">contact us</Link>
 </li>
  </ul>
    </div>
  )
}
