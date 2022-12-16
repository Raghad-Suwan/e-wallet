import React  from "react";
import LineChart from "./ChartLine";
import PieChart from "./PieChart";

const CardLine = (props) =>{
    
    return (
    <>
   
            <div className='col-md-6 cardChart-line'> 
                <div className="card text-bg-light">
                        <div className="card-header-line">{props.header}</div>
                            <div className="card-body-line">
                                <div>
                                <LineChart/>
                                </div>
                            </div> 
                        </div>
                </div>
    </>

    );
    }

    export default CardLine;