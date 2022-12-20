import React from 'react';
import Titlee from './Titlee';
import './deposit.css';
import AdresDeposite from './Adress';
import { useForm } from 'react-hook-form';
        import { ErrorMessage } from '@hookform/error-message'; 
        import { ToastContainer, toast } from 'react-toastify';
//function
const Card = (props) =>{
    const { register, formState: { errors }, handleSubmit } = useForm();
        const onSubmit = data => console.log(data);
        const showToastMessage = () => {
        toast.success('Success Notification !', {
                position: toast.POSITION.TOP_RIGHT
        });}
return(
    <div>
    <AdresDeposite />
        <div className='container' >
        <form onSubmit={handleSubmit(onSubmit)} >

<div className="card caaaard">
    <Titlee />
<div className="card-body">
<h6 className="text-name teext-naame" >Wallet_ID</h6>
<div className="input-group mb-3">
<input type="number" className="form-control" placeholder="userID" aria-label="userID" 
                {...register("input1", { required: "Please,input Wallet_ID"})}
/>
</div>
<div className="error-input-hadi">
                        <ErrorMessage errors={errors} name="input1"/>
                        </div>
<h6 className="text-name " >Agent's email</h6>
<div className="input-group mb-3">
    <input type="text" className="form-control" placeholder="hadisawalmeh123"  aria-describedby="basic-addon2" 
                    {...register("input2", { required: "Please,input Agent's email "})}
                    />
    <span className="input-group-text text-white input-group-textt" id="basic-addon2">@gmail.com</span>
</div>
<div className="error-input-hadi">
                        <ErrorMessage errors={errors} name="input2"/>
                        </div>
<h6 className="text-name " >Amount of money</h6>
<div className="input-group mb-3">
<input type="number" className="form-control" placeholder="Amount to be deposited" 
                {...register("input3", { required: "Please,input valid id "})}/>
            
<span className="input-group-text text-white input-group-textt">.00</span> 
</div>
<div className="error-input-hadi">
                        <ErrorMessage errors={errors} name="input3"/>
                        </div>
<h6 className='text-name '>currency type</h6>
<div className="input-group mb-3">
<select className="form-select" aria-label="Default select example">
<option value="1">dollar</option>
<option value="2">dinar</option>
<option value="3">shekel</option>
</select>
</div>
<div className="btn-groub text-center text-black bttn-groubb">
        <button type="button" className="btn btn-outline-light btnnnn" onClick={handleSubmit(showToastMessage)} >add money</button>
        <button type="button" className="btn btn-outline-light btnnnn">cancel</button> 
        
        
    </div>
</div>
</div>
<ToastContainer />

</form>
</div>
</div>
)
}
export default Card