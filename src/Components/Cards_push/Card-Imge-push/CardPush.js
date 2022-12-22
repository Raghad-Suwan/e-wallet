import React from 'react';
import { useNavigate } from 'react-router';
import "./CardPush.css";

const CardPush = (props) => {
    const navigate=useNavigate() ;
    const routChange=()=>{
        navigate(props.linke);
    }

    return (
        <div className='card text-center card_paybill '>
            <div className='overflow over_paybill'>
                <img src={props.imagsrc} alt="image1" className='card-img-top_paybill' />
            </div>
            <div className='card-body text-dark card-body_paybill'>
                <p className='card-text text-secondary card-text_paybill'>{props.text}</p>
                <button onClick={routChange} className='btn btn-outline-dark text-dark button_paybill'>continue </button>
            </div>
        </div>
    )
}
export default CardPush;