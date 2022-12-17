import React from 'react'
import Hedermarchent from './Hedermarchent'
import Payingmarchent from './Payingmarchent'
import Stepstopayingmarchent from './Stepstopayingmarchent'
import './Marchent.css';
import Navbar from '../../Navbar/Navbar';
export default function Marchent() {
  return (
    <header>
        <Navbar />

    <div>
      <Hedermarchent />
      <Payingmarchent />
      <Stepstopayingmarchent />
      
    </div>
    </header>

  )
}
