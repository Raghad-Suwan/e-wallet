import React from 'react'
const CardsServices =(props)=>{
    return(
        
    <div className='card text-center caaard'>
        <div className='overflow ovver'>
            <img src={props.imgsrc} alt="image1" className='card-img-top'/>
        </div>
        <div className='card-body text-dark caaard-bodyy'>
            <h4 className='card-title caaard-title'><u>{props.title}</u></h4>
            <p className='card-text text-secondary caaard-textt'>{props.textt}</p>
            <a href={props.link} className='btn btn-outline-dark text-dark buttooon'>Read more</a>
        </div>
    </div>
            )
        }
    export default CardsServices;