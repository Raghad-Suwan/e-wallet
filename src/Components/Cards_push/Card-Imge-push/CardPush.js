import React from 'react'




const Cardpushkind=(props)=>{
    return(
    
    
        <div className='container-fluid d-flex justify-content-center bodyServices'>
    <div className='card text-center card_push'>
        <div className='overflow ovver'>
            <img src={props.imgsrc} alt="image1" className='card-img-top card-img-top_push'/>
        </div>
        <div className='card-body text-dark card-body_push'>
            <p className='card-text text-secondary card-text_push'>{props.textt}</p>
            <a href='#' className='btn btn-outline-success button_push text-white'>continue</a>
        </div>
    </div>
    </div>


            )
        }

    export default Cardpushkind