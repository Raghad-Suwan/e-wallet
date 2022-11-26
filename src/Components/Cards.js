import React from 'react'




const Cards=(props)=>{
    return(
        
    <div className='card text-center'>
        <div className='overflow'>
            <img src={props.imgsrc} alt="image1" className='card-img-top'/>
        </div>
        <div className='card-body text-dark'>
            <h4 className='card-title'><u>{props.title}</u></h4>
            <p className='card-text text-secondary'>{props.textt}</p>
            <a href='#' className='btn btn-outline-success'>Read more</a>
        </div>
    </div>
            )
        }

    export default Cards 
