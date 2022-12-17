import React from 'react';
import './HowWorks.css';
const HowWorks = (props) => {
    return (
        <div className='container p-4'>
            <div className='row d-sm-flex'>
                <div className='col col-md-12 col-lg-5 d-flex text-capitalize text-center justify-content-center needInfo'>
                    <p className='h3'>{props.text1}</p>
                    <p className='lead'>
                        {props.text2}
                    </p>
                </div>
                <div className='col col-md-12 col-lg-5 '>
                    <img className=' img-fluid '
                        src={props.src}
                        alt={props.alt} />
                </div>
            </div>
        </div>
    );
}
export default HowWorks;