<div className='ContactForm  '>
<div className='container'>
<div class="row">
    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center'>
      <div className='contactForm col-xs-12 col-sm-12  col-lg-6'>
        <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Row 1 of form */}
          <div className='row formRow '>
            <div className='col-xs-12 col-sm-12  col-lg-6 '>
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
         
              />
              {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
            </div>

            <div className='col-xs-12 col-sm-12 col-md-6 '>
              <input
                type='email'
                name='email'
                {...register('email', {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
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
            <div className='col-xs-12 col-sm-12 col-md-6 '>
              <input
                type='tel'
                name='phonenumber'
                {...register('phonenumber', {
                  required: {
                    value: true,
                    message: 'Please enter a phone number'
                  },
                  maxLength: {
                    value:10,
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
          <div className='row formRow '>
            <div className='col-xs-12 col-sm-12'>
              <textarea 
                rows={3}
                name='message'
                {...register('message', {
                  required: true
                })}
                className='form-control formInput4 '
                placeholder='Message'
                id="message"
              ></textarea>
              {errors.message && <span className='errorMessage'>Please enter a message</span>}
            </div>
     
          </div>

          <button  className='submit-btn ' disabled={disabled} type='submit' >
            Send
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  </div>
</div>
</div>