import React from "react";
import './ContactForm.css';


 function ContactForm() {

    return (
<>

<div className="ContactForm">
                <div className='container'>
            
                <form>
                <div className=' row'>
                    <div className='col-xs-6  col-sm-12 col-md-12 col-lg-6'>
                      <input
                      className='form-control formInput1'
                        type='text'
                        name='name'
                        placeholder='Name'
                      ></input>
                    </div>

                    <div className='col-xs-6 col-sm-12 col-md-12 col-lg-6'>
                      <input
                      className='form-control formInput2'
                        type='email'
                        name='email'
                        placeholder='Email address'
                      ></input>
                    
                    </div>
                 
                    <div className=' column is-6  col-xs-6 col-sm-12  col-md-12 col-lg-6'>
                      <input
                      className='form-control formInput3'
                        type='tel'
                        name='phonenumber'
                        placeholder='Phone number'
                      ></input>
                    </div>
                
               
                    <div className=' column is-6 col-xs-6 col-sm-12  col-md-12 col-lg-6'>
                      <textarea 
                        className='form-control formInput4'
                        placeholder='Message'
                      ></textarea>
                    </div>
                  </div>

                  <button   className='submit-btn' type='submit' >
                    Send
                  </button>

                </form>
               
              </div>
              </div>
      </>
      
    );
  };
      


  export default ContactForm;