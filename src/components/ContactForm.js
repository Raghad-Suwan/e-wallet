import React from "react";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.min.css';
import './ContactForm.css';


 function ContactForm() {

  const {
    register, handleSubmit, reset, formState: { errors }
  } = useForm();
  const [disabled, setDisabled] = useState(false);

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, phonenumber, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name,
        email,
        phonenumber,
        message
      };

      // Use emailjs to email contact form data
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );

      // Reset contact form fields after submission
      reset();
      // Display success toast
      toastifySuccess();
      // Re-enable form submission
      setDisabled(false);
    } catch (e) {
      console.log(e);
    }
  };

    return (

      <div className=' ContactForm'>
        <div className='container'>
          <div className='row'>
            <div className=' col-6 text-center'>

              <div className='contactForm'>
                <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                  {/* Row 1 of form */}
                  <div className='row formRow'>
                    <div className=' col-xs-6 col-sm-6 col-lg-6 '>
                      <input
                        type='text'
                        name='name'
                        {...register('name', {
                          required: {
                            value: true,
                            message: 'Please enter your name'
                          },
                          maxLength: {
                            value: 30,
                            message: 'Please use 30 characters or less'
                          }
                        })}
                        className='form-control formInput1'
                        placeholder='Name'
                      ></input>
                      {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                    </div>
                    <div className='col-xs-6 col-sm-6 col-lg-6'>
                      <input
                        type='email'
                        name='email'
                        {...register('email', {
                          required: true,
                          pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                        })}
                        className='form-control formInput2'
                        placeholder='Email address'
                      ></input>
                      {errors.email && (
                        <span className='errorMessage'>Please enter a valid email address</span>
                      )}
                    </div>
                  </div>
                  {/* Row 2 of form */}
                  <div className='row formRow'>
                    <div className='col-xs-6 col-sm-6  col-lg-6'>
                      <input
                        type='tel'
                        name='phonenumber'
                        {...register('phonenumber', {
                          required: {
                            value: true,
                            message: 'Please enter a phone number'
                          },
                          maxLength: {
                            value: 10,
                            message: 'phone number cannot be more 10 digit'
                          }
                        })}
                        className='form-control formInput3'
                        placeholder='Phone number'
                      ></input>
                      {errors.phonenumber && (
                        <span className='errorMessage'>Please enter a phone number</span>
                      )}
                    </div>
                  </div>
                  {/* Row 3 of form */}
                  <div className=' row formRow'>
                    <div className='col-xs-12 col-sm-12 col-lg-12'>
                      <textarea
                        name='message'
                        {...register('message', {
                          required: true
                        })}
                        className='form-control formInput4'
                        placeholder='Message'
                      ></textarea>
                      {errors.message && <span className='errorMessage'>Please enter a message</span>}
                    </div>

                  </div>

                  <button  className='submit-btn' disabled={disabled} type='submit'>
                    Send
                  </button>
                </form>
              </div>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
  
 
    );      
  };

  export default ContactForm;