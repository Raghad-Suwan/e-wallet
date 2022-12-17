import React from 'react';
import Button from './Button';
import Titlee from './Titlee';
import Picture from './Picture';
import './deposit.css';
//function
const Card = (props) =>{
return(
    <div>
        <Picture />
        <div className='container' >
<div className="card caaaard">
    <Titlee />
<div className="card-body">
<h6 className="text-name teext-naame" >Wallet_ID</h6>
<div className="input-group mb-3">
<input type="number" class="form-control" placeholder="userID" aria-label="userID" />
</div>
<h6 className="text-name " >Agent's email</h6>
<div className="input-group mb-3">
    <input type="text" class="form-control" placeholder="hadisawalmeh123"  aria-describedby="basic-addon2" />
    <span class="input-group-text text-white input-group-textt" id="basic-addon2">@gmail.com</span>
</div>
<h6 className="text-name " >Amount of money</h6>
<div className="input-group mb-3">
<input type="number" class="form-control" placeholder="Amount to be deposited" />
<span className="input-group-text text-white input-group-textt">.00</span> 
</div>
<h6 className='text-name '>currency type</h6>
<div className="input-group mb-3">
<select class="form-select" aria-label="Default select example">
<option value="1">dollar</option>
<option value="2">dinar</option>
<option value="3">shekel</option>
</select>
</div>
<Button />
</div>
</div>
</div>
</div>
)
}
export default Card