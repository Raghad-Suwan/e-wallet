import React from "react";
import './CardTelecomPush.css';


const CardTelecomPush=()=>{
return(
<>
    <div>
        

    <div className='container' >
<div className="card card_telecom">
<div className="topic text-center topic_telecom">
        <h2 className="card-title text-white card-title_telecom">Telecom bill payment voucher</h2>
        <h5 className="card-text text-white">Enter your data in the table</h5>

        </div>

<div className="card-body">
<h6 className="text-name text-name_telecom" >Subscriber_number</h6>
<div className="input-group mb-4">
<input type="number" class="form-control" placeholder="user_Number" aria-label="user_Number" />
</div>
<h6 className="text-name text-name_telecom" >invoice value</h6> 
<div className="input-group mb-4">
<input type="number" class="form-control" placeholder="price" />
<span className="input-group-text text-white input-group-text_telecom">.00</span> 
</div>

<h6 className="text-name text-name_telecom" >The Company's_name</h6>
<div className="input-group mb-4">
<input type="text" class="form-control" placeholder="Jawwal / ooredo /paltel" aria-label="Jawwal / ooredo /paltel" />
</div>


</div>
<div className="btn-groub text-center text-black btn-groub_telecom">
        <button type="button" className="btn btn-outline-light btn_telecom" >add money</button>
        
        
        
    </div>
</div>
</div>

</div>
</>



)




}


export default CardTelecomPush