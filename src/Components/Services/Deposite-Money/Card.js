import React from 'react'
import Titlee from './Titlee'
import '../Services.css'
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { ToastContainer, toast } from 'react-toastify';
import Menue from '../../WalletDesign/Menue'
import { useNavigate } from 'react-router';

const Card = (props) => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const showToastMessage = () => {
        toast.success('Success Notification !', {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    const navigate = useNavigate();
    return (
<header>
    <Menue />
    <div className="container-fluid d-flex justify-content-center ">
        <section className="row  ">
            <div className="col-12 col-md-12 p-2" data-aos="fade-right"></div>

            <div className='container pt-4' >
                <form onSubmit={handleSubmit(onSubmit)} >

                    <div className="card card_services">
                        <Titlee />
                        <div className="card-body">
                            <h6 className="text-name text-name_services" >Wallet_ID</h6>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="userID" aria-label="userID"
                                    {...register("input1", { required: "Please,input Wallet_ID" })}
                                />
                            </div>
                            <div className="error-input-hadi">
                                <ErrorMessage errors={errors} name="input1" />
                            </div>
                            <h6 className="text-name " >Agent's email</h6>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Agent's email" aria-describedby="basic-addon2"
                                    {...register("input2", { required: "Please,input Agent's name " })}
                                />
                                <span className="input-group-text input-group-textt" id="basic-addon2">@gmail.com</span>
                            </div>
                            <div className="error-input-hadi">
                                <ErrorMessage errors={errors} name="input2" />
                            </div>
                            <h6 className="text-name " >Amount of money</h6>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Amount to be deposited"
                                    {...register("input3", { required: "Please,input valid id " })} />

                                <span className="input-group-text input-group-text_services ">.00</span>
                            </div>
                            <div className="error-input-hadi">
                                <ErrorMessage errors={errors} name="input3" />
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
                                <button type="button" className="btn btn-outline-light text-dark btn_services" onClick={handleSubmit(showToastMessage)} >add money</button>
                                <button type="button" className="btn btn-outline-light text-dark btn_services" onClick={()=>navigate('/wallet') }>cancel</button>


                            </div>
                        </div>
                    </div>
                    <ToastContainer />

                </form>
            </div>
            </section>
            </div>
            </header>
    )
}
export default Card