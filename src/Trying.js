import React from 'react';
import {  MDBCardBody, MDBCol, MDBContainer, MDBInput, MDBRow} from 'mdb-react-ui-kit';

export default function Trying() {


  return (
  
      <MDBContainer className="py-5">
        <MDBRow className="justify-content-center align-items-center">
          <MDBCol>
              <MDBRow className="g-0">
                <MDBCol md="6">
                  <MDBCardBody className="p-md-5 text-black">
                    <MDBRow>
                      <MDBCol md="6" className="mb-4">
                        <MDBInput type='text' size="lg"   placeholder='First name' 
                  
                        />

                       </MDBCol>
                     
                      <MDBCol md="6" className="mb-4">
                        <MDBInput  type='text' size="lg" placeholder='Last name' 
                       />
                      </MDBCol>
                    </MDBRow>
  
                    <MDBInput type='text' className="mb-4" size="lg" placeholder='Phone'/>
  
                    <MDBInput type='text' className="mb-4" size="lg" placeholder='Email'/>
  
                    <div class="form-group">
    <textarea className="form-control"  rows="7"  placeholder='Message' ></textarea>
  </div>
  <button type="button" className=" submit-btn"  id="btn">Send</button>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
   
  );
}
