import React from 'react'
import Titlee from './Titlee'
import '../Services.css'
import Menue from '../../WalletDesign/Menue'
import {useRef} from 'react';

const Card = (props) => {
    const data=useRef();
  const handleSubmit = () => {
    console.log(data.current.value,"amount")
    localStorage.setItem("amount",data.current.value)
   }
    return (
<header>
    <Menue />
    <div className="container-fluid d-flex justify-content-center ">
        <section className="row  ">
            <div className="col-12 col-md-12 p-2" data-aos="fade-right"></div>

            <div className='container pt-4' >
                <form >

                    <div className="card card_services">
                        <Titlee />
                        <div className="card-body">
                            <h6 className="text-name text-name_services" >Wallet_ID</h6>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="userID" aria-label="userID"
                                   
                                />
                            </div>
                            <div className="error-input-hadi">
                              
                            </div>
                            <h6 className="text-name " >Agent's email</h6>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Agent's email" aria-describedby="basic-addon2"
                                id='amount'
                                   
                                />
                                <span className="input-group-text input-group-textt" id="basic-addon2">@gmail.com</span>
                            </div>
                            <div className="error-input-hadi">
                             
                            </div>
                            <h6 className="text-name " >Amount of money</h6>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Amount to be deposited"
                                ref={data}
                                />
                            </div>

                            <div className="error-input-hadi">
                              
                            </div>
                            <h6 className='text-name '>currency type</h6>
                            <div className="input-group mb-3">
                                <select className="form-select" aria-label="Default select example">
                                    <option value="1">dollar</option>
                                    <option value="2">dinar</option>
                                    <option value="3">shekel</option>
                                </select>
                            </div>
                            <div className="btn-groub text-center text-black btn-groub_services">
                                <button type="button" className="btn btn-outline-light btn_services" onClick={handleSubmit} >add money</button>
                                <button type="button" className="btn btn-outline-light btn_services">cancel</button>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
            </section>
            </div>
            </header>
    )
}
export default Card