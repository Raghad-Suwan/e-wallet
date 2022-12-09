
import React from "react";
const Button=()=>{
    const added =()=>{
        alert("The money has been deposited successfully")
    }
    return(
    <div className="btn-groub text-center text-black bttn-groubb">
        <button type="button" className="btn btn-outline-light btnnnn" onClick={added} >add money</button>
<<<<<<< HEAD
        <button type="button" className="btn btn-outline-light btnnnn">cancel</button> 
        
        
=======
        <button type="button" className="btn btn-outline-light btnnnn">cancel</button>
>>>>>>> 3a6eaa73b81a9a5c117c6b8119edcc34fe9153a7
    </div>
    )
}
export default Button