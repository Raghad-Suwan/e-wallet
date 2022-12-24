import React from "react";
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { ToastContainer, toast } from 'react-toastify';


const CardPushUniversity = () => {
        const { register, formState: { errors }, handleSubmit } = useForm();
        const onSubmit = data => console.log(data);
        const showToastMessage = () => {
                toast.success('Success Notification !', {
                        position: toast.POSITION.TOP_RIGHT
                });
        }
        return (
                <>
                        <div className='container ' >
                                <form onSubmit={handleSubmit(onSubmit)} >
                                        <div className="card card_services">
                                                <div className="topic text-center topic_srvices">
                                                        <h2 className="card-title text-white card-title_services">University payment voucher</h2>
                                                        <h5 className="card-text text-white card-text_services">Enter your data in the table</h5>
                                                </div>
                                                <div className="card-body">
                                                        <h6 className="text-name text-name_university" >student_number</h6>
                                                        <div className="input-group mb-4">
                                                                <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="userID"
                                                                        aria-label="userID"
                                                                        {...register("input1", { required: "Please,input student_number " })}
                                                                />
                                                        </div>
                                                        <div className="error-input-hadi">
                                                                <ErrorMessage errors={errors} name="input1" />
                                                        </div>
                                                        <h6 className="text-name text-name_services" >University_Name</h6>
                                                        <div className="input-group mb-4">
                                                                <input type="text" className="form-control" placeholder="an_najah" aria-label="an_najah"
                                                                        {...register("input2", { required: "Please,input University_Name " })}
                                                                />
                                                        </div>
                                                        <div className="error-input-hadi">
                                                                <ErrorMessage errors={errors} name="input2" />
                                                        </div>
                                                        <h6 className="text-name text-name_services" >Student premium</h6>
                                                        <div className="input-group mb-4">
                                                                <input type="text" className="form-control" placeholder="Amount to be deposited"
                                                                        {...register("input3", { required: "Please,input Student premium" })} />
                                                                <span className="input-group-text input-group-text_services">.00</span>
                                                        </div>
                                                        <div className="error-input-hadi">
                                                                <ErrorMessage errors={errors} name="input3" />
                                                        </div>
                                                        
                                                </div>
                                                <div className="btn-groub text-center text-black btn-groub_services">
                                                        <button type="button" className="btn btn-outline-light btn_services" onClick={handleSubmit(showToastMessage)}>add money</button>
                                                </div>
                                        </div>
                                        <ToastContainer />
                                </form>
                        </div>
                </>
        )
}

export default CardPushUniversity 