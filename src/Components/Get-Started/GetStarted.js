import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GetStarted.css';

const GetStarted =()=>{
    const navigate= useNavigate();
    return(
<section className='text-center p-5 rag '>
    <div className='container '>
        <div className='d-md-flex justify-content-center '>
            <div>
                <h1 className='text-capitalize m-4 textGetStarted'>
                    Get started by Signup in the wallet
                </h1>
                <button className='btn btn-lg text-uppercase btn-outline-light btnGetSterted'
                onClick={()=>navigate('/sign')}
                >
                    get started
                </button>
            </div>
        </div>
    </div>
</section>
    );
}
export default GetStarted;