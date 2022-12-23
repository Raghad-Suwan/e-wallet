import React from "react";
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { ErrorMessage } from '@hookform/error-message';
const CardWithdraw = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const showToastMessage = () => {
        toast.success('Success Notification !', {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    return (
        <>
            <div>
                <div className='container-fluid withdrawcontainer justify-content-center pt-5' >
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="card card_services ">
                            <div className="topic text-center topic_srvices">
                                <h2 className="card-title  card-title_services text-capitalize">cash withdrawa slip money</h2>
                                <h5 className="card-text  card-text_services">Enter your data in the table</h5>
                            </div>
                            <div className="card-body">

                                <h6 className="text-name text-name_services" >receiver_number</h6>

                                <div className="input-group mb-4">
                                    <input type="text" className="form-control" placeholder="userID" aria-label="userID"
                                        {...register("input1", { required: "Please,input valid id " })}
                                    />
                                </div>
                                <div className="error-input-hadi">
                                    <ErrorMessage errors={errors} name="input1" />
                                </div>
                                <h6 className="text-name text-name_services" >Amount of money</h6>
                                <div className="input-group mb-4">
                                    <input type="text" className="form-control" placeholder="Amount to be deposited"
                                        {...register("input2", { required: "Please,input valid id " })}
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
                        </div>
                        <ToastContainer />
                    </form>
                </div>
            </div>
        </>
    )
}
export default CardWithdraw