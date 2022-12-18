import React  from "react";
import  LineChart from "./LineChart ";


const CardLine = () =>{
    
    return (
    <>
             <div className="col-md-6 col-xl-6 col-sm-12 ">
            <div className='cardChart-line'> 
                <div className="card text-bg-light">
                        <div className="card-header-line">The number of times the user has used the wallet</div>
                            <div className=" col-12 card-body-line">
                                <div>
                                <LineChart/>
                                </div>
                            </div> 
                        </div>
                </div>
                </div>
    </>

    );
    }

    export default CardLine;