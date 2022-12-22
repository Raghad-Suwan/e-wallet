import React from 'react';
import './ContactForm.css';

const Image = () => {
  return (
    <>
      <header >
        <div className='p-5 hero-text bg-image header-img img-fluid img-responsive'>
          <div className='container-contactus'>
            <div className="row ">
              <div className='text-parent'>
                <h2 className="h2-header mt-3">
                  Contact us
                </h2>
                <p className='send-msg'>
                  Send your message and feedback to Jawwal Pay support
                  and we will contact you as soon as possible!
                </p>
              </div>
            </div>

          </div>
        </div>
      </header>

      <div>
        <h3 className="h3-header mt-5">Send a note</h3>
      </div>

    </>
  );
};

export default Image;
