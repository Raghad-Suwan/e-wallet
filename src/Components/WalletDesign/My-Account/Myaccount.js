import React from 'react'
import Menue from '../Menue';
import './Myaccount.css'

function Myaccount() {
  return (
    <header>
        <Menue/>

    <div className='lg-light'>
      <div className='container'>
        <div className='row d-flex '>
          <div className='col-md-9 mt-5 pt-5 myaccF'>
            <div className='row '>
              <div className='col-sm-4 contAccont  align-items-center'>
                <div className='card-body text-center text-white align-items-center'>
                  <i className='fas fa-user tie fa-7x mt-5'></i>
                  <div className='h2 font-weight-bold mt-5'>{localStorage.getItem("firstName")}</div>
                  <p>{localStorage.getItem("firstName")} {localStorage.getItem("lastName")}</p>
                </div>
              </div>
              <div className='col-sm-8 bg-white '>
                <div className='h3 m-3 '>My account</div>
                <hr className='badge-primary mt-0 w-80'></hr>
                <div className='container align-items-center myAccount' >
                <div className='row '>
                  <div className='col-sm-6 '>
                    <p className='font-weight-bold'>First Name</p>
                </div>
                  <div className='col-sm-6 '>
                    <div className='h6 '>{localStorage.getItem("firstName")} </div>
                  </div>
                </div>
                <div className='row '>
                  <div className='col-sm-6 '>
                    <p className='font-weight-bold'>Last Name</p>
                </div>
                  <div className='col-sm-6 '>
                    <div className='h6 '>{localStorage.getItem("lastName")}</div>
                  </div>
                </div>
                <div className='row '>
                  <div className='col-sm-6 '>
                    <p className='font-weight-bold'>Email</p>
                </div>
                  <div className='col-sm-6 '>
                    <div className='h6 '>{localStorage.getItem("email")}</div>
                  </div>
                </div>
                <div className='row '>
                  <div className='col-sm-6 '>
                    <p className='font-weight-bold'>Country</p>
                </div>
                  <div className='col-sm-6 '>
                    <div className='h6 '>{localStorage.getItem("country")}</div>
                  </div>
                </div>
                <div className='row '>
                  <div className='col-sm-6 '>
                    <p className='font-weight-bold'>Phone</p>
                </div>
                  <div className='col-sm-6 '>
                    <div className='h6 '>{localStorage.getItem("phone")}</div>
                  </div>
                </div>
                </div>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </header>

  );
}
export default Myaccount;