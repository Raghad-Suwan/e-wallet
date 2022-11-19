import React from "react";
import {Container , Row , Col} from "react-bootstrap";
import  './Contactus.css';

const Contactus = () => {
    return (

<Container>
<Row className="mb-5 mt-3">
<Col lg='8'>

<div className="Titel">
<h1 className="dispaly-4 mb-4">
Contact us
</h1>

</div>
</Col>
</Row>

<div className="content1">
<h3 className="color_sec py-4">
Get in touch
</h3>
</div>

<Row className="sec_sp">
<Col  lg='5' className="mb-4">
    
    <div className="content2">
    <address>

        <strong>
            Name:Your name!
        </strong> <br/> <br/>
    <strong>
        Email: Yourname@gmail.com
    </strong> 
    <br/>
    <br/>

<strong>
    Phone number:+972
</strong>

</address>
    </div>


<Col lg='7' className="d-flex align-items-center">
<form className="contact__form w-100">
<Row>
<Col lg='6' className="form-group">
<input
className="form-control"
id="name"
name="name"
placeholder=" Your name"
type="text"
/>
</Col>

<Col lg='6' className="form-group">
<input
className="form-control"
id="email"
name="email"
placeholder=" Your email"
type="text"
/>
</Col>

<Col lg='6' className="form-group">
<input
className="form-control"
id="phone"
name="phone"
placeholder=" Your phone number"
type="tel"
/>
</Col>

<textarea className="form-control rounded-0"
id="massege"
name="massege"
placeholder=" Your massege"
rows='5'

/>
<Row>
<Col lg='12' className="form-group">
<button className="btn ac_btn" type="submit">
Send
</button>

</Col>

</Row>

</Row>

</form>

</Col>

</Col>

</Row>


</Container>

    );


}

  
export default Contactus;



