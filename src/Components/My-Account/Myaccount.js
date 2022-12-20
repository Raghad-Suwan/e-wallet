import React from 'react'
import './Myaccount.css'

 function Myaccount() {
  return (

    <div>
      <h3>MyAccount</h3>
      <table className="table table-sm">
  <thead>
    
  </thead>
  <tbody>
  <tr >
    <td colspan="2" className="table-active">name</td>
      <td>{localStorage.getItem("firstName")} {localStorage.getItem("lastName")}</td>
    </tr>
    <tr >
    <td colspan="2" className="table-active">email</td>
      <td>{localStorage.getItem("email")}</td>
    </tr>
    <tr >
    <td colspan="2" className="table-active">country</td>
      <td>{localStorage.getItem("country")}</td>
    </tr>
    <tr >
      <td colspan="2" className="table-active">phone</td>
      <td>{localStorage.getItem("phone")}</td>
    </tr>
  </tbody>
</table>

      </div>
   
  )
}
export default Myaccount;