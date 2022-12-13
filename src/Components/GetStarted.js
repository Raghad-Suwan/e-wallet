import React from 'react';
import './GetStarted.css';

const GetStarted =()=>{
    return(
<section className='text-center p-5 rag '>
    <div className='container '>
        <div className='d-sm-flex justify-content-center  text-light '>
            <div>
                <h1 className='text-capitalize m-4'>
                    Get started by Signup in the wallet
                </h1>
                <button className='btn btn-lg text-uppercase btnGetSterted'>
                    get started
                </button>
            </div>
        </div>
    </div>
</section>
    );
}
export default GetStarted;