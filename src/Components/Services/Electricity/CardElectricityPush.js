import React from "react";
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router';


const CardElectricity = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const showToastMessage = () => {
        toast.success('Success Notification !', {
            position: toast.POSITION.TOP_RIGHT

    });}
    const navigate = useNavigate();

        return(
        <>
            <div className='container' >
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="card card_services">
                        <div className="topic text-center topic_srvices">
                            <h2 className="card-title text-white card-title_services">Charge the electricity card</h2>
                            <h5 className="card-text text-white card-text_services">Enter your data in the table</h5>
                        </div>
                        <div className="card-body">
                            <h6 className="text-name ttext-name_services" >electricity_number</h6>
                            <div className="input-group mb-4">
                                <input type="text" className="form-control" placeholder="userID" aria-label="userID"
                                    {...register("input1", { required: "Please,input valid number" })}
                                />
                            </div>
                            <div className="error-input-hadi">
                                <ErrorMessage errors={errors} name="input1" />
                            </div>
                            <h6 className="text-name text-name_services" >The amount to be shipped</h6>
                            <div className="input-group mb-4">
                                <input type="text" className="form-control" placeholder="Amount to be deposited"
                                    {...register("input2", { required: "Please,input The amount to be shipped" })}
                                />
                                <span className="input-group-text input-group-text_services">.00</span>
                            </div>
                            <div className="error-input-hadi">
                                <ErrorMessage errors={errors} name="input2" />
                            </div>
                            <h6 className='text-name text-name_services'>note (Not mandatory) </h6>
                            <div className="note input-group note_services">
                                <textarea name="message" className="note note_services" > </textarea>
                            </div>
                        </div>
                        <div className="btn-groub text-center text-black btn-groub_services">
                            <button type="button" className="btn btn-outline-light btn_services" onClick={handleSubmit(showToastMessage)}>add money</button>
                        </div>

        <h6 className='text-name text-name_services'>note (Not mandatory) </h6>
        <div className="note input-group note_services">
        <textarea name="message" className="note note_services" > </textarea>
        </div>
        </div>
        <div className="btn-groub text-center text-black btn-groub_services">
                <button type="button" className="btn btn-outline-light text-dark btn_services" onClick={handleSubmit(showToastMessage)}>add money</button>
                <button type="button" className="btn btn-outline-light text-dark btn_services" onClick={()=>navigate('/wallet') }>cancel</button>
                
            </div>
            </form>
            </div>


        </>
    )
}


export default CardElectricity