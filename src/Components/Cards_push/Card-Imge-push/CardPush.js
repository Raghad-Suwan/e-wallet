import React from 'react';
import './CardPush.css';

import { useNavigate } from 'react-router';



const Cardpushkind=(props)=>{
    const  rautaring = useNavigate(); 
    const routecardpush = () =>{ 
        rautaring(props.continue);
    }
    return(
        <div className='container-fluid d-flex w-100 h-100 justify-content-center '>
    <div className='card text-center card-push h-100 '>
        <div className='overflow ovverpush'>
            <img src={props.imgsrc} alt="image1" className='card-img-top '/>
        </div>
        <div className='card-body text-dark card-body-push '>
            <p className='card-text text-secondary card-text-push'>{props.textt}</p>
            <button onClick={routecardpush} className='btn btn-outline-success button_push text-white'>continue</button>
        </div>
    </div>
    </div>
            )
        }

    export default Cardpushkind
