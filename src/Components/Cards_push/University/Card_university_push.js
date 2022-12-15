import React from "react";


const Card_push_university=()=>{
return(
<>
    <div>
        
    {/* <Picture /> */}
    <div className='container' >
<div className="card">
<div className="topic text-center">
        <h2 className="card-title text-white">University payment voucher</h2>
        <h5 className="card-text text-white">Enter your data in the table</h5>

        </div>

<div className="card-body">
<h6 className="text-name " >student_number</h6>
<div className="input-group mb-4">
<input type="number" class="form-control" placeholder="userID" aria-label="userID" />
</div>
<h6 className="text-name " >University_Name</h6>
<div className="input-group mb-4">
<input type="text" class="form-control" placeholder="an_najah" aria-label="an_najah" />
</div>
<h6 className="text-name " >Student premium</h6> 
<div className="input-group mb-4">
<input type="number" class="form-control" placeholder="Amount to be deposited" />
<span className="input-group-text text-white">.00</span> 
</div>
<h6 className='text-name'>note (Not mandatory) </h6>
<div className="note input-group">
<textarea name="message" className="note" > </textarea>
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


export default Card_push_university