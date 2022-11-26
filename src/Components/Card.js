// import 
import React from 'react'
import Button from './Button'
import Titlee from './Tittle'

import Picture from './Picture'

//function 

const Card = (props) =>{
    return(
    <div>
        <Picture />
            <div className="card" >
                <div className="card-body">
                    <Titlee />
                    <div className="input-group mb-4"></div>
                    <h6 className="text-name text-white" >Wallet_ID</h6>
                    <div className="input-group mb-3">
                        <input type="text" class="form-control" placeholder="userID"  />
    </div>
        <h6 className="text-name text-white" >Agent's email</h6>
        <div className="input-group mb-3">
            <input type="text" class="form-control" placeholder="example@gmail.com"   />
            <span class="input-group-text text-white" id="basic-addon2">@gmail.com</span>
        </div>
        <h6 className="text-name text-white" >Amount of money</h6> 
            <div className="input-group mb-3">
        
        <input type="text" class="form-control" placeholder="Amount to be deposited" />
        <span className="input-group-text text-white">.00</span>
        </div>
        <h6 className='text-name text-white'>currency type</h6>
                <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="the currency (dollar / dinar / shekel)"/>
        <span class="input-group-text text-white">$</span>
        </div>
                    <Button />
                </div>
        </div>
</div>
    )
}
export default Card
