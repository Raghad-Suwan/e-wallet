import React from 'react';

    const Cards1 = (props) =>{
    
    return (
    <>
   
            <div className='col-md-4 col-lg-4 col-sm-12 '> 
                <div className="card text-bg-light">
                        <div className="card-header-malak1">{props.header}</div>
                            <div className="card-body-malak">
                                <h6 className="card-title-malak1">{props.local}</h6>
                            </div> 
                        </div>
                </div>
              
    </>

    );
    }

    export default Cards1;