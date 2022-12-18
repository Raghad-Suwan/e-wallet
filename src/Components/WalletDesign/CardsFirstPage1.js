import React from 'react';

    const Cards1 = (props) =>{
    
    return (
    <>
   
            <div className='col-md-4 cardChart1'> 
                <div className="card text-bg-secondary mb-3">
                        <div className="card-header-malak1">{props.header}</div>
                            <div className="card-body-malak">
                                <h6 className="card-title-malak1">{props.title} </h6>
                            </div> 
                        </div>
                </div>
              
    </>

    );
    }

    export default Cards1;