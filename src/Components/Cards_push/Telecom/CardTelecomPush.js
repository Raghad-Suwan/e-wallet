import React from "react";
import './CardTelecomPush.css';
import { useForm } from 'react-hook-form';
        import { ErrorMessage } from '@hookform/error-message'; 
        import { ToastContainer, toast } from 'react-toastify';

const CardTelecomPush=()=>{

        const { register, formState: { errors }, handleSubmit } = useForm();
        const onSubmit = data => console.log(data);
        const showToastMessage = () => {
        toast.success('Success Notification !', {
                position: toast.POSITION.TOP_RIGHT
        });}
return(
<>
    <div>
        

    <div className='container' >
    <form onSubmit={handleSubmit(onSubmit)} >
<div className="card card_telecom">
<div className="topic text-center topic_telecom">
        <h2 className="card-title text-white card-title_telecom">Telecom bill payment voucher</h2>
        <h5 className="card-text text-white">Enter your data in the table</h5>

        </div>

<div className="card-body">
    
<h6 className="text-name text-name_telecom" >Subscriber_number</h6>
<div className="input-group mb-4">
<input type="number" class="form-control" placeholder="user_Number" aria-label="user_Number"
{...register("input1", { required: "Please,input valid id "})}
/>
</div>
<div className="error-input-hadi">
                        <ErrorMessage errors={errors} name="input1"/>
                        </div>
<h6 className="text-name text-name_telecom" >invoice value</h6> 
<div className="input-group mb-4">
<input type="number" class="form-control" placeholder="price" 
                {...register("input2", { required: "Please,input valid id "})}/>


<span className="input-group-text text-white input-group-text_telecom">.00</span> 
</div>
<div className="error-input-hadi">
                        <ErrorMessage errors={errors} name="input2"/>
                        </div>
<h6 className="text-name text-name_telecom" >The Company's_name</h6>
<div className="input-group mb-4">
<input type="text" class="form-control" placeholder="Jawwal / ooredo /paltel" aria-label="Jawwal / ooredo /paltel"
                {...register("input3", { required: "Please,input valid id "})}/>


</div>

<div className="error-input-hadi">
                        <ErrorMessage errors={errors} name="input3"/>
                        </div>
</div>
<div className="btn-groub text-center text-black btn-groub_telecom">
        <button type="button" className="btn btn-outline-light btn_telecom" onClick={handleSubmit(showToastMessage)} >add money</button>
        
        
        
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