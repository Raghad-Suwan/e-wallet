import React from "react";


const Card_push_telecom=()=>{
return(
<>
    <div>
        

    <div className='container' >
<div className="card">
<div className="topic text-center">
        <h2 className="card-title text-white">Telecom bill payment voucher</h2>
        <h5 className="card-text text-white">Enter your data in the table</h5>

        </div>

<div className="card-body">
<h6 className="text-name " >Subscriber_number</h6>
<div className="input-group mb-4">
<input type="number" class="form-control" placeholder="user_Number" aria-label="user_Number" />
</div>
<h6 className="text-name " >invoice value</h6> 
<div className="input-group mb-4">
<input type="number" class="form-control" placeholder="price" />
<span className="input-group-text text-white">.00</span> 
</div>

<h6 className="text-name " >The Company's_name</h6>
<div className="input-group mb-4">
<input type="text" class="form-control" placeholder="Jawwal / ooredo /paltel" aria-label="Jawwal / ooredo /paltel" />
</div>


</div>
<div className="btn-groub text-center text-black">
        <button type="button" className="btn btn-outline-light " >add money</button>
        
        
        
    </div>
</div>
</div>

</div>
</>



)




}


export default Card_push_telecom