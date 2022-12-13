import './Card3.css';
import React from 'react';
const Card3=(props)=>{
    return(
      
        <div className='h-100   text-center perent'>
        <div className='overflow '>
            {/* <img src={props.imgsrc} alt="image1" className='card-img-top'/> */}
        </div>
        <div className='card-body text-dark lara'>
            <h4 className='card-title titlelll'><u>{props.title}</u></h4>
            <p className='card-text text-secondary textlll'>{props.textt}</p>
            <div ></div>
        </div >
</div>
    
            )
        }

    
    export default Card3