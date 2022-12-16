import React from 'react';
import BarChartDemo from './ChartVertical';

    const CardBarDemo = () =>{
    
    return (
    <>
            <div className='col-md-12 cardChart-bar'> 
                <div className="card text-bg-light">
                        <div className="card-header-bar"></div>
                            <div className="card-body-bar">
                               <BarChartDemo/>
                            </div> 
                        </div>
                </div>
    </>

    );
    }

    export default CardBarDemo ;