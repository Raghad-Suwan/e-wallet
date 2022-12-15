import React from 'react';

    const Cards1 = (props) =>{
    
    return (
    <>
   
            <div className='col-md-4 cardChart1'> 
                <div className="card border-warning">
                        <div className="card-header">{props.header}</div>
                            <div className="card-body-malak">
                                <h6 className="card-title">{props.title} </h6>
                            </div> 
                        </div>
                </div>
              
    </>

    );
    }

    export default Cards1;