import React from "react";


const Card_electricity=()=>{
        return(
        <>
            
            <div className='container' >
        <div className="card card_electricity">
        <div className="topic text-center topic_electricity">
                <h2 className="card-title text-white card-title_electricity">Charge the electricity card</h2>
                <h5 className="card-text text-white">Enter your data in the table</h5>

                </div>

        <div className="card-body">
        <h6 className="text-name text-name_electricity" >electricity_number</h6>
        <div className="input-group mb-4">
        <input type="number" class="form-control" placeholder="userID" aria-label="userID" />
        </div>
    
        <h6 className="text-name text-name_electricity" >The amount to be shipped</h6> 
        <div className="input-group mb-4">
        <input type="number" className="form-control" placeholder="Amount to be deposited" />
        <span className="input-group-text text-white input-group-text_electricity">.00</span> 
        </div>
        <h6 className='text-name text-name_electricity'>note (Not mandatory) </h6>
        <div className="note input-group note_electricity">
        <textarea name="message" className="note note_electricity" > </textarea>
        </div>
        </div>
        <div className="btn-groub text-center text-black btn-groub_electricity">
                <button type="button" className="btn btn-outline-light btn_electricity" >add money</button>
                
            </div>
        </div>
        </div>

        </>
        )
        }


        export default Card_electricity