import React from 'react';
import BarChart from './BarChart';

    const CardBarDemo = () =>{
    
    return (
    <>

            <div className='col-md-6 col-xl-6 col-sm-12'>
            <div className=' cardChart-bar'> 
                <div className="card text-bg-light">
                        <div className="card-header-bar">The amount of money withdrawn from the wallet per month</div>
                            <div className="col-12 card-body-bar">
                               <BarChart/>
                            </div> 
                        </div>
                </div>
                </div>

    </>

    );
    }

    export default CardBarDemo ;