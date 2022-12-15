import React from "react";


const Card_electricity=()=>{
        return(
        <>
            
            <div className='container' >
        <div className="card">
        <div className="topic text-center">
                <h2 className="card-title text-white">Charge the electricity card</h2>
                <h5 className="card-text text-white">Enter your data in the table</h5>

                </div>

        <div className="card-body">
        <h6 className="text-name " >electricity_number</h6>
        <div className="input-group mb-4">
        <input type="number" class="form-control" placeholder="userID" aria-label="userID" />
        </div>
    
        <h6 className="text-name " >The amount to be shipped</h6> 
        <div className="input-group mb-4">
        <input type="number" className="form-control" placeholder="Amount to be deposited" />
        <span className="input-group-text text-white">.00</span> 
        </div>
        <h6 className='text-name'>note (Not mandatory) </h6>
        <div className="note input-group">
        <textarea name="message" className="note" > </textarea>
        </div>
        </div>
        <div className="btn-groub text-center text-black">
                <button type="button" className="btn btn-outline-light " >add money</button>
                
            </div>
        </div>
        </div>

        </>
        )
        }


        export default Card_electricity