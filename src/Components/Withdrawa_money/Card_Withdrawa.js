import React from "react";


const Card_withdraw = () => {
    return (
        <>
            <div>
                <div className='container' >
                    <div className="card card_withdraw">
                        <div className="topic text-center topic_withdraw">
                            <h2 className="card-title text-white card-title_withdraw">cash withdrawal slip money</h2>
                            <h5 className="card-text text-white">Enter your data in the table</h5>

                        </div>

                        <div className="card-body">

                            <h6 className="text-name text-name_withdraw" >receiver_number</h6>

                            <div className="input-group mb-4">
                                <input type="number" class="form-control" placeholder="userID" aria-label="userID" />
                            </div>
                            <h6 className="text-name text-name_withdraw" >Amount of money</h6>
                            <div className="input-group mb-4">
                                <input type="number" class="form-control" placeholder="Amount to be deposited" />
                                <span className="input-group-text text-white input-group-text_withdraw">.00</span>
                            </div>
                            <h6 className='text-name text-name_withdraw'>note (Not mandatory) </h6>
                            <div className="note input-group note_withdraw">
                                <textarea name="message" className="note note_withdraw" > </textarea>
                            </div>
                        </div>
                        <div className="btn-groub text-center text-black btn-groub_withdraw">
                            <button type="button" className="btn btn-outline-light btn_withdraw">add money</button>



                        </div>
                    </div>
                </div>

            </div>
        </>



    )




}


export default Card_withdraw