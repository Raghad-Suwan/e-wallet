
import React from "react";
const Button=()=>{
    const added =()=>{
        alert("The money has been deposited successfully")
    }
    return(
    <div className="btn-groub text-center text-black bttn-groubb">
        <button type="button" className="btn btn-outline-light btnnnn" onClick={added} >add money</button>
        <button type="button" className="btn btn-outline-light btnnnn">cancel</button>
    </div>
    )
}
export default Button