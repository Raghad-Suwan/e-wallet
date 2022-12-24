import React from 'react';
import './Transfer.css';
import Menue from '../../WalletDesign/Menue';
const Transfer = () => {
    return (

        <div>
            <Menue />

            <div>
                <div className='container-fluid transfercontainer justify-content-center pt-5 ' >
                    <div className="card card_Transfer ">
                        <div className="topic text-center topic_transfer">
                            <h2 className="card-title  card-title_Transfer text-capitalize text-light">cash Transfer slip money</h2>
                            <h5 className="card-text  card-text_Transfer">Enter your data in the table</h5>
                        </div>
                        <div className="card-body">

                            <h6 className="text-name text-name_Transfer" >receiver_number</h6>

                            <div className="input-group mb-4">
                                <input type="text" className="form-control" placeholder="userID" aria-label="userID" />
                            </div>
                            <h6 className="text-name text-name_transfer" >Amount of money</h6>
                            <div className="input-group mb-4">
                                <input type="text" className="form-control" placeholder="Amount to be Transfer"/>

                                <span className="input-group-text text-white input-group-text_Transfer">.00</span>
                                </div>
                                <h6 className='text-name '>currency type</h6>
                            <div className="input-group mb-3">
                                <select className="form-select" aria-label="Default select example">
                                    <option value="1">dollar</option>
                                    <option value="2">dinar</option>
                                    <option value="3">shekel</option>
                                </select>
                            </div>
                            <div className="btn-groub text-center text-black btn-groub_withdraw">
                                <button type="button" className="btn btn-outline-light btn_withdraw" >add money</button>
                            </div>

                                </div>
                            </div>  </div>  </div>  
                            
                            </div>
                            );
}


                            export default Transfer;