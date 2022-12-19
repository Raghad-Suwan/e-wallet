import './Card3.css';
import React from 'react';
const Card3 = (props) => {
    return (
        <div className=' text-center perent'>
            <div className='card-body text-dark lara'>
                <p className='h4 card-title m-3 titlelll'><u>{props.title}</u></p>
                <p className='card-text text-dark textlll'>{props.textt}</p>
            </div >
        </div>
    );
}
export default Card3