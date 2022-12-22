import React from 'react';
import { useNavigate } from 'react-router';
import "./CardPush.css";



const Cardpushkind=(props)=>{
    const  rautaring = useNavigate(); 
    const routecardpush = () =>{ 
        rautaring(props.continue);
    }
    return(
        <div className='container-fluid d-flex w-100 h-100 justify-content-center '>
    <div className='card text-center card-paybil h-100 '>
        <div className='overflow over_paybill'>
            <img src={props.imgsrc} alt="image1" className='card-img-top_paybill'/>
        </div>
        <div className='card-body text-dark card-body_paybill'>
            <p className='card-text text-secondary card-text_paybill'>{props.textt}</p>
            <button onClick={routecardpush} className='btn btn-outline-success button_paybill text-dark'>continue</button>
        </div>
    </div>
    </div>
            )
        }

    export default Cardpushkind
