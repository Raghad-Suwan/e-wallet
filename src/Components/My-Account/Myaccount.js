import React from 'react'
import './Myaccount.css'

 function Myaccount() {
  return (
    <div className='profile'>
    <div className='name'>
      <h6 className='stylename'>FullName</h6>
  <p className='locname'>{localStorage.getItem("firstName")} {localStorage.getItem("lastName")}</p>
      </div>
      <div className='email'>
      <h6 className='styleemail'>email</h6>
  <p className='locemail'>{localStorage.getItem("email")}</p>
      </div>
      <div className='name'>
      <h6 className='stylename'>country</h6>
  <p className='locemail'>{localStorage.getItem("country")}</p>
      </div>
      <div className='email'>
      <h6 className='styleemail'>phone</h6>
  <p className='locemail'>{localStorage.getItem("phone")}</p>
      </div>
      <div className='styleavtar'>
     <h4 className='g'> {localStorage.getItem("firstName")} {localStorage.getItem("lastName")}  </h4> </div>
   </div>
   
  );
}
export default Myaccount;