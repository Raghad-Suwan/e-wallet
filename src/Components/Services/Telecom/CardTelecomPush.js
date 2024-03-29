import React from "react";
import { useForm } from 'react-hook-form';
        import { ErrorMessage } from '@hookform/error-message'; 
        import { ToastContainer, toast } from 'react-toastify';
        import { useNavigate } from 'react-router';


        const CardTelecomPush=()=>{
                        const { register, formState: { errors }, handleSubmit } = useForm();
                        const onSubmit = data => console.log(data);
                        const showToastMessage = () => {
                        toast.success('Success Notification !', {
                                position: toast.POSITION.TOP_RIGHT
                        });}
        const navigate = useNavigate();

                return(
                <>
                <div>
                <div className='container' >
                <form onSubmit={handleSubmit(onSubmit)} >
                <div className="card card_services">
                <div className="topic text-center topic_srvices">
                        <h2 className="card-title text-white card-title_services">Telecom bill payment voucher</h2>
                        <h5 className="card-text text-white card-text_services">Enter your data in the table</h5>

                        </div>

                <div className="card-body">
                
                <h6 className="text-name text-name_services" >Subscriber_number</h6>
                <div className="input-group mb-4">
                <input type="text" className="form-control" placeholder="user_Number" aria-label="user_Number"
                {...register("input1", { required: "Please,input Subscriber_number "})}
                />
                </div>
                <div className="error-input-hadi">
                                        <ErrorMessage errors={errors} name="input1"/>
                                        </div>
                <h6 className="text-name text-name_telecom" >invoice value</h6> 
                <div className="input-group mb-4">
                <input type="text" className="form-control" placeholder="price" 
                                {...register("input2", { required: "Please,input invoice value"})}/>


                <span className="input-group-text input-group-text_services">.00</span> 
                </div>
                <div className="error-input-hadi">
                                        <ErrorMessage errors={errors} name="input2"/>
                                        </div>
                <h6 className="text-name text-name_telecom" >The Company's_name</h6>
                <div className="input-group mb-4">
                <input type="text" className="form-control" placeholder="Jawwal / ooredo /paltel" aria-label="Jawwal / ooredo /paltel"
                                {...register("input3", { required: "Please,input The Company's_name"})}/>


                </div>

                <div className="error-input-hadi">
                                        <ErrorMessage errors={errors} name="input3"/>
                                        </div>
                </div>
                <div className="btn-groub text-center text-black btn-groub_services">
                        <button type="button" className="btn btn-outline-light text-dark btn_services" onClick={handleSubmit(showToastMessage)} >add money</button>
                        <button type="button" className="btn btn-outline-light text-dark btn_services" onClick={()=>navigate('/wallet') }>cancel</button>
                        
                        
                        
                </div>
                </div>
                <ToastContainer />
                </form>
                </div>

                </div>
</>



)




}


export default CardTelecomPush