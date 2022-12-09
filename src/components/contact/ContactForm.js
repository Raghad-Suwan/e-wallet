import React from "react";
import './ContactForm.css';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from "./HeaderContact";




 function ContactForm() {

  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  const notify = () => toast("Thank you for getting in touch! We appreciate you contacting us, we will get back in touch with you soon! Have a great day!" ,{position:'bottom-center'});


 function ContactForm() {

    return (
<>
<Image/>
                <div className='container malak'>
                <form onSubmit={handleSubmit(onSubmit)} >
                <div className='row'>

                    <div className=' col-xs col-sm-12 col-md-12 col-lg-6'>
                      <input
                      className='form-control formInput1'
                        type='text'
                        name='name'
                        placeholder='Name'
                        {...register("singleErrorInput1", { required: "Please,fill valid name"})}
                      ></input>
                      <div className="errorMsg">
                       <ErrorMessage errors={errors} name="singleErrorInput1"/>
                    </div>
                    </div>

                    <div className='col-xs col-sm-12 col-md-12 col-lg-6'>
                      <input
                      className='form-control formInput2'
                        type='email'
                        name='email'
                        placeholder='Email address'
                        {...register("singleErrorInput2", { required: "Please,fill valid email"})}
                      ></input> 
                      <div className="errorMsg">
                    <ErrorMessage errors={errors} name="singleErrorInput2"/>
                    </div>
                    </div>

                    <div className='col-xs col-sm-12 col-md-12 col-lg-6'>
                      <input
                      className='form-control formInput3'
                        type='tel'
                        name='phonenumber'
                        placeholder='Phone number'
                        {...register("singleErrorInput3", { required: "Please,fill valid phone number"})}
                      ></input>
                      <div className="errorMsg">
                       <ErrorMessage errors={errors} name="singleErrorInput3"/>
                    </div>
                    </div>
               
                    <div className='col-xs col-sm-12 col-md-12 col-lg-6'>
                      <textarea 
                        className='form-control formInput4'
                        placeholder='Message'
                        {...register("singleErrorInput4", { required: "Please,fill valid massege"})}
                      ></textarea>
                      <div className="errorMsg">
                      <ErrorMessage errors={errors} name="singleErrorInput4"/>
                    </div>
                  </div>
                  </div>

                  <button className='submit-btn' type='submit' onClick={handleSubmit(notify)} >
                    Send
                  </button>
                  <ToastContainer />
                </form>
              </div>
      </>
    );
  };
      
  export default ContactForm;