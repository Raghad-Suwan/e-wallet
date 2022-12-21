import React from 'react';
import './Transfer.css';
const Transfer = () => {
    return (
        <div className="container" >
            <div className="card card-transfer">
                <div className="topic text-center topic-transfer">
                    <h2 className="card-title text-white card-title-transfer">cash Transfer slip money</h2>
                    <h5 className="card-text text-white">Enter your data in the table</h5>
                </div>
                <div className="cardd-body">
                    <div className="col-md-11">
                        <label className="visually-hidden" placeholder="Enter Your Username" for="autoSizingInputGroup"> Enter Your Username</label>
                        <div className="input-group">
                            <div className="input-group-text">@</div>
                            <input type="text" className="form-control" placeholder="Username"></input>
                        </div>
                    </div>

                    <div className="row g-3">
                        <div className="row g-3">

                            <div className="col-md-5">
                                <input type="text" className="form-control" placeholder="Enter Full Name" aria-label="Enter Full Name"></input>
                            </div>
                            <div className="col-md-3">
                                <input type="text" className="form-control" placeholder="A Mount" aria-label="Enter A Mount"></input>
                            </div>

                            <div className="col-md-3">

                                <select className="form-select" aria-label="Default select example">
                                    <option value="1">dollar</option>
                                    <option value="2">dinar</option>
                                    <option value="3">shekel</option>
                                </select>
                            </div>
                        </div>

                        <div className="email">
                            <div className="col-md-5">
                                <input type="email" placeholder="Enter A Email" className="form-control"></input>
                            </div>
                            <div className="row g-1.5">

                            </div></div>
                        <div className="bassw">
                            <div className="col-md-5">

                                <input type="password" placeholder="Enter Your Bassword" className="form-control" ></input>
                            </div> </div>
                        <p> Agree To Our <a href="#">Terms & Privacy</a>.</p>
                    </div>
                    <div className="btn-groub text-center text-black btn-groub_transfer">
                        <button type="button" className="btn btn-outline-light btn_transfer">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Transfer;