import React  from "react";
import  LineChart from "./LineChart ";


const CardLine = () =>{
    
    return (
    <>
             <div className="col-md-6 col-xl-6 col-sm-12 ">
            <div className='cardChart-pie'> 
                <div className="card text-bg-light">
                        <div className="card-header-pie">The number of times the user has used the wallet</div>
                            <div className=" col-12 card-body-pie">
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