import React from "react";


const Card_push_university=()=>{
return(
<>
    <div>
        
    {/* <Picture /> */}
    <div className='container body_university' >
<div className="card card_university">
<div className="topic text-center topic_university">
        <h2 className="card-title text-white card-title_university">University payment voucher</h2>
        <h5 className="card-text text-white">Enter your data in the table</h5>

        </div>

<div className="card-body">
<h6 className="text-name text-name_university" >student_number</h6>
<div className="input-group mb-4">
<input type="number" class="form-control" placeholder="userID" aria-label="userID" />
</div>
<h6 className="text-name text-name_university" >University_Name</h6>
<div className="input-group mb-4">
<input type="text" class="form-control" placeholder="an_najah" aria-label="an_najah" />
</div>
<h6 className="text-name text-name_university" >Student premium</h6> 
<div className="input-group mb-4">
<input type="number" class="form-control" placeholder="Amount to be deposited" />
<span className="input-group-text text-white input-group-text_university">.00</span> 
</div>
<h6 className='text-name text-name_university'>note (Not mandatory) </h6>
<div className="note input-group note_university">
<textarea name="message" className="note note_university"  > </textarea>
</div>
</div>
<div className="btn-groub text-center text-black btn-groub_university">
        <button type="button" className="btn btn-outline-light " >add money</button>
        
        
        
    </div>
</div>
</div>

</div>
</>



)




}


export default Card_push_university