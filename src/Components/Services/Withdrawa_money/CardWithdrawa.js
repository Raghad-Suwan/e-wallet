import React from "react";
import {useRef} from 'react';
const CardWithdraw = () => {
  
    const data=useRef();
    const handleSubmit = () => {
      console.log(data.current.value,"withdarw")
      localStorage.setItem("withdarw",data.current.value)
     }

    return (
        <>
            <div>
                <div className='container-fluid withdrawcontainer justify-content-center pt-5' >
                    <form>
                        <div className="card card_services ">
                            <div className="topic text-center topic_srvices">
                                <h2 className="card-title  card-title_services text-capitalize">cash withdraw slip money</h2>
                                <h5 className="card-text  card-text_services">Enter your data in the table</h5>
                            </div>
                            <div className="card-body">

                                <h6 className="text-name text-name_services" >receiver_number</h6>

                                <div className="input-group mb-4">
                                    <input type="text" className="form-control" placeholder="userID" aria-label="userID"
                                     
                                    />
                                </div>
                              
                                <h6 className="text-name text-name_services" >Amount of money</h6>
                                <div className="input-group mb-4">
                                    <input type="text" className="form-control" placeholder="Amount to be deposited"
                                      ref={data}
                                    />
                                  
                                </div>
                             
                                <h6 className='text-name text-name_services'>note (Not mandatory) </h6>
                                <div className="note input-group note_services">
                                    <textarea name="message" className="note note_services" > </textarea>
                                </div>
                            </div>
                            <div className="btn-groub text-center text-black btn-groub_services">
                                <button type="button" className="btn btn-outline-light btn_services" onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                       
                    </form>
                </div>
            </div>
        </>
    )
    }

export default CardWithdraw