import React from 'react'




const Card_push_kind=(props)=>{
    return(
      
    
        <div className='row'>
    <div className='card text-center caaard'>
        <div className='overflow ovver'>
            <img src={props.imgsrc} alt="image1" className='card-img-top caaard-img-top'/>
        </div>
        <div className='card-body text-dark caaard-bodyy'>
            <p className='card-text text-secondary caaard-textt'>{props.textt}</p>
            <a href='#' className='btn btn-outline-success buttooon text-white'>continue</a>
        </div>
    </div>
    </div>


  
   
            )
        }

    export default Card_push_kind
