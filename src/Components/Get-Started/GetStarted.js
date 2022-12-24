import React from 'react';
import {useNavigate} from 'react-router-dom';
import './GetStarted.css';

const GetStarted = () => {
    const navigate = useNavigate();
    return (
        <section className='text-center p-5  sectionGetStart '>
            <div className='container-fluid w-100'>
                <div className='d-md-flex justify-content-center '>
                    <div>
                        <h1 className='text-capitalize m-4 textGetStarted'>
                            Get started by Signup in the wallet
                        </h1>
                        <button className='btn btn-md text-uppercase btn-outline-light btnGetSterted'
                            onClick={() => navigate('/sign')}
                            data-aos="zoom-out"
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