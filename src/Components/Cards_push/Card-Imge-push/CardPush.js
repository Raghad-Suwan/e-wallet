import React from 'react'
import { useNavigate } from 'react-router';



const Cardpushkind=(props)=>{
    const  navigate = useNavigate(); 
    const routeChange = () =>{ 
        navigate(props.link);
    }
    return(
    
    
        <div className='container-fluid d-flex justify-content-center '>
    <div className='card text-center card_push'>
        <div className='overflow ovver'>
            <img src={props.imgsrc} alt="image1" className='card-img-top '/>
        </div>
        <div className='card-body text-dark card-body_push'>
            <p className='card-text text-secondary card-text_push'>{props.textt}</p>
            <button onClick={routeChange} className='btn btn-outline-success button_push text-white'>continue</button>
        </div>
    </div>
    </div>


            )
        }

    export default Cardpushkind
